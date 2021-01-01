<template>

  <div class="q-pa-md">

    <!-- HEADER -->
    <div style="background-color: pink">HEADER</div>

    <q-layout view="hHh Lpr lff" container style="height: 300px" class="shadow-2 rounded-borders">
      <!-- <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
      </q-header> -->

      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3">
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="home"/>
              </q-item-section>
              <q-item-section> Home</q-item-section>
            </q-item>
            <q-item active clickable v-ripple to="/aboutUs">
              <q-item-section avatar>
                <q-icon name="face" />
              </q-item-section>
              <q-item-section>About us</q-item-section>
            </q-item>
            <q-separator/>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>

    </q-layout>

    <!-- FOOTER -->
    <div style="background-color: pink">FOOTER</div>

  </div>
</template>

<script>

export default {

  name: 'LayoutDefault',

  data () {
    return {
      drawer: false,
      miniState: true,
    }
  }
}
</script>

<style scoped>

</style>>
