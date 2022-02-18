import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getStock, useStock } from "../../services/stocks";

const WatchListItem = ({
  stock,
  ...rest
}) => {
  const idleColor = '#a4b6ef';
  const activeColor = '#596cd5';
  const greenColor = '#00FF00';
  const redColor = '#FF0000';
  const [data, setData] = useState(null);
  const [edgeColor, setEdgeColor] = useState(idleColor);
  const [priceColor, setPriceColor] = useState('#000000');
  const {data: stockData} = useStock(stock);

  useEffect(() => {
    if (stockData) {
      setData(stockData.stock[0]);
      if (stockData.stock[0].percent_change < 0) {
        setPriceColor(redColor);
      } else {
        setPriceColor(greenColor);
      }
    }
  }, [stockData]);

  const handleMouseEnter = () => {
    setEdgeColor(activeColor);
  };

  const handleMouseLeave = () => {
    setEdgeColor(idleColor);
  };

  return (
    <Card sx={{ display: 'flex', mb: '10px' }}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <Box sx={{ backgroundColor: edgeColor, flex: 0.1}}></Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 3 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">{ stock.toUpperCase() }</Typography>
          <Typography>{ data?.name }</Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 2, color: priceColor }}>
        <CardContent sx={{ flex: '0 0 auto', textAlign: 'center', }}>
        <Typography component="div" variant="h5">{ data?.price?.amount }</Typography>
        <Typography component="div" variant="caption">{ data?.percent_change }%</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default WatchListItem;