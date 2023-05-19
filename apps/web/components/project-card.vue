<script setup lang="ts">
const props = defineProps<{
  id: string
  name: string
}>()
</script>

<template>
  <NuxtLink :to="`/logs?projectid=${props.id}`" class="card w-48 bg-base-100 border-2 border-gray-300 shadow-xl">
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{ props.name }}</h2>
    </div>
  </NuxtLink>
</template>
