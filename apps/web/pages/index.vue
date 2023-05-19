<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})

const { data: projects } = useFetch('/api/project')
</script>

<template>
  <section>
    <section class="grid grid-rows-4 grid-cols-4 gap-4">
      <add-user-form />
      <project-card v-for="project in projects" :id="project.id" :key="project.id" :name="project.name" />
      <project-create-card />
    </section>
  </section>
</template>
