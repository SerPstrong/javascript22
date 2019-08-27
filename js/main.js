/**
 *
 * @type {*[]}
 */
const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

/**
 *
 * @param item
 * @param img
 * @returns {string}
 */
let renderProduct;
renderProduct = (item, img = "https://placehold.it/200x150") => `<div class="product-item">
            <img class="product-item_img" src="${img}" alt="Some img">
            <h3>${item.title}</h3>
            <p>${item.price}</p>
            <button class="by-btn">Добавить</button>
          </div>`;

/**
 *
 * @param list
 * @returns {string}
 */
const renderProducts = list => document.querySelector('.products')
    .innerHTML = list.map(item => renderProduct(item)).join('');

renderProducts(products);

/**
 * Basket
 */
class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150},
            { title: 'Socks', price: 50},
            { title: 'Shoes', price: 550},
            { title: 'Jacket', price: 350},
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

const list = new GoodList();
list.fetchGoods();
list.render();