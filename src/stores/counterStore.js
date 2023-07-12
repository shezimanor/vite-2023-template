import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export default defineStore('counterStore', () => {
  // state
  const count = ref(0);
  // getters
  const doubleCount = computed(() => count.value * 2);
  // actions
  function increment() {
    count.value++;
  }
  function decrease() {
    count.value--;
  }

  return { count, doubleCount, increment, decrease };
});
