import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getStocks } from '../../services/stocks';
import QuickSearchToolbar from './QuickSearchToolbar';

const StocksDataTable = () => {
  const [stocks, setStocks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState(stocks);

  const getPrice = (params) => {
    const amount = params.row.price.amount;
    return amount.toFixed(2);
  };

  const columns = [
    {
      field: 'id',
      headerAlign: 'center',
      headerName: 'Symbol',
      valueGetter: (params) => `${params.id}`
    },
    {
      field: 'name',
      headerAlign: 'center',
      headerName: 'Company name',
      width: 200
    },
    {
      align: 'right',
      field: 'price',
      headerAlign: 'center',
      headerName: 'Price',
      valueGetter: getPrice
    },
    {
      align: 'right',
      field: 'percent_change',
      headerAlign: 'center',
      headerName: 'Change',
      width: 200,
      valueGetter: (params) => `${params.row.percent_change}%`
    },
    {
      align: 'right',
      field: 'volume',
      headerAlign: 'center',
      headerName: 'Volume',
      width: 200
    }
  ];

  const initData = async () => {
    const data = await getStocks();
    if (data) {
      setStocks(data.stock)
    }
  };

  if (stocks.length === 0) {
    initData();
  }

  const escapeRegExp = (value) => {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  };

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = stocks.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  useEffect(() => {
    setRows(stocks);
  }, [stocks]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        components={{ Toolbar: QuickSearchToolbar }}
        rows={rows}
        columns={columns}
        filterMode='server'
        pageSize={10}
        rowsPerPageOptions={[10, 20, 30]}
        getRowId={(row) => row.symbol}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch('')
          }
        }}
      />
    </div>
  );
};

export default StocksDataTable;