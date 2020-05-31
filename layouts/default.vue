<template>
  <div class="bg-teal-50">
    <div class="flex flex-col items-center pt-8">
      <nuxt-link to="/" class="header text-3xl">Nobody Knows</nuxt-link>
      <div class="text-lg flex justify-around mt-2">
        <nuxt-link class="link mx-4 hover:underline" to="#">Podcast</nuxt-link>
        <nuxt-link class="link mx-4 hover:underline" to="/posts">Blog</nuxt-link>
        <nuxt-link class="link mx-4 hover:underline" to="#">About</nuxt-link>
      </div>
    </div>
    <nuxt class="bg-teal-50" />
  </div>
</template>

<style>
</style>
