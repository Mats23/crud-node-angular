import React from 'react';
import {makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, Paper } from '@material-ui/core';


const useStyle = makeStyles({
  table: {
    minwidth: 650
  }
})



export default function Datatable() {
  const classes = useStyle();
  return (
    <TableContainer component={Paper} size="small" arial-label="a dense table">
      <Table className={classes.table}>
        <TableHead>
          <TableCell>Teste 1</TableCell>
          <TableCell align="rigth">Teste 2</TableCell>
          <TableCell align="rigth">Teste 3</TableCell>
        </TableHead>
        <TableBody>
          <TableCell>Teste 1 teste</TableCell>
          <TableCell align="rigth">Teste 2 teste</TableCell>
          <TableCell align="rigth">Teste 3 teste</TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

