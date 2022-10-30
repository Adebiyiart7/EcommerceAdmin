// NODE_MODULES
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// LOCAL IMPORTS
import CardSkeleton from "./CardSkeleton"
import { brown } from '@mui/material/colors';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: brown[400],
    color: theme.palette.common.white,
    fontFamily: "'Inter', serif",
    fontWeight: 700
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 500,
    color: "var(--primaryText)",
    fontFamily: "'Inter', serif",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "var(--lightBackground)",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const createData = (name, user, amount, status, date) =>  {
  return { name, user, amount, status, date };
}

const rows = [
  createData('#12345', "Adeeyo Joseph Adebiyi", 29, "PAID", "08/02/2022"),
  createData('#12346', "John Smith", 43, "CANCELED", "15/04/2022"),
  createData('#12347', "Emmanuel Tony", 15, "PAID", "18/04/2022"),
  createData('#12348', "Michael James", 31, "CANCELED", "16/06/2022"),
  createData('#12349', "Taylor Swift", 50, "PAID", "25/09/2022"),
];

const RecentOrder = ({mediaQueries}) => {
  return (
    <CardSkeleton mediaQueries={mediaQueries} title={"Recent Order"} subTitle={"Last 10 Orders"}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="recent order table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order No</StyledTableCell>
            <StyledTableCell>Full Name</StyledTableCell>
            <StyledTableCell>Amount&nbsp;(USD)</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.user}</StyledTableCell>
              <StyledTableCell>{row.amount}</StyledTableCell>
              <StyledTableCell>{row.status}</StyledTableCell>
              <StyledTableCell>{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </CardSkeleton>
  )
}

export default RecentOrder