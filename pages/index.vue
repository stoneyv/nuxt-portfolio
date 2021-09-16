
<template>
  <div class="has-background-primary-off">
    <Nav color="has-background-primary" />
    <div class="fullscreen">
      <article class="section container">
        <div class="max-width-78ch">
          <h1 class="section-title is-flex is-align-items-center">
            <img src="~/assets/images/me_564x640.jpg" class="me" />
            <span style="margin-left: 1rem">Data Specialist</span>
          </h1>
          <p>
            I create data pipelines, predictive models, and reporting with high
            quality visualizations.
          </p>
        </div>
        <!-- TITLE -->
        <h2 class="section-title">Projects</h2>
        <!-- CONTAINER FOR PROJECTS -->
        <div class="columns is-multiline">
          <div v-for="(post, index) in posts" :key="index" class="column is-4">
            <BlogCard v-bind="post" background="has-background-primary" />
          </div>
        </div>
      </article>
    </div>
    <Footer />
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";
import { TweenMax, Power3 } from "gsap";

export default {
  transition: {
    mode: "out-in",
    css: false,
    enter() {
      TweenMax.fromTo(
        ".section-title",
        { x: "10%" },
        { x: "0%", duration: 0.1 }
      );
      TweenMax.fromTo(
        ".columns",
        { x: "10%", autoAlpha: 0 },
        {
          x: "0%",
          autoAlpha: 1,
          delay: 0.25,
          duration: 0.5,
          ease: Power3.easeOut,
        }
      );
    },
  },
  computed: {
    meta() {
      const metaData = {
        url: `${this.$config.baseURL}/post`,
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: "Posts | Stoney Vintson",
      meta: [...this.meta],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.$config.baseURL}/post`,
        },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const posts = await $content("posts", params)
      .sortBy("date", "desc")
      .fetch();

    return {
      posts,
    };
  },
};
</script>

<style scoped>
.me {
  max-width: 100px;
  border-radius: 70%;
}
p {
  font-size: 1.2rem !important;
}
</style>