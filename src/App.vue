<template>

  <div id="app">
    <SignIn v-if="!currentUser" @setUser="updateUser"></SignIn>
    <home v-if="currentUser" :username="currentUser.username"></home>
  </div>

</template>

<script>
import SignIn from './components/SignIn';
import home from './components/Home';

export default {

  components: {
    SignIn, home
    },

  data(){
    return{
      currentUser: null
    }
  },
  
  methods: {
    updateUser(user){
      this.currentUser = user;
    }
  }
};
</script>



<!-- *** Example using Operators in VueJS ***-->
<!--
<template>
  <div id="app">
    
    <div class="container">
      <label for="inputa">Input A</label>
      <input v-model.number="inputa" type="number">
      <br>
      <label for="inputb">Input B</label>
      <input v-model.number="inputb" type="number">
    </div>
    <input type="radio" v-model="operator" value="sum">sum
    <input type="radio" v-model="operator" value="sub">sub
    <input type="radio" v-model="operator" value="mul">mul
    <input type="radio" v-model="operator" value="div">div
    <br>
    
    <button @click="calculating">calculate</button>
    <p v-if="!!result || result===0">result = {{result}}</p>    
  
  </div>
</template>

<script>
// import { calculate } from "../someFunction.js";
import calculate from "./someFunction.js";

export default {
  data() {
    return {
      operator: "",
      inputa: "",
      inputb: "",
      result: ""
    };
  },
  methods: {
    calculating() {
      // this.result= calculate({inputa: this.inputa, inputb: this.inputb, operator: this.operator});
      this.result = calculate(this.inputa, this.inputb, this.operator);
      this.items.push({value: this.result});

    }
  }
};
</script>
-->