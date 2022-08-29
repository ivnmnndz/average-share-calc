import React, { useState, useRef } from "react";
import { getTotals } from "../helpers";
import "./AverageShareCalc.css";
import TradeInfo from "./TradeInfo";
import { TextField, Button, Stack, Grid } from "@mui/material";
import TradeTable from "./TradeTable";
import Alert from "./Alert";

const LOCAL_STORAGE_KEY = "asc";

const updateLocal = (data) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};
const readLocal = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const AverageShareCalc = () => {
  const initialInputValues = {
    shares: "",
    purchasePrice: "",
  };
  const inputReference = useRef(null);
  const [trades, setTrades] = useState([]);
  const [inputValues, setInputValues] = useState(initialInputValues);

  // handle 2 inputs with same onChange using the input's name
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputValues.shares !== 0 &&
      inputValues.shares &&
      inputValues.purchasePrice !== 0 &&
      inputValues.purchasePrice &&
      !isNaN(+inputValues.shares) &&
      !isNaN(+inputValues.purchasePrice)
    ) {
      setTrades((currentTrades) => [
        ...currentTrades,
        {
          shares: +inputValues.shares,
          purchasePrice: +inputValues.purchasePrice,
        },
      ]);
      setInputValues(initialInputValues);
    } else {
      alert("enter a valid amount");
    }
  };

  const handleReset = () => {
    setTrades([]);
    setInputValues(initialInputValues);
    updateLocal([]);
  };

  const removeEntry = (i) => {
    setTrades(trades.filter((_, index) => index !== i));
  };

  // run only once on initial render
  React.useEffect(() => {
    const data = readLocal();
    setTrades(data);
  }, []);

  React.useEffect(() => {
    // when a new trade is added, return focus to the shares input
    inputReference.current.focus();
    if (trades.length) {
      updateLocal(trades);
    }
  }, [trades]);

  const totals = getTotals(trades);

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div style={{ position: "absolute", top: 20, right: 20 }}>
            <Alert handleReset={handleReset} />
          </div>
          <form onSubmit={handleSubmit}>
            <h3 className="">Add a trade</h3>
            <Stack
              style={{ alignSelf: "flex-start", width: "100%" }}
              spacing={2}
              direction="column"
            >
              <TextField
                inputRef={inputReference}
                name="shares"
                type="text"
                label="Shares"
                value={inputValues.shares}
                onChange={handleChange}
              />
              <TextField
                name="purchasePrice"
                type="text"
                label="Price"
                value={inputValues.purchasePrice}
                onChange={handleChange}
              />
              <Button style={{}} variant="contained" type="submit">
                Submit
              </Button>
            </Stack>
          </form>
        </Grid>
        {trades.length > 0 ? (
          <>
            <Grid item xs={12} md={6}>
              <TradeInfo totals={totals} handleReset={handleReset} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TradeTable rows={trades} removeEntry={removeEntry} />
            </Grid>
          </>
        ) : null}
      </Grid>
    </>
  );
};

export default AverageShareCalc;
