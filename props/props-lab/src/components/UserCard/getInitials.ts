const FALLBACK_INITIALS = '?'

/**
 * "Maria da Silva" -> "MS", "ana" -> "A", "   " -> "?".
 * Usa Array.from para não partir letras acentuadas ou emojis ao meio.
 */
export function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean)
  const first = words.at(0)
  const last = words.length > 1 ? words.at(-1) : undefined

  const initials = [first, last]
    .map((word) => (word ? Array.from(word)[0] : ''))
    .join('')
    .toLocaleUpperCase('pt-BR')

  return initials || FALLBACK_INITIALS
}
