<script> 
import {db} from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const usersCollectionRef = collection(db,"users");
const getUsers = async () => {
 const data = await getDocs(usersCollectionRef);
 const koko = data.docs.map((doc) => ({...doc.data()}));
 console.log(koko);
};
getUsers();

export default {
  data() {
    return {
      count: 10,
      interval: null,
      description: "Wait till the counter goes to 0, then deliver a baby",
      message: '',
      inputVisible: false,
      babyWeight: 0,
      babyVisible: false,
      img: "/src/assets/waiting.png"
    }
  },
  computed: {
    timer() {
      return this.count;
    }
  },
  methods: {
    startTimer() {
      if (!this.interval) {
        this.interval = setInterval(() => {
          this.count--;
          if (this.count < 0) {
            this.stopTimer();
            this.count = 0;
          }
        }, 1000);
      }
    },
    stopTimer() {
      clearInterval(this.interval);
      this.interval = null;
    },
    resetTimer() {
      this.count = 10;
      this.stopTimer();
    },
    generateRandomWeight() {
      let number = Math.random() * (4 - 2) + 2
      let weight = Math.ceil(number * 100) / 100
      return weight;
    },
    showWeight(){
      this.babyVisible=true;
      this.img="src/assets/birth.png";
    }
  },
  watch: {
    count(newValue) {
      if (newValue === 0) {  
        this.inputVisible = true; //activate input
        this.babyWeight = this.generateRandomWeight(); //roll the kg of the baby 
        //get input of and save the given kg to the database
        //roll random counter and save it to the database
        //get random counter from database
      }
    }
  }
}
</script>

<template>
   <div>
    <img :src="img"> 
    <p>The baby will be delivered in {{ timer }} s.</p>
    <p>{{ description }}</p>
    <p v-if="babyVisible">Your baby's weight is {{ babyWeight }} kg</p>
    <form v-if="inputVisible" @submit.prevent="onSubmit">
      <input v-model="message" placeholder="Enter a message"> 
      <button @click="showWeight" type="submit">Submit</button>
    <p>{{ message }}</p>
    </form>
   
    <button @click="startTimer">Start Timer</button>
    <button @click="stopTimer">Stop Timer</button>
    <button @click="resetTimer">Reset Timer</button>
  </div> 
</template>

<style scoped> 
</style>
