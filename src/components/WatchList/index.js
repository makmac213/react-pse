import React, { useState } from "react";
import WatchListItem from "./WatchListItem";

const WatchList = ({
  stocks,
  ...rest
}) => {
  
  return (
    <>
      {stocks.map((stock, key) => {
        return (
          <WatchListItem
            key={key}
            stock={stock}
          />
        );
      })}
    </>
  );
};

export default WatchList;