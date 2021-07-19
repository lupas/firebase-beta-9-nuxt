<template>
  <section class="container">
    <div>
      <h2>
        Write to Firestore.
      </h2>
      <div>
        <button @click="writeToFirestore">
          <span>Write now</span>
        </button>
      </div>
    </div>
    <div>
      <h2>
        Read from Firestore.
      </h2>
      <div>
        <button @click="readFromFirestore">
          <span>Read now</span>
        </button>
      </div>
      <p>SSR Rendered: {{ title }}</p>
    </div>
  </section>
</template>
<script>
import { db } from "~/plugins/firebase.js";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default {
  data() {
    return {
      title: null,
    };
  },
  async fetch() {
    const ref = doc(db, "testCollection", "testDoc");
    try {
      const document = await getDoc(ref);
      this.title = document.data().text;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    async writeToFirestore() {
      const ref = doc(db, "testCollection", "testDoc");
      const document = {
        text: "Firebase 9 rocks!",
      };
      try {
        await setDoc(ref, document);
        alert("Success!");
      } catch (e) {
        alert("Error!");
        console.error(e);
      }
    },
    async readFromFirestore() {
      const ref = doc(db, "testCollection", "testDoc");
      try {
        const document = await getDoc(ref);
        alert(document.data().text);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
