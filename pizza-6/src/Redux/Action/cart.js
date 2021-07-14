export const Constance = {
    ADD_PIZZA_TO_CART: 'CART@ADD_PIZZA_TO_CART',
    CLEAR_CART:'CART@CLEAR_CART',
    REMOVE_CART_ITEM: 'CART@REMOVE_CART_ITEM',
    PLUS_PIZZA: 'CART@PLUS_PIZZA',
    MINUS_PIZZA: 'CART@MINUS_PIZZA'

}

export const addPizzaToCart = (pizzaObj) => ({
    type: Constance.ADD_PIZZA_TO_CART,
    payload: pizzaObj
})

export const clearCart = () => ({
    type: Constance.CLEAR_CART
})


export const removeCartItem = (pizzaId) => ({
    type: Constance.REMOVE_CART_ITEM,
    payload: pizzaId
})
export const plusPizza = (pizzaId) => ({
    type: Constance.PLUS_PIZZA,
    payload: pizzaId
})
export const minusPizza = (pizzaId) => ({
    type: Constance.MINUS_PIZZA,
    payload: pizzaId
})
