import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField
} from "@mui/material";
import { getStock } from "../../services/stocks";

const SimpleQuery = () => {
  const [symbol, setSymbol] = useState(null);
  const [stock, setStock] = useState(null);

  const handleChange = (event) => {
    setSymbol(event.target.value);
  };

  const handleClick = async () => {
    const data = await getStock(symbol);
    if (data) {
      setStock(data.stock[0]);
    }
  };

  return (
    <Box
      sx={{
        border: '1px solid #000000',
        padding: '10px 10px 10px 10px'
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            onChange={handleChange}
            placeholder="Symbol"
            size="small"
            variant="outlined"
          />
        </Grid>
        
        <Grid item xs={4}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleClick}
          >
            Get
          </Button>
        </Grid>

        <Grid item xs={4}>
          Name
        </Grid>
        <Grid item xs={8}>
          {stock?.name}
        </Grid>

        <Grid item xs={4}>
          Price
        </Grid>
        <Grid item xs={8}>
          {stock?.price?.amount}
        </Grid>

        <Grid item xs={4}>
          % Change
        </Grid>
        <Grid item xs={8}>
          {stock?.percent_change}
        </Grid>

        <Grid item xs={4}>
          Volume
        </Grid>
        <Grid item xs={8}>
          {stock?.volume}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SimpleQuery;