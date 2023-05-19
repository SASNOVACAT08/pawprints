<script setup>
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <section class="container">
    <h1>Logs</h1>
    <log-table project-id="cc2e45ce-dd65-4f18-a72c-98950bc7e227" />
  </section>
</template>
