<script setup lang="ts">
import { GithubUser } from '~/types/GithubUser'
async function createUser(id: number) {
  await useFetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      id,
    }),
  })

  data.users = []
}

const data = reactive({
  users: [] as GithubUser[],
})

const searchUsers = debounce(async (username: string) => {
  if (!username) {
    data.users = []
    return
  }
  const url = `https://api.github.com/search/users?q=${username}+type:user&per_page=5`
  const response = await fetch(url)
  const { items: users } = (await response.json()) as { items: GithubUser[] }
  data.users = users
}, 500)
</script>

<template>
  <div class="dropdown dropdown-end" :class="{ 'dropdown-open': data.users.length > 0 }">
    <FormKit
      type="text"
      name="github_username"
      validation="required|length:1,140"
      label="Username"
      tabindex="0"
      @input="searchUsers"
    />

    <div class="w-full dropdown-content bg-base-200 top-14 max-h-96 flex-col rounded-md">
      <ul class="menu menu-compact">
        <li v-for="user in data.users" :key="user.id">
          <div class="flex items-center" @click="createUser(user.id)">
            <img :src="user.avatar_url" class="w-8 h-8 rounded-full" />
            <p class="ml-2 text-ellipsis">{{ user.login }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
