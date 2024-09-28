import { defineComponent, createApp } from 'vue'

const App = defineComponent({
  name: 'App',

  setup() {
    function currenDate() {
      return new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' });
    }

    return {
      currenDate
    }
  },

  template: '<div>Сегодня {{ currenDate() }}</div>'
});

const app = createApp(App);
app.mount('#app');
