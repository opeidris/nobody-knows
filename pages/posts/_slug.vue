<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
      <div class="max-w-3xl mx-auto mt-16 pb-8">
        <component :is="selectedPost" />
      </div>
    </div>
  </div>
</template>
    <script>
export default {
  async asyncData({ params }) {
    try {
      const post = await require(`~/content/${params.slug}.md`);
      return {
        post
      };
    } catch (error) {
      return false;
    }
  },
  head() {
    return {
      title: this.post.attributes.title,
      link: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        }
      ]
    };
  },
  data() {
    return {
      attributes: {},
      selectedPost: null
    };
  },
  created() {
    this.attributes = this.post.attributes;
    this.selectedPost = this.post.vue.component;
  }
};
</script>

<style>
.header {
  font-family: "Merriweather", serif;
}

.title {
  font-family: "Merriweather", serif;
}

body {
  font-family: "Montserrat", sans-serif;
}

.markdown-body h1 {
  @apply text-4xl title mb-4;
}

.markdown-body h3 {
  @apply text-xl font-semibold pb-1;
}

.markdown-body p {
  @apply mb-4;
}

.markdown-body ul li {
  @apply list-disc list-inside pl-4;
}

.markdown-body ul,
ol {
  @apply pb-4;
}

.markdown-body ol li {
  @apply list-decimal list-inside pl-4;
}

.markdown-body img {
  @apply h-64 mx-auto;
}

.markdown-body a {
  @apply text-indigo-600;
}

.markdown-body a:hover {
  @apply underline cursor-pointer;
}
</style>