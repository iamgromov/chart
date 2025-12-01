import type { ReactNode } from 'react';
import type React from 'react';

import IconChevron from '../../../assets/icons/icon-chevron.svg?react';

import styles from './Select.module.scss';

interface SelectProps {
  value: string;
  onChange: (_value: string) => void;
  children: ReactNode;
  className?: string;
}

export function Select({ value, onChange, children, className }: SelectProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`${styles.select} ${className || ''}`}>
      <div className={styles['select__control-wrapper']}>
        <select value={value} onChange={handleChange} className={styles.select__control}>
          {children}
        </select>
        <IconChevron className={styles.select__chevron} aria-hidden='true' />
      </div>
    </div>
  );
}
