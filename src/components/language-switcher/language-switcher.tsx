import { useEffect, useState } from 'react';
import { MdLanguage } from 'react-icons/md/index';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { locales } from '@/lib/i18n';

import styles from './language-switcher.module.css';

interface LanguageSwitcherProps {
  currentLocale: string;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentLocaleInfo = locales.find(l => l.code === currentLocale);

  const handleLocaleChange = (locale: string) => {
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}(\/|$)/, '/');

    const newPath =
      locale === 'en'
        ? pathWithoutLocale || '/'
        : `/${locale}${pathWithoutLocale}`;

    window.location.href = newPath;
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        aria-label="Change language"
        className={styles.trigger}
      >
        <MdLanguage />
        <span className={styles.currentLocale}>
          {currentLocaleInfo?.nativeName || 'English'}
        </span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className={styles.content}
          sideOffset={5}
        >
          {locales.map(locale => (
            <DropdownMenu.Item
              className={styles.item}
              data-active={locale.code === currentLocale}
              key={locale.code}
              onSelect={() => handleLocaleChange(locale.code)}
            >
              <span className={styles.localeName}>{locale.nativeName}</span>
              <span className={styles.localeEnglishName}>({locale.name})</span>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
