import type { SyntheticEvent } from 'react'
import { getInitials } from './getInitials'
import { isSafeImageUrl } from './isSafeImageUrl'
import styles from './UserCard.module.css'

export interface UserCardProps {
  readonly name: string
  readonly role: string
  readonly avatarUrl?: string
  readonly isOnline?: boolean
}

function hideImage(event: SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.hidden = true
}

export function UserCard({ name, role, avatarUrl, isOnline = false }: UserCardProps) {
  // Props são somente leitura: valores derivados ficam em variáveis locais.
  const displayName = name.trim().replace(/\s+/g, ' ')
  const initials = getInitials(displayName)
  const safeAvatarUrl = avatarUrl && isSafeImageUrl(avatarUrl) ? avatarUrl : undefined
  const statusLabel = isOnline ? 'Online' : 'Offline'

  return (
    <article className={styles.card}>
      <div className={styles.avatar}>
        {/* As iniciais ficam sempre por baixo: se a imagem falhar, ela some e elas aparecem. */}
        <span aria-hidden="true">{initials}</span>
        {safeAvatarUrl && (
          <img
            // `key` recria o <img> quando a URL muda, para uma URL nova não herdar o `hidden`.
            key={safeAvatarUrl}
            className={styles.avatarImage}
            onError={hideImage}
            src={safeAvatarUrl}
            alt=""
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        )}
      </div>

      <div className={styles.info}>
        <p className={styles.name}>{displayName}</p>
        <p className={styles.role}>{role}</p>
        <p className={styles.status}>
          <span
            className={`${styles.statusDot} ${isOnline ? styles.online : styles.offline}`}
            aria-hidden="true"
          />
          {statusLabel}
        </p>
      </div>
    </article>
  )
}
