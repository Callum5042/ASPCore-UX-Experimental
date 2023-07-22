<script lang="ts" setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
    <h1>Counter Page</h1>
    <div>Count: {{ count }}</div>
    <button @click="increment">Increase Counter</button>
</template>

