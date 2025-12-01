import { useRef, useState, useEffect, type ReactNode } from 'react';

import { DEFAULT_MARGIN, CHART_ASPECT_RATIO } from '../../shared/constants';

import styles from './Chart.module.scss';

import type { ChartDimensions } from '../../shared/types';

interface ChartProps {
  children: (_dimensions: ChartDimensions) => ReactNode;
}

export function Chart({ children }: ChartProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const height = width / CHART_ASPECT_RATIO;

  const dimensions: ChartDimensions = {
    width,
    height,
    margin: DEFAULT_MARGIN,
  };

  return (
    <div className={styles.container} ref={containerRef}>
      {width > 0 ? children(dimensions) : null}
    </div>
  );
}
