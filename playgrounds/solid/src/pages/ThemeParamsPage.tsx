import { themeParams, useSignal } from '@openweb3-apps/sdk-solid';
import type { Component } from 'solid-js';

import { DisplayData } from '@/components/DisplayData/DisplayData.js';
import { Link } from '@/components/Link/Link.js';
import { Page } from '@/components/Page/Page.js';

export const ThemeParamsPage: Component = () => {
  const tp = useSignal(themeParams.state);

  return (
    <Page
      title="Theme Params"
      disclaimer={(
        <>
          This page displays current
          {' '}
          <Link href="https://docs.openweb3-mini-apps.com/platform/theming">
            theme parameters
          </Link>
          . It is reactive, so, changing theme externally will lead to this page updates.
        </>
      )}
    >
      <DisplayData
        rows={
          Object
            .entries(tp())
            .map(([title, value]) => ({
              title: title
                .replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`)
                .replace(/background/, 'bg'),
              value,
            }))
        }
      />
    </Page>
  );
};
