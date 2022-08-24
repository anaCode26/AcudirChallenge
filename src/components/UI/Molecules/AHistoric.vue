<template>
  <div>
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