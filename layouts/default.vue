<template>
  <v-app>
    <!-- <SpeedInsights /> -->
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-card>
        <v-card-title class="home" @click="backToHome">
          <v-icon> mdi-home </v-icon>&nbsp;&nbsp;Home
        </v-card-title>
      </v-card>
      <v-list dense>
        <!-- <v-list-item
          link
          to="/livingExpensesDemo"
          aria-label="Live expense demo"
          tabindex="0"
        >
          <v-list-item-action>
            <v-icon color="blue darken-2">mdi-cash</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>生活繳費Demo</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
        <v-list-item link to="/resume" aria-label="Resume" tabindex="1">
          <v-list-item-action>
            <v-icon color="white darken-2">mdi-text-box-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>履歷表</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          to="/threeJsDemo"
          aria-label="ThreeJs demo"
          tabindex="2"
        >
          <v-list-item-action>
            <v-icon color="white darken-2">mdi-rotate-3d</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ThreeJs Demo</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left elevation="10">
      <v-app-bar-nav-icon
        aria-label="Click this to expand the menu option."
        tabindex="0"
        @click.stop="drawer = !drawer"
      />

      <v-toolbar-title aria-label="Kevin's Testing Site" class="typing"
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
            target="_blank"
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
// import { SpeedInsights } from '@vercel/speed-insights/nuxt'

export default {
  name: 'App',
  data: () => ({
    drawer: null,
    darkMode: true,
    soms: [
      { icon: 'mdi-github', href: 'https://github.com/KevinHoi128' },
      // { icon: 'mdi-git', href: 'https://gitee.com/kh128' },
      {
        icon: 'mdi-codepen',
        href: 'https://codepen.io/kevinhoi128-the-encoder',
      },
    ],
  }),
  watch: {
    darkMode() {
      this.$vuetify.theme.dark = this.darkMode
    },
  },
  methods: {
    backToHome() {
      this.$router.push('/')
      this.drawer = false
    },
  },
}
</script>

<style lang="scss" scoped>
.typing {
  width: 6ch;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.5rem;
  font-family: monospace;
  animation: typing 5s steps(25, jump-none) infinite, mouse 1s step-end infinite;
  border-right: 0.1em solid;
}

.home {
  cursor: pointer;
}

@keyframes typing {
  from {
    width: 1ch;
  }
  to {
    width: 25ch;
  }
}

@keyframes mouse {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}
</style>
