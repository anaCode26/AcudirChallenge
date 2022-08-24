<template>
  <div>
    <div class="pa-4 d-flex flex-column align-center" v-if="historics.length === 0">
    <v-icon x-large color="primary">
      mdi-robot-confused
    </v-icon>
      <h4 class="mt-4">
        No activity selected yet
      </h4>
      <div>
        Please click on the Generate activity button inside the activities tab
      </div>
    </div>
    <AActivity v-for="(historic, index) in historics" :key="index" :activity="historic" />
  </div>
</template>

<script>
import AActivity from '@/components/UI/Molecules/AActivity.vue';
export default {
  components: {
    AActivity
  },
  computed: {
    historics() {
      return this.$store.state.historics
    }
  }
  // props: {
  //   historics: {
  //     type: Array,
  //     required: true
  //   }
  // }
}
</script>