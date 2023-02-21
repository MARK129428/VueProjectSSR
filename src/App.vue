<template>
  <div>
    <router-view />
  </div>
</template>
<script setup lang="ts">
import { getRoomList } from './api/index'
getRoomList().then(res => {
  console.log(res)
})

</script>
<style scoped>
</style>
