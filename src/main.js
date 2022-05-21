import { createApp, defineAsyncComponent } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import baseCard from './components/ui/baseCard.vue';
import baseButton from './components/ui/baseButton.vue';
import baseBadge from './components/ui/baseBadge.vue';
import baseSpinner from './components/ui/baseSpinner.vue';
// import baseDialog from './components/ui/baseDialog.vue';

const baseDialog = defineAsyncComponent(() => import('./components/ui/baseDialog.vue'));


// createApp({}).mount('#app');
const app = createApp(App)

app.use(router);
app.use(store);

app.component('base-card', baseCard);
app.component('base-button', baseButton);
app.component('base-badge', baseBadge);
app.component('base-spinner', baseSpinner);
app.component('base-dialog', baseDialog);

app.mount('#app');
