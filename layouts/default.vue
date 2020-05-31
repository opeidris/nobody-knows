<template>
  <div class="bg-teal-50">
    <div class="flex flex-col items-center pt-8">
      <nuxt-link to="/" class="header text-3xl">Nobody Knows</nuxt-link>
      <div class="text-lg flex justify-around mt-2">
        <nuxt-link class="link mx-4 hover:underline" to="/podcast">Podcast</nuxt-link>
        <nuxt-link class="link mx-4 hover:underline" to="/posts">Blog</nuxt-link>
        <nuxt-link class="link mx-4 hover:underline" to="/about">About</nuxt-link>
      </div>
    </div>
    <nuxt class="bg-teal-50" />
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      }
    ]
  }
};
</script>

<style>
</style>
