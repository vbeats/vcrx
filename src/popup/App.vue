<template>
  popup....

  <br/>

  <button @click="changeLang"><!--{{ t('btTest') }}--> -- {{ locale }}</button>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t, locale} = useI18n()

const changeLang = () => {
  if (locale.value === 'zh-CN') {
    locale.value = 'en-US'
  } else {
    locale.value = 'zh-CN'
  }
}
</script>

<style scoped>

</style>
