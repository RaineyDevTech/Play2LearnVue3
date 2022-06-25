<template>
  <div>
  <ol >
      <li v-for="answers in answerList" :key="answers">{{answers}}</li>
      <li>Eat my ass motherfucker</li>

  </ol>
  <p>the list of correct answers is : {{answerList}}</p>

  <ol>
  
  </div>
</template>

<script>

//import Word from './Word';
import answerList from './Main';
  export default {
    // eslint-disable-next-line
    name: 'AnswerList',
    components: {
      
    },
    data: function(){
      return{
      answerList: Array
      }
    },
    methods: {
      setList(){
        this.answerList = answerList;
      }

    }
  }
</script>