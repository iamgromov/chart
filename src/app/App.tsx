import { useRef } from 'react';

import {
  Chart,
  ExportButton,
  LineChart,
  LineStyleSelector,
  ThemeToggle,
  TimeframeToggle,
  VariationSelector,
  ZoomControls,
} from '../components';
import { useAppState, useChartData } from '../shared/hooks';
import rawData from '../shared/mock/data.json';

import styles from './App.module.scss';

import type { RawData } from '../shared/types';

const data = rawData as RawData;

function App() {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  const {
    selectedVariations,
    toggleVariation,
    setSelectedVariationsBatch,
    timeframe,
    setTimeframe,
    lineStyle,
    setLineStyle,
    theme,
    setTheme,
    zoomDomain,
    setZoomDomain,
    resetZoom,
  } = useAppState();

  const {
    data: chartData,
    xDomain,
    yDomain,
    fullXDomain,
  } = useChartData({
    rawData: data,
    timeframe,
    selectedVariations,
    zoomDomain,
  });

  return (
    <div className={styles.app}>
      <header className={styles.app__header}>
        <h1 className={styles.app__title}>Interactive Line Chart</h1>
      </header>

      <main className={styles.app__main}>
        <div className={styles.app__controls}>
          <div className={styles['app__controls-left']}>
            <VariationSelector
              selectedVariations={selectedVariations}
              onToggleVariation={toggleVariation}
              onSetVariations={setSelectedVariationsBatch}
            />
            <TimeframeToggle value={timeframe} onChange={setTimeframe} />
          </div>

          <div className={styles['app__controls-right']}>
            <LineStyleSelector value={lineStyle} onChange={setLineStyle} />

            <ExportButton chartRef={chartContainerRef} filename='chart-image' />

            <ZoomControls
              zoomDomain={zoomDomain}
              fullDomain={fullXDomain}
              onZoomChange={setZoomDomain}
              onResetZoom={resetZoom}
            />

            <ThemeToggle value={theme} onChange={setTheme} />
          </div>
        </div>

        <div className={styles.app__chart} ref={chartContainerRef}>
          <Chart>
            {(dimensions) => (
              <LineChart
                data={chartData}
                dimensions={dimensions}
                lineStyle={lineStyle}
                xDomain={xDomain}
                yDomain={yDomain}
                timeframe={timeframe}
              />
            )}
          </Chart>
        </div>
      </main>
    </div>
  );
}

export default App;
