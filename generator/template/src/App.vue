<template>
  <c-theme-provider>
    <c-reset />
    <%_ if (hasVueRouter) { _%>
    <router-view />
    <%_ } else { _%>
    <!--Your application goes here -->
    <%_ } _%>
  </c-theme-provider>
</template>

<script>
import { CThemeProvider, CReset } from "@chakra-ui/vue";

export default {
  name: "App",
  components: {
    CThemeProvider,
    CReset
  }
};
</script> 