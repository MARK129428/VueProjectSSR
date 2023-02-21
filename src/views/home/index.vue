<template>
  <div>
    {{ t("message.home", {}, {locale: lang ? 'zh' : 'en'}) }}
    <el-button @click="handlerClick">xxx</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const lang = ref(false)
const handlerClick = () => {
  lang.value = !lang.value
  console.log(lang.value)
}

const { t } = useI18n()
</script>

<style scoped lang="scss" src="../../assets/scss/home/index.scss">
</style>
