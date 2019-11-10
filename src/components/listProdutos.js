import React from "react"

function ListProdutos(produtos) {
	return (
	<div>
    {produtos.map((produto, index) => {
    	return <h1>{produto.nome}</h1>
    })}
    </div> 
    )
}

export default ListProdutos