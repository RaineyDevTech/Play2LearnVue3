<template>
 <main id="main-container">
<div v-if="screen === 'config'" id="config-container">
  <SelectInput label="Word Length" v-model:currentValue="wordLength" 
  :options="wordLengths" />

<PlayButton @play-button-click="play" />

</div>

<div v-else-if="screen === 'play'" id="game-container" class="text-center">
  <h1><strong>Anagram Hunt</strong></h1>
  
  <div class="row border-bottom" id="scoreboard">
    <div class="col px-3 text-left">
      <Score :score="score" />
    </div>
    <div class="col px-3 text-right">
      <Timer :timeLeft="timeLeft" />
    </div>
  </div>
  <div class="row text-secondary mx-1 my-2" id="word">
    <Word :list="list" :wordsLeft="wordsLeft" :firstWord="firstWord"/>
  </div>
  <div class="row">
     <input class="form-control" v-model="input" @keyup.enter="setInput(input)">
     </div>
  <div>
  <button class="btn btn-success mx-1 my-3" @click="endGame">Game Over</button>
  </div>
</div>

<div v-else-if="screen === 'endGame'" id="game-container" class="text-center">
  <h1><strong>Anagram Hunt</strong></h1>
  <h2><strong>Times Up!</strong></h2>
  <h3><strong>You Got</strong></h3>
  <p id="score">{{score}}</p>
  <h3>Anagrams</h3>
  <div class="row">
  <button class="btn btn-primary col-md mb-1" @click="restart">Play Again With Same Settings</button>
  </div>
  <div class="row">
  <button class="btn btn-primary col-md" @click="config">Back To Start Screen</button>
  </div>
</div>

</main>
</template>

<script>
import SelectInput from './SelectInput';
import PlayButton from './PlayButton';
import Score from './Score';
import Timer from './Timer';
import Word from './Word';

import anagrams from './anagrams.js';

 export default {
    // eslint-disable-next-line
  name: 'Main',
  components: {
    SelectInput,
    PlayButton,
    Score,
    Timer,
    Word
    },

  data: function() {
    return {
      wordLengths: [
        ['5', '5'],
        ['6', '6'],
        ['7', '7'],
        ['8', '8']
      ],
 

      screen: 'config',
      wordLength: Number,
      input: "",
      score:5,
      gameLength: 60,
      anagrams:anagrams,
      words:Array,
      list: Array,
      wordsLeft: 0,
      firstWord: String,
      timeLeft: 0,
      popped: Array
    }
  },

 

  methods: {

   config() {
      this.screen = "config";
    },
  
    endGame(){
      alert("running endGame()");
      this.screen = "endGame";
     /* for(let i=0; i < this.popped.length; i++){
        this.list.push(this.popped[i]);
      } */
      
    },

    startTimer() {
     this.timeLeft = this.gameLength;
      if (this.timeLeft > 0) {
        this.timer = setInterval(() => {
          this.timeLeft--;
          if (this.timeLeft === 0) {
            clearInterval(this.timer);
            this.screen = "endGame";
          }
        }, 1000)
      }
    },

    clear() {
        this.input = '';
    },

    restart() {
      this.score = 0;
      // $('select').prop('selectedIndex', 0);
      //this.startTimer();
      this.play();
      },
      
    play() {
     // alert(this.wordLength);
      this.score = 0;
      this.screen = "play";
      this.clear();
      this.startTimer();
      this.getWords();
    },

    getWords(){
      this.words= anagrams[this.wordLength];
      alert("this.words : { \n  " + this.words + " }");
      //console.log(this.words[Math.floor(Math.random()*this.words.length)]);
      this.list=this.words[Math.floor(Math.random()*this.words.length)];
      //try alerting the Math.floor(Math.random()*this.words.length)
      this.wordsLeft = this.list.length;
      if(this.wordsLeft <= 0){
        alert("null array reset");
        this.play();
      }
      this.firstWord = this.list[0];
      //alert("with target word : " + this.list);
      //this.list.splice(0,1);
      //alert("spliced list is : " + this.list);
      //this.wordsLeft = this.list.length;
      alert("wordsLeft = " + this.wordsLeft);
      return [this.list, this.wordsLeft, this.firstWord];
    },
    
    //method to check answer for anagram hunt
    checkAnswer(input){
      //alert("checkAnswer method running");
      const listArray = [];
      for (let i=0; i<this.list.length; i++){
        listArray.push(this.list[i]);
      }
      alert(listArray);
      alert("your answer is : " + this.input);
      alert("the list is "  + this.list);
      for(let i=0; i< this.list.length; i++){
        //alert("for loop running the loop index is now : " + i);
        alert("checking answer: " + this.input + " against : " + this.list[i]);
        if(this.input === this.list[i] && this.input != this.firstWord){
        //this.popped.push(this.input);
          alert("good answer " + this.input + " is an anagram");
          console.log("using the input var " + input);
          this.list.splice(i, 1);
          alert(this.input + " is removed from list " + this.list);
          this.score++;
          this.wordsLeft--;
          alert("score is incremented: " + this.score);
          alert("score is now : " + this.score);
          //this.popped.push(this.input);
          alert("added " + this.input + " to popped");
          if(this.wordsLeft == 1){
            this.endGame();
          }
        
      this.clear();
            }
            
          }
        this.clear();
      },

      
      setInput(input) {
        this.input = String(input);
        this.checkAnswer(this.input);
    },
  },
};


</script>

<style>
#main-container {
  margin: auto;
  width: 380px;
}

#score{
  font-size: 75px;
}
</style>