/**
 * A quantidade vendida pode ser de 1 ou mais inidades
 *  Se estoque ficar negativo uma exceptions deve ser lançada
 *  O valor de venda não pode ser maior que o valor de compra
 * @param {*} product
 * @param {*} amount
 */ 

//Exportando a função sellProduct
export default function sellProduct(product, amount){ //A função recebe dois parâmetros: o produto a ser vendido e quantidade
    product.stock -= 1; //A cada venda, o produto sofre uma baixa no estoque
    return product;
}