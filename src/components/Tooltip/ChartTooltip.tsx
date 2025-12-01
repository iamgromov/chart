import IconBest from '../../assets/icons/icon-best.svg?react';
import IconCalendar from '../../assets/icons/icon-calendar.svg?react';
import { VARIATIONS } from '../../shared/constants';
import { formatConversionRate, formatTooltipDate } from '../../shared/utils/dataTransform';

import styles from './ChartTooltip.module.scss';

import type { ChartDataPoint, Timeframe, TooltipAlign } from '../../shared/types';

interface ChartTooltipProps {
  data: ChartDataPoint[];
  timeframe: Timeframe;
  x: number;
  y: number;
  align?: TooltipAlign;
}

export function ChartTooltip({ data, timeframe, x, y, align = 'center' }: ChartTooltipProps) {
  if (data.length === 0) return null;

  const date = data[0].date;

  const sortedData = [...data].sort((a, b) => b.conversionRate - a.conversionRate);

  const bestVariationId = sortedData[0].variationId;

  const tooltipClassName = `${styles.tooltip} ${styles[`tooltip--${align}`] ?? ''}`.trim();

  return (
    <div
      className={tooltipClassName}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <div className={styles.tooltip__date}>
        <span className={styles['tooltip__date-icon']} aria-hidden='true'>
          <IconCalendar />
        </span>
        {formatTooltipDate(date, timeframe)}
      </div>

      <div className={styles.tooltip__items}>
        {sortedData.map((point) => {
          const variation = VARIATIONS.find((v) => v.id === point.variationId);
          const isBest = point.variationId === bestVariationId;

          return (
            <div key={point.variationId} className={styles.tooltip__item}>
              <span
                className={styles.tooltip__color}
                style={{ backgroundColor: variation?.color }}
              />
              <span className={styles.tooltip__name}>{point.variationName}</span>
              {isBest && (
                <span className={styles.tooltip__trophy}>
                  <IconBest />
                </span>
              )}
              <span className={styles.tooltip__value}>
                {formatConversionRate(point.conversionRate)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
