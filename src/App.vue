<template>
  <div>
    <div class="app_top">
      <p>{{ time }}</p>
      <img src="@/assets/phone_base.svg" alt="" class="top_icon">
    </div>
    <router-view></router-view>
    <div class="home_menu">
      <router-link to="/">Home</router-link>
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: ''
    }
  },
  methods: {
    setTime() {
      const day = new Date()
      const hour = day.getHours()
      const minutes = day.getMinutes()
      this.time = `${hour}:${minutes}`
    }
  },
  created() {
    this.setTime()
  }
}
</script>
<style>
@import '@/css/main.css'
</style>
