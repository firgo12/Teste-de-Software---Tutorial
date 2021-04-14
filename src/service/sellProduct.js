/**
 * A quantidade vendida pode ser de 1 ou mais inidades
 *  Se estoque ficar negativo uma exceptions deve ser lançada
 *  O valor de venda não pode ser maior que o valor de compra
 * @param {*} product
 * @param {*} amount
 */ 

export default function sellProduct(product, amount){
    product.stock -= 1;
    return product;
}