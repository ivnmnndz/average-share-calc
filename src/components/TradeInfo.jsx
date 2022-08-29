import React from "react";
import { getAverage } from "../helpers";

const TradeInfoCard = ({ label, value }) => {
  return (
    <div className="trade-info-card">
      <div class="trade-info-card-inside">
        <span className="highlight">{value}</span>
        <p className="reminder">{label}</p>
      </div>
    </div>
  );
};

const TradeInfo = ({ totals }) => {
  return (
    <div className="trade-info">
      <TradeInfoCard
        label={"Shares Bought"}
        value={totals.shares > 0 ? totals.shares.toFixed(2) : 0}
      />
      <TradeInfoCard
        label={"Average Price"}
        value={totals.cost > 0 ? getAverage(totals).toFixed(2) : 0}
      />
      <TradeInfoCard label={"Total Invested"} value={totals.cost.toFixed(2)} />
    </div>
  );
};

export default TradeInfo;
