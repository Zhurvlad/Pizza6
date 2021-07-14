import axios from "axios";


export const fetchPizzas = ({category, sortBy}) => (dispatch) => {
    dispatch(setLoading(false))
    axios.get(`/pizzas?${category != null ? `category=${category}`: '' }&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({data})=> {
        dispatch(setPizzas(data))
    })
}



export const setPizzas = (pizzaObj) => ({
    type: 'SET_PIZZAS',
    payload: pizzaObj
})

export const setLoading = payload => ({
    type: 'SET_LOADING',
    payload
})