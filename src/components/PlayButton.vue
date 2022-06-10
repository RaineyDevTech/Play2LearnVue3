<template>
 <button class="btn btn-primary col-md" @click="$emit('play-button-click')">Play!</button>
</template>

<script>
  export default {
    name: 'PlayButton'
  }
</script>