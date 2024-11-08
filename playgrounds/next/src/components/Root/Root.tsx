'use client';

import { type PropsWithChildren, useEffect, useMemo } from 'react';
import { useLaunchParams, miniApp, useSignal } from '@openweb3-apps/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { AppRoot } from '@openweb3-apps/openweb3-ui';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorPage } from '@/components/ErrorPage';
import { useOpenweb3Mock } from '@/hooks/useOpenweb3Mock';
import { useDidMount } from '@/hooks/useDidMount';
import { init } from '@/init';

import './styles.css';
import { useClientOnce } from '@/hooks/useClientOnce';

function RootInner({ children }: PropsWithChildren) {
  // Mock Openweb3 environment in development mode if needed.
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useOpenweb3Mock();
  }

  const lp = useLaunchParams();
  useClientOnce(() => {
    init(lp.startParam === 'debug');
  });

  const isDark = useSignal(miniApp.isDark);
  const manifestUrl = useMemo(() => {
    return new URL('tonconnect-manifest.json', window.location.href).toString();
  }, []);

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <AppRoot
        appearance={isDark ? 'dark' : 'light'}
        platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
      >
        {children}
      </AppRoot>
    </TonConnectUIProvider>
  );
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Openweb3 Mini Apps does not allow us to use all features of the Server Side
  // Rendering. That's why we are showing loader on the server side.
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props}/>
    </ErrorBoundary>
  ) : <div className="root__loading">Loading</div>;
}