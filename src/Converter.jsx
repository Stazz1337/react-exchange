import useStore from './store';
import styles from './Converter.module.css';

const Converter = () => {
  const { usdValue, euroValue, setUsdValue, setEuroValue } = useStore();

  return (
    <div className={styles.root}>
      <div>
        <label htmlFor="usd">USD</label>
        <input
          id="usd"
          type="number"
          value={usdValue}
          onChange={(e) => setUsdValue(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="eur">EUR</label>
        <input
          id="eur"
          type="number"
          value={euroValue}
          onChange={(e) => setEuroValue(parseFloat(e.target.value))}
      />
      </div>
    </div>
  );
};

export default Converter;