import { Select } from '../../../shared/ui';

import styles from './TimeframeToggle.module.scss';

import type { Timeframe } from '../../../shared/types';

interface TimeframeToggleProps {
  value: Timeframe;
  onChange: (_timeframe: Timeframe) => void;
}

export function TimeframeToggle({ value, onChange }: TimeframeToggleProps) {
  return (
    <div className={styles.toggle}>
      <Select value={value} onChange={(next) => onChange(next as Timeframe)}>
        <option value='day'>Day</option>
        <option value='week'>Week</option>
      </Select>
    </div>
  );
}
