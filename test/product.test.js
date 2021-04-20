// A quantidade vendida pode ser de 1 ou mais unidades
//Importar a classe e as funções
import Product from '../src/model/product'
import sell from '../src/service/sellProduct'

//Realizar o teste, lembrando que é recomendavél colocar uma mensagem descrevendo o teste
test('deve validar baixa de estoque de venda de uma unidade', () => {
    //Criei um produto e criei um novo produto, seguindo como os parâmetros a classe Product.
    let produto = new Product('Celular', 500.00, 900.00, 10);
    //Vendo o produto usando a função (lembrando que coloquei sell na importação), sendo que foi vendido 1 produto. 
    sell(produto, 1);
    //"Espera que" o estoque do produto "seja" 20 (coloquei um valor errado para realizar um teste)
    expect(produto.stock).toBe(20);
})