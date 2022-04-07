 <template>
  <div id="HelloWorld">
    
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in listItem" :key="index" style="text-align: left">
          <td>{{ index+1 }}</td>
          <span v-html="item.content"></span>
        </tr>
      </tbody>
    </table>
    <br/>
    <button @click="handleAdd(addItem,content)">ADD</button>
    <editor
      api-key="qdx7p483v5kch29cl9w7eljuhoupy80s4exxlsxfuwon5tfr"
      v-model="content"
      :init="{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount image',
        ],
        toolbar:
          'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat |  image help',
        content_style:
          'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        images_upload_handler: function (blobInfo,success,failure) {
          handleUploadImg(blobInfo,success,failure);
        },
      }"
    />
  </div>
</template>

 <script>
import Editor from "@tinymce/tinymce-vue";


export default {
  data() {
    return {
      content: "",
    };
  },
  name: "HelloWorld",
  components: {
    editor: Editor
  },  props: {
    listItem: {
      type: Array,
      default: () => []
    },
    addItem:Function,
    deleteItem:Function,
    updateItem:Function,
    getListItem:Function,
    totalPage:Number,
    activePage:Number,
    textSearch:String,
  },
  methods: {
    async handleUploadImg(blobInfo,success,failure) {
      console.log(blobInfo.blob(), "a");
      var response;
      var url = "http://localhost:3001/img";
      var form = new FormData();
      var arrImg =[]
      form.append("img", blobInfo.blob());
      try {
        response = await fetch(url, {
          method: "POST",
          body: form,
        });
        const res = await response.json();
        success(res.url);
        arrImg.push(res.url);
      } catch (error) {
        failure("Invalid JSON: " + response);
        return;
      }
    },
    handleAdd(addItem,content) {
      addItem({content: content})
    },
  },
};
</script>
