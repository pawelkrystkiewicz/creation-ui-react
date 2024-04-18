export const is0 = (value?: string | number) => Number(value) === 0
export const ensureNumber = (value?: number, fallback?: number) => is0(value) ? value : value || fallback