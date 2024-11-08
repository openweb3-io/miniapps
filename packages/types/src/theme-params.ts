import type { RGB } from './colors.js';

export type ThemeParamsKey =
  | 'accentTextColor'
  | 'bgColor'
  | 'buttonColor'
  | 'buttonTextColor'
  | 'bottomBarBgColor'
  | 'destructiveTextColor'
  | 'headerBgColor'
  | 'hintColor'
  | 'linkColor'
  | 'secondaryBgColor'
  | 'sectionBgColor'
  | 'sectionHeaderTextColor'
  | 'sectionSeparatorColor'
  | 'subtitleTextColor'
  | 'textColor';

/**
 * Application [theme parameters](https://docs.openweb3-mini-apps.com/platform/theming).
 * Defines palette used by the Openweb3 application.
 */
export interface ThemeParams {
  [key: ThemeParamsKey | string]: RGB | undefined;
}
