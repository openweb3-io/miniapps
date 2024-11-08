import { resetSignal } from '@test-utils/reset/reset.js';

import {
  isMounted,
  isVisible,
  state,
  isLoaderVisible,
  isEnabled,
  hasShineEffect,
  text,
  textColor,
  backgroundColor,
  internalState,
} from '@/scopes/components/main-button/signals.js';

export function resetMainButton() {
  [
    isMounted,
    isVisible,
    state,
    isLoaderVisible,
    isEnabled,
    hasShineEffect,
    text,
    textColor,
    backgroundColor,
    internalState,
  ].forEach(resetSignal);
}