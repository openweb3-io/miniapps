/**
 * Removes global event handlers, used by the package.
 */
export function removeEventHandlers(): void {
  ['Openweb3GameProxy_receiveEvent', 'Openweb3GameProxy', 'Openweb3'].forEach((prop) => {
    delete window[prop as keyof Window];
  });
}