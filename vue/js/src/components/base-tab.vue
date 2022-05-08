<script setup>
import { reactive, ref, computed, watchEffect } from 'vue'
import useContext from '@/hooks/context'
const props = defineProps({
  type: {
    type: String,
    default: ''
  }
})
let context = useContext(props.type)
watchEffect(() => {
  const result = useContext(props.type)
  context = Object.assign(context, { ...result })
})
// context.value.name = "Sd";
const change = () => {
  console.log('click', context.name)
  context.name = 'sss'
}
</script>

<template>
  <div class="tabs">
    {{ context.name }}
    <button @click="change">child click</button>
    <router-link to="/svg">svg</router-link>
    <router-link to="/resources">resources</router-link>
  </div>
</template>

<style lang="less">
.tabs {
  text-align: center;
  margin-bottom: 30px;
  a {
    font-size: 16px;
    margin-right: 20px;
  }
}
</style>
