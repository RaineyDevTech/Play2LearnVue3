<template>
  <strong>Score: {{score}}</strong>
</template>

<script>
  export default {
    // eslint-disable-next-line
    name: 'Score',
    props: {
      score: Number
    }
  }
</script>