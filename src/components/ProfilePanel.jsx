const links = [
  {
    label: 'Instagram',
    handle: '@d_a__r_ia',
    href: 'https://www.instagram.com/d_a__r_ia/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3" />
        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    handle: 'Daria',
    href: 'https://www.facebook.com/profile.php?id=100013280554250',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 10v4h3v7h4v-7h3l1-4h-4v-2a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2h-3" />
      </svg>
    ),
  },
  {
    label: 'メール',
    handle: 'zarp.191@gmail.com',
    href: 'mailto:zarp.191@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    ),
  },
];

export default function ProfilePanel() {
  return (
    <aside className="profile-panel">
      <div className="profile-header">
        <h1 className="profile-name">Daria</h1>
        <p className="profile-bio">モンゴル製、日本で稼働中。</p>
      </div>

      <nav className="profile-links">
        {links.map((link) => (
          <a
            key={link.label}
            className="link-btn"
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          >
            <span className="link-icon" aria-hidden="true">
              {link.icon}
            </span>
            <span className="link-label">{link.label}</span>
            <span className="link-handle">{link.handle}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
