<template>
  <ThemeProvider>
    <CSSReset />
    <%_ if (hasVueRouter) { _%>
    <router-view />
    <%_ } else { _%>
    <!--Your application goes here -->
    <%_ } _%>
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