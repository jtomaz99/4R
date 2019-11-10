import React from "react"

function ListProdutos(produtos) {
	return (
	<div>
	{produtos.map((produto, index) => {
    	return <h1>{produto.nome_prod}</h1>
    })}
    </div> 
    )
}

export default ListProdutos
						//<ListProdutos data={this.props.produtos}/>