<template>
  <div class="comment">
    <component
      v-if="isDark"
      :is="'script'"
      src="https://giscus.app/client.js"
      data-repo="Kshaoye/kshaoye.github.io"
      data-repo-id="R_kgDOK9I0lg"
      data-category="Announcements"
      data-category-id="DIC_kwDOK9I0ls4Cefc1"
      data-mapping="title"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-theme="dark"
      data-lang="zh-CN"
      crossorigin="anonymous"
      data-loading="eager"
      async
    >
    </component>
    <component
      v-else
      :is="'script'"
      src="https://giscus.app/client.js"
      data-repo="Kshaoye/kshaoye.github.io"
      data-repo-id="R_kgDOK9I0lg"
      data-category="Announcements"
      data-category-id="DIC_kwDOK9I0ls4Cefc1"
      data-mapping="title"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-theme="light"
      data-lang="zh-CN"
      crossorigin="anonymous"
      data-loading="eager"
      async
    >
    </component>
  </div>
</template>
<script setup lang="ts">
  import { useData } from 'vitepress';
  const { isDark } = useData();
</script>
<style lang="scss" scoped>
  .comment {
    margin-top: 16px;
  }
</style>