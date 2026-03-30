export default function TechnicalAnalysisBasics() {
  return (
    <>
      <p>
        Technical analysis (TA) is a method of evaluating price movements and identifying potential trading opportunities by studying historical chart data. While no approach can predict the future, TA provides a framework for understanding market behavior and making more informed decisions.
      </p>

      <h2>Candlestick Charts</h2>
      <p>
        Candlestick charts are the standard visualization for crypto price data. Each candlestick represents a specific time period and displays four key data points:
      </p>
      <ul>
        <li><strong>Open:</strong> The price at the beginning of the period</li>
        <li><strong>High:</strong> The highest price reached during the period</li>
        <li><strong>Low:</strong> The lowest price reached during the period</li>
        <li><strong>Close:</strong> The price at the end of the period</li>
      </ul>
      <p>
        A green (or hollow) candle means the close was higher than the open &mdash; the price went up. A red (or filled) candle means the close was lower &mdash; the price went down. The thin lines extending above and below the body are called wicks, showing the high and low extremes.
      </p>

      <h2>Timeframes</h2>
      <p>
        Charts can be viewed across different timeframes, from 1-minute candles for active day trading to weekly or monthly candles for long-term trend analysis. Common timeframes include:
      </p>
      <ul>
        <li><strong>Short-term:</strong> 5-minute, 15-minute, 1-hour</li>
        <li><strong>Medium-term:</strong> 4-hour, daily</li>
        <li><strong>Long-term:</strong> Weekly, monthly</li>
      </ul>
      <p>
        Higher timeframes generally produce more reliable signals because they smooth out short-term noise.
      </p>

      <h2>Support and Resistance</h2>
      <p>
        Support is a price level where buying pressure has historically been strong enough to prevent further decline. Resistance is a price level where selling pressure has historically capped upward movement. These levels often form at round numbers or previous highs and lows.
      </p>
      <p>
        When a support level breaks, it often becomes resistance, and vice versa. Traders watch these zones closely for potential entry and exit points.
      </p>

      <h2>Moving Averages</h2>
      <p>
        Moving averages smooth out price data to reveal underlying trends. The two most common types are:
      </p>
      <ul>
        <li><strong>Simple Moving Average (SMA):</strong> The arithmetic mean of closing prices over a set number of periods. A 50-day SMA averages the last 50 daily closes.</li>
        <li><strong>Exponential Moving Average (EMA):</strong> Gives more weight to recent prices, making it more responsive to current conditions.</li>
      </ul>
      <p>
        Traders often watch crossovers between short-term and long-term moving averages. When a shorter MA crosses above a longer one, it&apos;s considered a bullish signal. The reverse suggests bearish momentum.
      </p>

      <h2>Volume</h2>
      <p>
        Volume measures the total amount of ETC traded during a given period. High volume on a price move suggests conviction behind that move. Low volume may indicate a weak or unsustainable trend. Volume spikes often accompany breakouts above resistance or breakdowns below support.
      </p>

      <h2>Relative Strength Index (RSI)</h2>
      <p>
        RSI is a momentum indicator that measures the speed and magnitude of recent price changes on a scale from 0 to 100. Readings above 70 suggest an asset may be overbought (due for a pullback), while readings below 30 suggest it may be oversold (due for a bounce). RSI is most useful when combined with other indicators rather than used in isolation.
      </p>

      <h2>Limitations of Technical Analysis</h2>
      <p>
        TA has real limitations in cryptocurrency markets:
      </p>
      <ul>
        <li>Crypto markets are influenced by news, regulation, and sentiment that charts cannot capture</li>
        <li>Lower liquidity compared to traditional markets can produce false signals</li>
        <li>Past patterns do not guarantee future results</li>
        <li>TA works best as one input among many, not as a standalone strategy</li>
      </ul>

      <h2>Tools for ETC Chart Analysis</h2>
      <p>
        TradingView is the most widely used charting platform for cryptocurrency analysis. It supports ETC price data from multiple exchanges and provides a full suite of indicators, drawing tools, and alert systems. Most features are available on the free tier.
      </p>

      <p>
        <em>This content is for educational purposes only and does not constitute financial advice. Trading involves risk, and you should never trade more than you can afford to lose.</em>
      </p>
    </>
  )
}
