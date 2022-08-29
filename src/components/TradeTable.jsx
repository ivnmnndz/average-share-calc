import React from "react";
import TradeRow from "./TradeRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const TradeTable = ({ rows, removeEntry }) => {
  return (
    <TableContainer
      style={{
        padding: "10px",
        width: "100%",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <span class="bigheader">Shares</span>
            </TableCell>
            <TableCell>
              <span class="bigheader">Price</span>
            </TableCell>
            <TableCell>
              <span class="bigheader">Cost</span>
            </TableCell>
            <TableCell>
              <span class="bigheader">{""}</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TradeRow key={i} i={i} row={row} removeEntry={removeEntry} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TradeTable;
