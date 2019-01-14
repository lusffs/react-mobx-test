class CartItem {
    name: string
    id: string
    price: number

    constructor(name: string, id: string, price: number = 10) {
        this.name = name;
        this.id = id;
        this.price = price;
    }
}
export default CartItem