import './index.css';

import { retrieveLaunchParams } from '@openweb3-apps/sdk-vue';
import { createApp } from 'vue';
import { TonConnectUIPlugin } from './tonconnect';
import App from './App.vue';
import router from './router';
import { init } from './init';

// Uncomment this import in case, you would like to develop the application even outside
// the Openweb3 application, just in your browser.
// import './mockEnv.ts';

init(retrieveLaunchParams().startParam === 'debug');

const app = createApp(App);

app.use(router);
app.use(TonConnectUIPlugin, {
  manifestUrl: new URL('vue-template/tonconnect-manifest.json', window.location.href).toString(),
});
app.mount('#app');
