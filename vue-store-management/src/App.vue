<template>
  <div class="q-pa-md">
    <!-- HEADER -->
    <!-- <div style="background-color: pink">HEADER</div> -->

    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100%; position: absolute"
      class="shadow-2 rounded-borders"
    >
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
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <!-- HOMEPAGE SELECTION -->
            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>
              <q-item-section> Home</q-item-section>
            </q-item>
            <!-- *************************** -->

            <!-- ABOUTUS SELECTION -->
            <q-item active clickable v-ripple to="/aboutUs">
              <q-item-section avatar>
                <q-icon name="face" />
              </q-item-section>
              <q-item-section>About us</q-item-section>
            </q-item>
            <!-- *************************** -->

            <!-- PROD SELECTION -->
            <q-item active clickable v-ripple to="/products" class="q-item">
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>
              <q-item-section>Products</q-item-section>
              <!-- OPTION -->
              <q-select clickable v-model="model" :options="options" />
              <!-- *************************** -->
            </q-item>
            <!-- *************************** -->
            <q-separator />
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>

    <!-- FOOTER -->
    <!-- <div style="background-color: pink">FOOTER</div> -->
  </div>
</template>

<script>
export default {
  name: "LayoutDefault",

  data() {
    return {
      drawer: false,
      miniState: true,
      model: null,
      options: [
        {
          label: "Phone",
        },
        {
          label: "Tablet",
        },
        {
          label: "Laptop",
        },
      ],
    };
  },
};
</script>

<style scoped>
.q-item {
  padding-top: 0;
  padding-bottom: 0;
}
</style>>
