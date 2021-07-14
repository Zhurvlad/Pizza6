import produce from "immer";

const initialState = {
    items: [],
    isLoading: false
}


const pizzas = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case 'SET_PIZZAS':
                    draft.items = action.payload
                    draft.isLoading = true
                break;
            case 'SET_LOADING':
                    draft.isLoading = action.payload
                break
            default:
        }

    })

}

export default pizzas;