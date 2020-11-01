import React, { Component } from 'react'
import { AppBar, Box,Button,Toolbar } from '@material-ui/core'



export default class Header extends Component {
	navProduto = (e) => {
		window.location.href= "/cadastrar-produtos"
	}
	navListarProduto = (e) => {
		window.location.href= "/listar-produtos"
	}

	render() {
		return (
			<div>
				<Box>
					<AppBar position="static">
						<Toolbar>
							<div>
								<Button variant="contained"  onClick={this.navProduto}>
									Produtos
								</Button>
							</div>
							<div>
								<Button variant="contained"  onClick={this.navListarProduto}>
								Listar
								</Button>
							</div>
						</Toolbar>
					</AppBar>
				</Box>
			</div>
		)
	}
}
