<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo acudir"
          contain
          src="@/assets/logoAcudir.png"
          transition="scale-transition"
          width="40"
        />
      </div>
    </v-app-bar>

    <v-main>
      <IndexView/>
    </v-main>
    <v-footer dark color="primary" class="d-flex justify-center">
      <div>
        {{ new Date().getFullYear() }} - <strong> By Ana Guzman</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import IndexView from './views/IndexView.vue'

export default {
  name: 'App',
  components: {
    IndexView
  }
}
</script>
