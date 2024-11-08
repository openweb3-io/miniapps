import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { retrieveLaunchParams } from '@openweb3-apps/sdk-react';

import { Root } from '@/components/Root';
import { init } from '@/init.ts';

import '@openweb3-apps/openweb3-ui/dist/styles.css';
import './index.css';

// Mock the environment in case, we are outside Openweb3.
import './mockEnv.ts';

// Configure all application dependencies.
init(retrieveLaunchParams().startParam === 'debug');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root/>
  </StrictMode>,
);
