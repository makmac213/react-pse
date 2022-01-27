import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField
} from "@mui/material";
import { getStock } from "./services/stocks";
// components
import {
  SimpleQuery,
  StocksDataTable,
  WatchList
} from "./components/";

const App = () => {
  const [symbol, setSymbol] = useState(null);
  const [stocks, setStocks] = useState([]);

  const handleChange = (event) => {
    setSymbol(event.target.value);
  };

  const handleClick = async (event) => {
    // check first if stock symbol is valid
    const data = await getStock(symbol);
    if (data && stocks.indexOf(symbol) === -1) {
      setStocks(stocks => [...stocks, symbol])
    }
  };

  const handleClear = async (event) => {
    setStocks([])
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: '10px 10px'
      }}
    >
      <Grid item xs={3}>
        <h1>SimpleQuery</h1>
        <SimpleQuery />
      </Grid>
      <Grid item xs={9}></Grid>
      
      <Grid item xs={3}>
        <h1>WatchList</h1>

        <Box
          sx={{
            border: '1px solid #000000',
            padding: '10px 10px 10px 10px'
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                onChange={handleChange}
                placeholder="Symbol"
                size="small"
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={3}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleClick}
              >
                Add
              </Button>
            </Grid>
            
            <Grid item xs={3}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleClear}
              >
                Clear
              </Button>
            </Grid>

            <Grid item xs={12}>
              <WatchList 
                stocks={stocks}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={9}></Grid>

      <Grid item xs={12}>
        <h1>StocksDataTable</h1>

        <div style={{ height: 400, width: '100%' }}>
          <StocksDataTable />
        </div>
      </Grid>
    </Grid>
  );
};

export default App;
