<template>
  <div id="equation" class="row">
    <div>
      <p class="text-center col-centered">{{list[0]}} ({{list.length-1}} left)</p>
    </div>
    
      <input class="form-control" v-model="input" @keyup.enter="setInput(input)">
      

      <div class = "row">
        {{input}}
      </div>

  </div>
</template>

<script>
import anagrams from './anagrams.js';


  export default {
      // eslint-disable-next-line
    name: 'Word',
     props: {
      answer: String,
      wordLength:String,
      anagrams:anagrams,
      list:Array,
      score:Number
    },

    data: function(){
      return{
        input: ""
      }
    },

    methods: {
      getWords(){
        
        this.words= anagrams[this.wordLength];
        console.log(this.words[Math.floor(Math.random()*this.words.length)]);
      },

      checkAnswer(input, score){
        
        alert("checkAnswer method running");
        alert("your answer is : " +input);
        alert(this.score);
        alert(this.list);
        alert(this.list.length);
        for(let i=0; i< this.list.length; i++){
          alert("for loop running ");
          alert(input);
          alert("this.score is " + this.score);
          alert("the loop index is now : " + i);
            if(input === this.list[i]){
              
           score = this.score;
              score++;

              alert("good answer " + input + " is an anagram");
              alert("score is incremented: " + score);
              //alert("your score is " + this.score);
              //this.score = score;
              alert("score is now : " + score);
              return score;
            }
            
            
        }

      },

      
       setInput(input) {
      this.input = String(input);
      alert(this.input);
      this.checkAnswer(this.input);
    },

  
      }
   
};

 
  

      
    
  
</script>

<style scoped>
  #equation {
    font-size: 1.6em;
    margin: auto;
    width: 90%;
  }

  .col-centered{
    float: none;
    margin: 0 auto;
}
</style>