<template>
  <div>
    <el-config-provider :locale="locale">
      <el-date-picker> </el-date-picker>
      <el-button @click="changeLang(zh)">中文</el-button>
      <el-button @click="changeLang(en)">英文</el-button>
      <router-view />
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import zh from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

const locale = ref()

const changeLang = (language:any) => {
  locale.value = language
}

</script>

<style scoped>
</style>
