// A quantidade vendida pode ser de 1 ou mais unidades

import Product from '../src/model/product' // Importando a classe Product pasta model
import sell from '../src/service/sellProduct' // Importando a função sellProduct da pasta service

test('deve validar baixa de estoque de venda de uma unidade', () => { //Callback da função
    let produto = new Product('Celular', 500.00, 900.00, 10); //Instância de um novo produto
    sell(produto, 1);
    expect(produto.stock).toBe(20); //"Espera que" o estoque do produto "seja" 20 (foi colocado um valor errado para realizar um teste)
})