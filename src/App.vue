<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Quote from './components/Quote.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
export default {
  name: 'app',
  components: {
    About,
    Quote,
    Portfolio,
    Contact,
  },
  data() {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
