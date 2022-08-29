export const getTotals = (trades) => {
  const totals = trades.reduce(
    (accumulator, current) => {
      const calculatedCost = current.shares * current.purchasePrice;
      return {
        shares: accumulator.shares + current.shares,
        cost: accumulator.cost + parseFloat(calculatedCost.toFixed(2)),
      };
    },
    //initial value
    { shares: 0, cost: 0 }
  );
  return totals;
};

export const getAverage = (totals) => {
  const averageCost = totals.cost / totals.shares;
  return averageCost;
};
