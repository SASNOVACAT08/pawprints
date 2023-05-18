<script setup lang="ts">
const { loggedIn } = useUserSession()

async function createProject() {
  const { data } = await useFetch('/api/project', {
    method: 'POST',
    body: JSON.stringify({
      name: 'My new project',
    }),
  })
  console.log(data)
}
</script>

<template>
  <section v-if="!loggedIn" class="flex min-h-screen justify-center items-center">
    <login-github />
  </section>
  <section v-else class="container">
    <h1 class="text-4xl font-bold">Welcome to the app!</h1>
    <p class="text-xl">You are logged in!</p>
    <button @click="createProject">Create project</button>
  </section>
</template>
