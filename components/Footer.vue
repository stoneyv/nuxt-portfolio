<template>
  <footer class="site-footer">
    <div class="content has-text-centered site-footer-content">
      <p>
        Built by
        <a
          href="https://twitter.com/castillonis"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
          >Stoney Vintson</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    color: String,
  },
};
</script>

<style lang="scss" scoped>
.site-footer {
  background: $primary;
  padding: 2rem 1.5rem;
}

a {
  color: $primary-invert;
  &:hover {
    color: $secondary;
  }
}
</style>
