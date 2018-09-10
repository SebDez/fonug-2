<template>
  <v-app id="inspire" dark>
  <!-- SIDEBAR -->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list dense>
        <router-link v-for="appModule in modules" :key="appModule.text"
        :to="{name: appModule.name}"
         tag="v-list-tile" >
          <v-list-tile-action>
            <v-icon>{{ appModule.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ appModule.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </router-link>
        <router-link :to="{name: 'about'}" tag="v-list-tile">
          <v-list-tile-action>
            <v-icon color="grey darken-1">info</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">About</v-list-tile-title>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <!-- HEADER -->
    <v-toolbar
      color="pink"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Fonug II - Générateur aléatoire de personnages</span>
      </v-toolbar-title>
    </v-toolbar>

    <!-- CONTENT + ROUTER VIEW -->
    <v-content>
      <v-container fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    modules: [
      { icon: 'shuffle', text: 'Générer un personnage', name: 'home' },
      { icon: 'share', text: 'Partager votre personnage', name: 'share' }
    ]
  }),
  props: {
    source: String
  }
}
</script>

<style lang="scss">
@import '~vuetify/dist/vuetify.min.css';
@import '~material-design-icons-iconfont/dist/material-design-icons.css';
</style>
