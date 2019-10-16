<template>
    <v-container>
        <v-toolbar color="primary" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>
                <v-btn text>
                    <router-link :to="{ name: 'home' }" tag="span">
                        Грибы
                    </router-link>
                </v-btn>
            </v-toolbar-title>
            <div class="flex-grow-1"></div>
            <!--<v-btn icon>-->
                <!--<v-icon>mdi-magnify</v-icon>-->
            <!--</v-btn>-->
            <v-btn icon>
                <router-link :to="{ name: 'graph' }" tag="span">
                    <v-icon>mdi-chart-bar</v-icon>
                </router-link>
            </v-btn>
            <!--<v-btn icon>-->
                <!--<v-icon>mdi-dots-vertical</v-icon>-->
            <!--</v-btn>-->
        </v-toolbar>
    </v-container>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data: () => ({
  })
}
</script>

<style scoped>
</style>
