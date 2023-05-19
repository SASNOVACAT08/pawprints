<script setup lang="ts">
const { loggedIn } = useUserSession()

const { data: projects } = useFetch('/api/project')
</script>

<template>
  <section v-if="!loggedIn" class="flex min-h-screen justify-center items-center">
    <login-github />
  </section>
  <section v-else class="container">
    <label for="my-modal" class="btn">create Project</label>
    <div v-for="project in projects" :key="project.id">
      <p>{{ project.name }}</p>
    </div>

    <!-- Put this part before </body> tag -->
    <input id="my-modal" type="checkbox" class="modal-toggle" />
    <label for="my-modal-4" class="modal cursor-pointer">
      <label class="modal-box relative" for="">
        <project-form />
      </label>
    </label>
    <add-user-form />
  </section>
</template>
