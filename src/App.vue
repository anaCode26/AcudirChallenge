<template>
  <v-app>
    <v-app-bar
      app
      color="indigo lighten-1"
      dark
    >
    <v-img src="./assets/logoAcudir.png" max-height="40" max-width="40" />
    <h3 class="pl-4">Acudir Challenge</h3>
    </v-app-bar>
    <v-main>
      <IndexView/>
    </v-main>
    <div class="py-6">
    <v-footer dark fixed color="indigo lighten-1 d-flex justify-center">     
      <div>
        {{ new Date().getFullYear()}} - <strong>By Ana Guzmán</strong>
      </div>
    </v-footer>
    </div>
  </v-app>
</template>

<script>
import IndexView from './views/IndexView.vue';

export default {
  name: 'App',

  components: {
    IndexView
},

  data: () => ({
    //
  }),
};
</script>
