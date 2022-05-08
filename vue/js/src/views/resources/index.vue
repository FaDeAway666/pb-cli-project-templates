<script setup>
import image from '../../assets/img/test.png'
</script>

<template>
  <div class="resource-wrapper">
    <span>css引用图片：</span>
    <div class="bg"></div>
  </div>
  <div class="resource-wrapper">
    <span>img标签引用：</span>
    <img :src="image" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PageResources'
})
</script>

<style lang="less" scoped>
.resource-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.bg {
  width: 300px;
  height: 300px;
  background: url('../../assets/img/test.png');
  background-size: cover;
}
</style>
