<template>
  <ThemeProvider>
    <CSSReset />
    <!-- Uncomment below line if you are using vue-router -->

    <!-- <router-view /> -->

    <!--
        Or just get started adding Chakra UI components
    -->
  </ThemeProvider>
</template>

<script>
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

export default {
  name: "App",
  components: {
    ThemeProvider,
    CSSReset
  }
};
</script> 