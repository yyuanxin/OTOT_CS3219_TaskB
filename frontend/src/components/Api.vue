<template>
  <div class="hero">
    <div>
      <h1 class="display-3">{{ msg.message }}</h1>
      <p class="lead">{{ msg.status }}</p>
    </div>
  </div>
</template>

<script>
import apiService from '../services/api.service'

export default {
  name: 'Api',
  data () {
    return {
      msg: null
    }
  },
  async created () {
    this.msg = await apiService.getRes()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hero {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 1.5rem;
  }
</style>
