import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

// Material-UI uchun maxsus `createEmotionCache` funksiyasi
export default function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLStyleElement>('meta[name="emotion-insertion-point"]');
    insertionPoint = emotionInsertionPoint ? undefined : document.head;
  }

  return createCache({ key: 'mui-style', insertionPoint });
}
