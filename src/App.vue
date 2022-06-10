<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
export default {
  name: 'app',
  components: {
    // eslint-disable-next-line
    Header,
    Main,
    Footer
  }
}
</script>

<style>
header {
  background-color: #3f7cad;
}
</style>
