<template>
  <VApp id="inspire" dark>
    <!-- SIDEBAR -->
    <VNavigationDrawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <VList dense>
        <RouterLink v-for="appModule in modules" :key="appModule.text"
                    :to="{name: appModule.name}"
                    tag="v-list-tile"
        >
          <VListTileAction>
            <VIcon>{{ appModule.icon }}</VIcon>
          </VListTileAction>
          <VListTileContent>
            <VListTileTitle>
              {{ appModule.text }}
            </VListTileTitle>
          </VListTileContent>
        </RouterLink>
        <RouterLink :to="{name: 'about'}" tag="v-list-tile">
          <VListTileAction>
            <VIcon color="grey darken-1">
              info
            </VIcon>
          </VListTileAction>
          <VListTileTitle class="grey--text text--darken-1">
            About
          </VListTileTitle>
        </RouterLink>
      </VList>
    </VNavigationDrawer>

    <!-- HEADER -->
    <VToolbar
      color="pink"
      dense
      fixed
      clipped-left
      app
    >
      <VToolbarSideIcon @click.stop="drawer = !drawer" />
      <VToolbarTitle class="mr-5 align-center">
        <span class="title">
          Fonug II - Générateur aléatoire de personnages
        </span>
      </VToolbarTitle>
    </VToolbar>

    <!-- CONTENT + ROUTER VIEW -->
    <VContent>
      <VContainer fill-height>
        <RouterView />
      </VContainer>
    </VContent>
  </VApp>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    modules: [
      { icon: 'shuffle', text: 'Générer un personnage', name: 'home' },
      { icon: 'share', text: 'Partager votre personnage', name: 'share' }
    ]
  })
}
</script>

<style lang="scss">
@import '~vuetify/dist/vuetify.min.css';
@import '~material-design-icons-iconfont/dist/material-design-icons.css';
</style>
