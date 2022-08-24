<template>
  <v-card flat >
    <v-card-text>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              Activity: 
            </v-list-item-title>
            <v-list-item-subtitle>
              - {{ activity.activity }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider/>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              Type: 
            </v-list-item-title>
            <v-list-item-subtitle>
            <span v-if="activity.type">
              <v-chip color="accent"> {{ activity.type }} </v-chip>
            </span>              
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider/>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              Participants: 
            </v-list-item-title>
            <v-list-item-subtitle>
              # {{ activity.participants }}
            </v-list-item-subtitle>
          </v-list-item-content> 
        </v-list-item>
        <v-divider/>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
 export default {
  props: {
    activity: {
      type: Object,
      required: true
    }
  }

 }

</script>

