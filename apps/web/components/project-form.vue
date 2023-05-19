<script setup lang="ts">
const open = ref(false)

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
  document.querySelector('#create-project')!.checked = false
}
</script>

<template>
  <input id="create-project" type="checkbox" :checked="open" class="modal-toggle" />
  <label for="create-project" class="modal cursor-pointer">
    <label class="modal-box relative" for="">
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
    </label>
  </label>
</template>
