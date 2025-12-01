import { Select } from '../../../shared/ui';

import styles from './LineStyleSelector.module.scss';

import type { LineStyle } from '../../../shared/types';

interface LineStyleSelectorProps {
  value: LineStyle;
  onChange: (_lineStyle: LineStyle) => void;
}

export function LineStyleSelector({ value, onChange }: LineStyleSelectorProps) {
  return (
    <div className={styles.selector}>
      <Select value={value} onChange={(val) => onChange(val as LineStyle)}>
        <option value='line'>Line style: line</option>
        <option value='smooth'>Line style: smooth</option>
        <option value='area'>Line style: area</option>
      </Select>
    </div>
  );
}
