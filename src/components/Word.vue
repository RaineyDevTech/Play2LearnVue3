<template>
  <div id="equation" class="row">
    <div>
      <p class="text-center col-centered">{{firstWord}} ({{wordsLeft-1}}  left)</p>
    </div>
  </div>
</template>

<script>
//import anagrams from './anagrams.js';


  export default {
      // eslint-disable-next-line
    name: 'Word',
     props: {
      
      list:Array,
      wordsLeft:Number,
      firstWord:String
    },

    data: function(){
      return{
        input: ""
      }
    },   
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