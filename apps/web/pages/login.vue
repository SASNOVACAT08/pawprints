<script setup lang="ts">
definePageMeta({
  layout: 'full',
})

const { loggedIn } = useUserSession()

if (loggedIn.value) {
  navigateTo('/')
}
</script>

<template>
  <login-github />
</template>
