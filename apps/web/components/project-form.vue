<script setup lang="ts">
async function createProject(fields) {
  // const { data } = await useFetch('/api/project', {
  // method: 'POST',
  // body: JSON.stringify({
  // name: 'My new project',
  // }),
  // })
  // console.log(data)
  const { name } = JSON.parse(JSON.stringify(fields))
  await useFetch('/api/project', {
    method: 'POST',
    body: JSON.stringify({
      name,
    }),
  })
}
</script>

<template>
  <FormKit type="form" @submit="createProject">
    <FormKit
      id="name"
      type="text"
      name="name"
      validation="required|length:1,140"
      label="Name"
      help="Enter your project's name"
      placeholder="My project"
    />
  </FormKit>
</template>
