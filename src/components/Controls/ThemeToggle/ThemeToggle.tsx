import IconTheme from '../../../assets/icons/icon-theme.svg?react';
import { Button } from '../../../shared/ui';

import styles from './ThemeToggle.module.scss';

import type { Theme } from '../../../shared/types';

interface ThemeToggleProps {
  value: Theme;
  onChange: (_theme: Theme) => void;
}

export function ThemeToggle({ value, onChange }: ThemeToggleProps) {
  const handleToggle = () => {
    onChange(value === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={styles.toggle}>
      <Button
        onClick={handleToggle}
        variant='primary'
        title={`Switch to ${value === 'light' ? 'dark' : 'light'} mode`}
        className={styles.toggle__button}
      >
        <IconTheme />
      </Button>
    </div>
  );
}
