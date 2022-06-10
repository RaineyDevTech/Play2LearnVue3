const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  pages: {
    anagramHunt: {
      entry: "src/main.js", // indicates src/main.js is the JavaScript file that sets up your Vue for the Anagram game
      template: "public/games/anagram-hunt.html", // indicates the location where Vue will find the "app" div
      filename: "games/anagram-hunt.html" // indicates the file that should be generated after the Vue processes the template file
    }
  
  }
};
