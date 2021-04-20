//Exportando a função sellProduct
export default function sellProduct(product, amount){ //A função recebe dois parâmetros: o produto a ser vendido e quantidade
    product.stock -= 1; //A cada venda, o produto sofre uma baixa no estoque
    return product;
}