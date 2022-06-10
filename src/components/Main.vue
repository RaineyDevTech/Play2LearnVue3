<template>
 <main id="main-container">
   <div v-if="screen === 'config'" id="config-container">
<SelectInput :currentValue="wordLength" :wordLength="wordLength" label="WordLength" id="wordLength" v-model:currentValue="wordLength" 
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
    <Word :list="list" :wordsLeft="wordsLeft" />
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
      wordLength: '0',
      input: "",
      score:0,
      gameLength: 60,
      anagrams:anagrams,
      words:Array,
      list: Array,
      wordsLeft: 0,
      timeLeft: 0
    }
  },

 

  methods: {

   config() {
      this.screen = "config";
    },
  
    endGame(){
      this.screen = "endGame";
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
        this.startTimer();
        this.play();
      },
      
    play() {
      this.screen = "play";
      this.clear();
      this.startTimer();
      this.words= anagrams[this.wordLength];
      //console.log(this.words[Math.floor(Math.random()*this.words.length)]);
      this.list=this.words[Math.floor(Math.random()*this.words.length)];
      //var list =this.list;
      //console.log(list);
      this.wordsLeft = this.list.length;
      return [this.list, this.wordsLeft];
    },

      checkAnswer(input){
        
        alert("checkAnswer method running");
        alert("your answer is : " +input);
        alert("score is: " + this.score);
        alert("the list is "  + this.list);
        alert("the length of the list is : " + this.list.length);
        for(let i=0; i< this.list.length; i++){
          alert("for loop running ");
          alert(input);
          alert("this.score is " + this.score);
          alert("the loop index is now : " + i);
            if(input === this.list[i]){
              
           this.score++;
           this.wordsLeft--;

              alert("good answer " + input + " is an anagram");
              alert("score is incremented: " + this.score);
              //alert("your score is " + this.score);
              //this.score = score;
              alert("score is now : " + this.score);
              this.clear();
              
            }
            
            
        }

      },

      
       setInput(input) {
      this.input = String(input);
      alert(this.input);
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