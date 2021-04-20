// Vamos criar uma classe Produto (Product). Vamos colocar um construtor (método especial para criar e inicializar um objeto criado a partir de uma classe), o construtor
// Terá: descrição, o valor de compra, o valor de venda e estoque.
// Agora vou dizer que este descrição recebe: descrição, o valor de compra, o valor de venda e o estoque.
// Vamos colocar o export default (por padrão exportar), pois vamos precisar dessa classe no test.

export default class Product{
    constructor(descrition, buyPrice, sellPrice, stock){
        this.descrition = descrition;
        this.buyPrice = buyPrice;
        this.sellPrice = sellPrice;
        this.stock = stock;
    }
}