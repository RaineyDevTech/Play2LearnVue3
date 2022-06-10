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
    <Word :answer="input" :list="list" :wordLength="wordLength" :score="score" />
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



      restart() {
        this.score = 0;
       // $('select').prop('selectedIndex', 0);
        this.startTimer();
        this.play();
      },
      
    play() {
      this.screen = "play";
      this.startTimer();
      this.words= anagrams[this.wordLength];
      //console.log(this.words[Math.floor(Math.random()*this.words.length)]);
      this.list=this.words[Math.floor(Math.random()*this.words.length)];
      var list =this.list;
      console.log(list);
      return list;
    },

     checkAnswer(input, score){

        for(let i=0; i< this.list.length; i++){
            if(input == this.list[i]){
              score++;
              alert(score);
            }
            return score;
        }

      },


    setInput(value) {
      this.input += String(value);
      alert('well fuck me');
    },

    clear() {
        this.input = '';
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