<template>
  <!-- // localhost:3000/blog, type=POST, Authorization: Bearer Token
// Body : {
//     "Title": "Sample Title",
//     "Heading": Binary Data,
//     "SubHeading": Binary Data,
//     "Content": Binary Data,
//     "ReadTime": 10
// } -->
  <div class="Create-Post-Window">
    <div class="Create-Post-Contents">
      <div id="Title" class="Block">
        <div class="merriweather-Medium">Enter Title</div>
        <textarea></textarea>
      </div>
      <div class="Margin">&nbsp;</div>
      <div id="Read-Time" class="Block">
        <div class="merriweather-Medium">Enter Reading Title</div>
        <textarea></textarea>
      </div>
      <div class="Margin">&nbsp;</div>
      <div id="Heading" class="Block">
        <div class="merriweather-Medium">Enter Heading</div>
        <Textarea selector="Heading" />
      </div>
      <div class="Margin">&nbsp;</div>
      <div id="SubHeading" class="Block">
        <div class="merriweather-Medium">Enter Sub Heading</div>
        <Textarea selector="SubHeading" />
      </div>
      <div class="Margin">&nbsp;</div>
      <div class="Block">
        <div class="merriweather-Medium">Enter Blog Content</div>
        <Textarea selector="Content" />
      </div>
    </div>
    <div class="Create-Post-Settings">
      <div class="Apply" @click="submitPost">Apply</div>
      <div class="Close" @click="closeWindow">Close</div>
    </div>
  </div>
</template>

<script>
import Textarea from './Textarea.vue';

export default {
  name: 'CreatePost',
  components: {
    Textarea
  },
  props: ['token'],
  methods: {
    closeWindow() {
      this.$emit('close');
    },
    async submitPost() {
      const encodeBase64 = (str) => btoa(unescape(encodeURIComponent(str || "")));

      const formData = {
        Title: "Sample Title",
        ReadTime: 10,
        Heading: encodeBase64(tinymce.get("Heading")?.getContent()), // Convert HTML to Base64
        SubHeading: encodeBase64(tinymce.get("SubHeading")?.getContent()),
        Content: encodeBase64(tinymce.get("Content")?.getContent()),
      };

      if (!this.token) console.log("Please login first");

      try {
        const response = await fetch("http://localhost:3000/blog", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Post submitted successfully!");
        } else {
          console.error("Failed to submit post:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting post:", error);
      }
    }
  }
};
</script>

<style scoped>
div.Create-Post-Window {
  height: 65%;
  width: 65%;
  position: absolute;
  background: #000000;
  border-radius: 20px;
  border: 2px solid #941dfa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

div.Create-Post-Contents {
  width: 90%;
  display: grid;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: white black;
}

div.Create-Post-Settings {
  height: 25%;
  width: 50%;
  display: flex;
  justify-content: center;
  margin: 14px;
  color: white;

  div {
    border: 2px solid white;
    width: 20%;
    margin: 10px;
    text-align: center;
    align-content: center;
    border-radius: 15px;
  }

  div:hover {
    cursor: pointer;
  }

  div.Close {
    background-color: red;
  }
}

div.Block {
  width: 95%;
  font-size: 45px;
  color: white;
  height: 90%;
  border-radius: 20px;

  div {
    font-weight: 800;
    margin: 5% 0% 5%;
  }

  textarea {
    width: 100%;
    resize: vertical;
    font-size: 30px;
    border-radius: 10px;
  }
}

div.Margin {
  width: 50%;
  justify-self: center;
  height: 10%;
  background: #8e37eb;
}
</style>