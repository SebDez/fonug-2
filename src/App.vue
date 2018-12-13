<template>
  <VApp dark>
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
            {{ $t('navigation.about') }}
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
          {{ $t('global.appTitle') }}
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
  data () {
    return {
      drawer: true,
      modules: [
        { icon: 'shuffle', text: this.$t('navigation.home'), name: 'home' },
        { icon: 'share', text: this.$t('navigation.share'), name: 'share' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~vuetify/dist/vuetify.min.css';
@import '~material-design-icons-iconfont/dist/material-design-icons.css';

</style>
