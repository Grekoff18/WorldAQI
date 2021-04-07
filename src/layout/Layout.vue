<template>
  <div :class="$style.defaultLayout">
    <div class="container" :class="$style.contentContainer">
      <main :class="$style.mainContent">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style module>
.defaultLayout {
  @apply min-h-screen mx-auto w-full pb-4  bg-gray-100;
  @screen md {
    @apply pb-10;
  }
}

.contentContainer {
  @apply w-full mx-auto;

  @screen md {
    @apply grid grid-cols-7 gap-3;
  }
}

.mainContent {
  @screen md {
    @apply pl-8 col-span-5;
  }
}
</style>
