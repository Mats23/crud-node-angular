import { Button, Card, CardContent, Container, Grid, TextField } from '@material-ui/core';
import React from 'react';
import Header from '../components/Header/Header';
import './CadastrarProduto.css';

export default class CadastrarProduto extends React.Component {

  render() {
    return (
      <div>
        <Header/>
          <Container>
            <Card>
              <CardContent>
                <div class="form-cadastro">
                  <form> 
                    <Grid  container spacing={1}>
                      <Grid item xs={6}>
                        <TextField id="nomeProduto" label="Nome do Produto"/>
                      </Grid>
                      <Grid item xs={6}>
                        <div></div>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField id="nomeProduto" label="Valor do Produto"/>
                      </Grid>
                      <Grid item xs={12}>
                        <input type="file" class="inputFile" />
                      </Grid>
                      <Grid item xs={6}>
                        <Button variant="contained" color="secondary">
                          Cadastrar
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </div>
              </CardContent>
            </Card>
          </Container>
      </div>
    )
  }
}