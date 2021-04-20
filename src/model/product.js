export default class Product{ //Exportando a classe Product
    constructor(descrition, buyPrice, sellPrice, stock){ //Criando os construtores/atributos da classe
        //Deixando os atributos visíveis fora do escopo da classe
        this.descrition = descrition; //Descrição do produto
        this.buyPrice = buyPrice; //Preço de compra do produto
        this.sellPrice = sellPrice; //Preço de venda do produto
        this.stock = stock; //Quantidade em estoque do produto
    }
}