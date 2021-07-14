import produce from "immer";
import {Constance} from "../Action/cart";

const initialState = {
    items: {},
    totalCount: 0,
    totalPrice: 0,
}

const getTotalPrice = arr => arr.reduce((sum,obj) => obj.price + sum, 0)


const cart = (state = initialState, action) => {
    switch (action.type) {
        case Constance.ADD_PIZZA_TO_CART: {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                },



            }

            const items = Object.values(newItems).map(obj => obj.items)
            const allPizzas = [].concat.apply([], items)
            const price = getTotalPrice(allPizzas)
            const count = allPizzas.length


            return {
                ...state,
                items: newItems,
                totalCount: count,
                totalPrice: price

            }

        }
        case Constance.PLUS_PIZZA: {

            const newItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ]
            const items = Object.values(newItems).map(obj => obj.items)
            const allPizzas = [].concat.apply([], items)
            const price = getTotalPrice(allPizzas)
            const count = allPizzas.length

            return  {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItems,
                        totalPrice: getTotalPrice(newItems)
                    }

                },
                totalCount: count,
                totalPrice: price
            }


        }

        case Constance.CLEAR_CART: {
            return  {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0
            }

        }
        case Constance.MINUS_PIZZA: {
            const currentItems = state.items[action.payload].items
            const newObjItems = currentItems.length >1 ? currentItems.slice(1) : currentItems
            const newItems = {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newObjItems,
                        totalPrice: getTotalPrice(newObjItems)
                    }
                },
            }

            const items = Object.values(newItems).map(obj => obj.items)
            const allPizzas = [].concat.apply([], items)
            const price = getTotalPrice(allPizzas)
            const count = allPizzas.length
            return {
                ...state,
                items: newItems,
                totalPrice: price,
                totalCount: count

            }

        }

        case Constance.REMOVE_CART_ITEM: {
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        }

    }
    return state

}


export default cart;


/*
const cart = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case Constance.ADD_PIZZA_TO_CART:
                if(!draft.items[action.payload.id]) {
                    draft.items[action.payload.id] = []
                }

                draft.items[action.payload.id].push([action.payload])
                break;

            default:
        }


        const result = [].concat.apply([], Object.values(draft.items))
        draft.totalPrice =result.reduce((total, obj) => obj.price + total, 0);
        draft.totalCount = result.length
    })

    totalCount : state.totalCount + 1,
                totalPrice : state.totalPrice + action.payload.price

}*/
