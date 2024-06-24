import { create } from 'zustand'

const useStore = create((set) => ({
  usdValue: null,
  euroValue: null,
  exchangeRate: 1.07,
  setUsdValue: (value) =>
    set(state => ({ 
      usdValue: value, 
      euroValue: (value * state.exchangeRate).toFixed(2)
    })),
  setEuroValue: (value) =>
    set(state => ({ 
      euroValue: value, 
      usdValue: (value / state.exchangeRate).toFixed(2) 
    })),
}));

export default useStore;