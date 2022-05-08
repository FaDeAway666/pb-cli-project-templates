<script setup>
import Tab from '@/components/base-tab.vue'
import useContext from '@/hooks/context'
import { onMounted, ref, watch } from 'vue'
import { userSignout } from '../../api/user'

const type = ref('a')
let context = useContext(type.value)

watch(context, val => {
  console.log(val, 'watch')
})

const changeType = () => {
  type.value = 'b'
  const result = useContext(type.value)
  context = Object.assign(context, { ...result })
}

onMounted(() => {
  userSignout({})
})
</script>

<template>
  <h1>Welcome to Pb's homepage</h1>
  <button @click="changeType">click</button>
  <span>{{ context.name }}</span>
  <Tab :type="type" />
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PageHome'
})
</script>
