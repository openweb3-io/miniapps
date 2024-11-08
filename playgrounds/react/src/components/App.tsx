import { useLaunchParams, miniApp } from '@openweb3-apps/sdk-react';
import { AppRoot } from '@openweb3-apps/openweb3-ui';
import { Navigate, Route, Routes, HashRouter } from 'react-router-dom';

import { routes } from '@/navigation/routes.tsx';

export function App() {
  const lp = useLaunchParams();

  return (
    <AppRoot
      appearance={miniApp.isDark() ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <HashRouter>
        <Routes>
          {routes.map((route) => <Route key={route.path} {...route} />)}
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </HashRouter>
    </AppRoot>
  );
}
