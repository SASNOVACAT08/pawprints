<script setup lang="ts">
const props = defineProps<{
  projectId: string
}>()

const { data: logs } = useFetch(`/api/log?projectId=${props.projectId}`)
</script>

<template>
  <table class="table w-full">
    <!-- head -->
    <thead>
      <tr>
        <th>DATE</th>
        <th>ENV</th>
        <th>TITLE</th>
      </tr>
    </thead>
    <tbody>
      <!-- body -->
      <tr
        v-for="log in logs"
        :key="log.id"
        class="border-l-4"
        :class="{
          'border-l-red-500': log.level === 'error',
          'border-l-yellow-500': log.level === 'warn',
          'border-l-green-500': log.level === 'info',
        }"
      >
        <td>{{ log.createdAt }}</td>
        <td>{{ log.environment }}</td>
        <td>{{ log.title }}</td>
      </tr>
    </tbody>
  </table>
</template>
