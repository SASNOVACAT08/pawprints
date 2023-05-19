<script setup lang="ts"></script>

<template>
  <label
    for="create-project"
    class="card w-48 bg-base-100 border-2 border-dashed border-gray-300 shadow-xl cursor-pointer"
  >
    <div class="card-body items-center text-center">
      <h2 class="card-title"><Icon size="64" name="ic:baseline-plus" /></h2>
    </div>
    <project-form />
  </label>
</template>
