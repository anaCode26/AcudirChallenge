import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#5C6BC0',
        secondary: '#7986CB',
        accent: '#82B1FF',
        error: '#FF5252',
      }
    }
  }
})
