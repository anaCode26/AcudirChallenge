<template>
  <v-container>
    <v-card class="pa-2">
    <v-tabs grow v-model="tab">
      <v-tab href="#activity">Activities</v-tab>
      <v-tab href="#historic">Historics</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item :key="1" value="activity">
        <AActivity :activity="activity" />
    <div class="pt-6">
      <AButton :loading="isLoading" @click="getActivity" block>
        Get random activity
      </AButton>
    </div>
      </v-tab-item>
      <v-tab-item :key="2" value="historic">
        <AHistoric />
      </v-tab-item>
    </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import AActivity from '@/components/UI/Molecules/AActivity.vue';
import AHistoric from '@/components/UI/Molecules/AHistoric.vue';
import AButton from '@/components/UI/Atoms/AButton.vue';

export default {
  components: {
    AActivity,
    AButton,
    AHistoric
},
  data() {
    return {
      tab: 'activity',
      activity: {},
      isLoading: false
    }
  },
  methods: {
    getActivity(){
      this.isLoading = true
      fetch("https://www.boredapi.com/api/activity")
      .then(response => response.json())
      .then(data => {
        this.activity = data
        this.$store.state.historics.unshift(data)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        this.isLoading = false
      })
    }
  }

}
</script>
