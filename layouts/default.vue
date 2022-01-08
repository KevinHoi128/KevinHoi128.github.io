<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-card height="auto">
        <v-card-title>
          <v-icon> fas fa-list-alt </v-icon>&nbsp;&nbsp;MENU
        </v-card-title>
      </v-card>
      <v-list dense>
        <v-list-item
          link
          to="/livingExpensesDemo"
          aria-label="Press enter to Accessibility Web"
          tabindex="0"
        >
          <v-list-item-action>
            <v-icon color="blue darken-2">mdi-cash</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>生活繳費Demo</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon
        aria-label="Click this to expand the menu option."
        tabindex="0"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title aria-label="Kevin's Testing Site"
        >Kevin's Testing Site</v-toolbar-title
      >

      <!-- <v-switch v-model="darkMode" inset label="Dark Mode"></v-switch> -->
    </v-app-bar>

    <v-container>
      <router-view></router-view>
    </v-container>

    <v-footer app>
      <v-card
        flat
        tile
        class="lighten-1 white--text text-center"
        width="100%"
        shaped
      >
        <v-card-text>
          <v-btn
            v-for="som in soms"
            :key="som.icon"
            :href="som.href"
            class="mx-4 white--text"
            icon
            tabindex="0"
            aria-label="Click this to kevin's Github page."
          >
            <v-icon size="24px">{{ som.icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-text class="white--text">
          &copy; {{ new Date().getFullYear() }} - <strong>KevinHoi</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null,
    darkMode: true,
    soms: [{ icon: 'mdi-github', href: 'https://github.com/KevinHoi128' }],
  }),
  watch: {
    darkMode() {
      this.$vuetify.theme.dark = this.darkMode
    },
  },
}
</script>