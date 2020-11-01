import { Grid } from '@material-ui/core';
import React from 'react';
import Datatable from '../components/datatable/Datatable';
import Header from '../components/Header/Header';

export default class ListarProdutos extends React.Component {

  render() {
    return(
      <div>
        <Header/>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div></div>
            </Grid>
            <Grid item xs={12}>
              <div></div>
            </Grid>
            <Grid item xs={2}>
              <div></div>
            </Grid>
            <Grid item xs={8}>
              <Datatable/>
            </Grid>
            <Grid item xs={2}>
              <div></div>
            </Grid>
          </Grid>
      </div>
    )
  }
}