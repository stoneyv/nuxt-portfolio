<template>
  <section
    class="hero has-background-primary has-background-primary-gradient is-fullheight"
  >
    <div class="hero-body">
      <div>
          </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showAbout: false,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
h1,
h2,
p,
span,
a {
  &::selection {
    background: $secondary;
    color: $primary;
  }
}

a {
  color: $text;
}

.is-size-huge {
  font-size: 4rem;

  @media screen and (max-width: 860px) {
    font-size: 3rem;
  }
}
</style>
