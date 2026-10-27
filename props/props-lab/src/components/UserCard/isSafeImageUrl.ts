const ALLOWED_PROTOCOLS = new Set(['https:', 'http:'])

/**
 * Aceita só URLs http(s) ou caminhos relativos ao site.
 * Bloqueia `javascript:`, `data:` e strings que nem são URL.
 */
export function isSafeImageUrl(url: string): boolean {
  try {
    const parsed = new URL(url, window.location.origin)
    return ALLOWED_PROTOCOLS.has(parsed.protocol)
  } catch {
    return false
  }
}
