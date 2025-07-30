import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};


export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://t.me/jiangstreet' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://forms.gle/zeva2efiZ2oSj6SG7' },
  ],
  footNote: `
    &copy; 2025 Jiang Street. All rights reserved.
  `,
};
