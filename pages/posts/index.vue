<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-16">
    <div class="bg-teal-50 max-w-4xl mx-auto mt-24">
      <section class="posts">
        <div v-for="post in posts" :key="post.attributes.title" class>
          <div class="pb-10">
            <p class="text-lg text-gray-800">{{post.attributes.date}}</p>
            <nuxt-link class="title text-4xl" :to="post._path">{{post.attributes.title}}</nuxt-link>
            <p class="text-xl">{{post.attributes.description}}</p>
            <nuxt-link class="text-sm" :to="post._path">Read More -></nuxt-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

    <script>
export default {
  async asyncData() {
    const context = await require.context("~/content/", true, /\.md$/);
    const posts = await context.keys().map(key => ({
      ...context(key),
      _path: `/posts/${key.replace(".md", "").replace("./", "")}`
    }));
    return { posts: posts.reverse() };
  },
  methods: {},
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

<style >
.header {
  font-family: "Merriweather", serif;
}

.title {
  font-family: "Merriweather", serif;
}

body {
  font-family: "Montserrat", sans-serif;
}
</style>