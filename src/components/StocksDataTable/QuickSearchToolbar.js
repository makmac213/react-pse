import React from "react";
import {
  IconButton,
  TextField
} from "@mui/material";
import { Box } from "@mui/system";
import SeachIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const QuickSearchToolbar = ({
  clearSearch,
  onChange,
  value,
  ...rest
}) => {
  return (
      <Box
        sx={{
          p: 0.5,
          pb: 0
        }}
      >
        <TextField
          variant="standard"
          value={value}
          onChange={onChange}
          placeholder="Search"
          InputProps={{
            startAdornment: <SeachIcon fontSize="small" />,
            endAdornment: (
              <IconButton
                title="Clear"
                aria-label="Clear"
                size="small"
                style={{ visibility: value ? 'visible' : 'hidden' }}
                onClick={clearSearch}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            )
          }}
          sx={{
            width: {
              xs: 1,
              sm: 'auto'
            },
            m: (theme) => theme.spacing(1, 0.5, 1.5),
            '& .MuiSvgIcon-root': {
              mr: 0.5
            },
            '& .MuiInput-underline:before': {
              borderBottom: 1,
              borderColor: 'divider'
            }
          }}
        />
      </Box>
  );
};

export default QuickSearchToolbar;