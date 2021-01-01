<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <!-- SAMPLE HOME VUE ROUTER -->
        <q-item clickable to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>HOME</q-item-label>
          </q-item-section>
        </q-item>

        <!-- SAMPLE ABOUT US VUE ROUTER -->
        <!-- <router-link to="/aboutUs" > -->
        <q-item clickable to="/aboutUs">
          <q-item-section avatar>
            <q-icon name="face" />
          </q-item-section>
          <q-item-section>
            <q-item-label>ABOUT US</q-item-label>
          </q-item-section>
        </q-item>
        <!-- </router-link> -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'LayoutDefault',

  data () {
    return {
      leftDrawerOpen: false,
      menu:null
    }
  }
}
</script>

<style>
</style>
