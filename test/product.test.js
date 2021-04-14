// A quantidade vendida pode ser de 1 ou mais unidades

import { TestScheduler } from '@jest/core'
import Product from '../src/model/product'
import sell from '../src/service/sellProduct'

test('deve validar baixa de estoque de venda de uma unidade', () => {
    let produto = new Product('Celular', 500.00, 900.00, 10);
    sell(produto, 1);
    expect(produto.stock).toBe(20);
})