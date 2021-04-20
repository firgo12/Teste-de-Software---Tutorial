/**
 * A quantidade vendida pode ser de 1 ou mais inidades
 *  Se estoque ficar negativo uma exceptions deve ser lançada
 *  O valor de venda não pode ser maior que o valor de compra
 * @param {*} product
 * @param {*} amount
 */ 

// Vamos criar uma função chamada sellProduct que irá reber o produto e a quantia desse produto

export default function sellProduct(product, amount){
    //Vender um produto, assim diminuindo no estoque, nesse caso 1. Depois retornar o "product"
    product.stock -= 1;
    return product;
}