import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";

const TradeRow = ({ row, i, removeEntry }) => {
  return (
    <TableRow>
      <TableCell align="left">
        <span class="bigheader">{`${row.shares}`}</span>
      </TableCell>
      <TableCell align="left">
        <span class="bigheader">{`$${row.purchasePrice.toFixed(2)}`}</span>
      </TableCell>
      <TableCell align="left">
        <span class="bigheader">
          {`$${(row.shares * row.purchasePrice).toFixed(2)}`}
        </span>
      </TableCell>
      <TableCell align="left">
        <Button color="secondary" variant="text" onClick={() => removeEntry(i)}>
          <ClearIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TradeRow;
