const isBrowser = typeof window !== `undefined`
export const isDesktop = isBrowser && window.matchMedia("only screen and (min-width: 720px)").matches
