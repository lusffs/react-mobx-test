import { observable, action, computed } from "mobx"

interface CartItem {
    name: string,
    id: string,
    price: number
}

class AppStateClass {
    @observable
    numberOfClicks: number = 0

    @observable
    cartItems: CartItem[] = []

    @computed
    get numberOfCartItems(){
        let total = 0;
        for (let i = 0; i < this.cartItems.length; i++) {
            const element = this.cartItems[i];
            total += element.price;
        }
        return total;
    } 

    @action
    increaseClickCount() {
        this.numberOfClicks++
    }

    @action
    addToCart(cartItem: CartItem){
        this.cartItems.push(cartItem)
    }
}

export const appState = new AppStateClass()