<script setup>
import useCounterStore from '@/stores/counterStore';

// props
defineProps({
  msg: {
    type: String,
    default: ''
  }
});
// store
const counterStore = useCounterStore();
// store 的 state, getters 不能直接解構(但有其他方法可以解), action 可以
// https://pinia.vuejs.org/zh/core-concepts/#using-the-store -> storeToRefs()
const { increment, decrease } = counterStore;
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <!-- <button type="button" @click="count">count is {{ count }}</button> -->
    <button type="button" @click="increment">加1</button>
    <span style="display: inline-block; width: 100px">{{
      counterStore.count
    }}</span>
    <button type="button" @click="decrease">減1</button>
    <br />
    <div style="margin-top: 32px">
      今年是2倍: {{ counterStore.doubleCount }}
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
