<template>
  <strong>Time Left: {{timeLeft}}</strong>
</template>

<script>
  export default {
    //eslint-disable-next-line
    name: 'Timer',
    props: {
      timeLeft: Number
    }
  }
</script>