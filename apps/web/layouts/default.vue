<template>
  <main class="drawer drawer-mobile">
    <input id="side-bar" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <slot />
      <label for="side-bar" class="btn btn-primary drawer-button lg:hidden fixed bottom-4 right-4">Open</label>
    </div>
    <div class="drawer-side">
      <label for="side-bar" class="drawer-overlay"></label>
      <side-bar />
    </div>
  </main>
</template>
