import { $debug, createLogger } from '@openweb3-apps/bridge';

export const [logInfo, logError] = createLogger('SDK', {
  bgColor: 'forestgreen',
  textColor: 'white',
  shouldLog: $debug,
});
