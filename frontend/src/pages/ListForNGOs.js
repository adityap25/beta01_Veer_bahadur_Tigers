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
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import './list.css';
import { Navbar } from 'react-bootstrap';
import Navbar1 from '../components/Navbar1';

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

function createData(donor, wheat, rice, milk, fruits) {
  return { donor, wheat, rice, fruits, milk};
}

// let rows = [
//   createData('Sanjay', 1, 0, 4, 4, 1),
//   // createData('Sanjay', 1, 0, 4, 4, 1),
//   // createData('Sanjay', 1, 0, 4, 4, 1),
//   // createData('Sanjay', 1, 0, 4, 4, 1),
//   // createData('Sanjay', 1, 0, 4, 4, 1),
//   // createData('Sanjay', 1, 0, 4, 4, 1),
//   // createData('Sanjay', 1, 0, 4, 4, 1),
//   // createData('Sanjay', 1, 0, 4, 4, 1),
//   // createData('Sanjay', 1, 0, 4, 4, 1),
//   // createData('Sanjay', 1, 0, 4, 4, 1),
//   // createData('Sanjay', 1, 0, 4, 4, 1),
//   // createData('Sanjay', 1, 0, 4, 4, 1),
//   // createData('Sanjay', 1, 0, 4, 4, 1),
// ];

export default function ListForNGOs() {

  // const navigate = useNavigate();
  //   useEffect(() => {
  //       const token = localStorage.getItem('token')
  //       if(token == null)
  //           navigate('/login')
            
  //   }, []);

  const [data, setData] = React.useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get('http://127.0.0.1:8000/api/donation/ngolist/', { headers: {"Authorization" : `Bearer ${token}`} })
    .then(res => {
        console.log(res)
        setData(res.data) 
    })
  }, []);

  function onSelect(row) {
    const token = localStorage.getItem('token')
    console.log(row.id)
    // axios.put('http://127.0.0.1:8000/api/donation/admin/zero/', {
    //   headers: {
    //     "Authorization" : `Bearer ${token}`
    //   },
    //   data: {
    //     'id':row.id,
    //     'status' : 2
    //   }
    // })
    // window.location.reload()
  }

  return (

    <div>
    
    <Navbar1 />

    <br />

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
          {data.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {row.donor}
              </StyledTableCell>
              <StyledTableCell align="right">{row.wheat}</StyledTableCell>
              <StyledTableCell align="right">{row.rice}</StyledTableCell>
              <StyledTableCell align="right">{row.milk}</StyledTableCell>
              <StyledTableCell align="right">{row.fruits}</StyledTableCell>
              <div className='list-button'>
              <Button color='success' variant="contained" onClick={() => onSelect(row)}>
              &#x2713;
              </Button>
              </div>
            </StyledTableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
  );
}