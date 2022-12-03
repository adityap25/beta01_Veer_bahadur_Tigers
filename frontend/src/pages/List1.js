import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
// import SendIcon from '@mui/icons-material/Send';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, wheat, dal, fruits, milk) {
  return { name, wheat, dal, fruits, milk};
}

const rows = [
  createData('Sanjay', 1, 0, 4, 4, 1),
  createData('Sanjay', 1, 0, 4, 4, 1),
  createData('Sanjay', 1, 0, 4, 4, 1),
  createData('Sanjay', 1, 0, 4, 4, 1),
  createData('Sanjay', 1, 0, 4, 4, 1),
  createData('Sanjay', 1, 0, 4, 4, 1),
  createData('Sanjay', 1, 0, 4, 4, 1),
  createData('Sanjay', 1, 0, 4, 4, 1),
  createData('Sanjay', 1, 0, 4, 4, 1),
  createData('Sanjay', 1, 0, 4, 4, 1),
  createData('Sanjay', 1, 0, 4, 4, 1),
  createData('Sanjay', 1, 0, 4, 4, 1),
  createData('Sanjay', 1, 0, 4, 4, 1),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell align="right">Wheat(kg)</StyledTableCell>
            <StyledTableCell align="right">Dal(kg)</StyledTableCell>
            <StyledTableCell align="right">Fruits(kg)</StyledTableCell>
            <StyledTableCell align="right">Milk(kg)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.wheat}</StyledTableCell>
              <StyledTableCell align="right">{row.dal}</StyledTableCell>
              <StyledTableCell align="right">{row.fruits}</StyledTableCell>
              <StyledTableCell align="right">{row.milk}</StyledTableCell>
              <Button variant="contained">
                Send
              </Button>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}