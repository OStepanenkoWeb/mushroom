<template>
  <v-container>
    <v-toolbar :color="classs" :dark="dark">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Грибы</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row>
      <router-view/>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'home'
}
</script>
