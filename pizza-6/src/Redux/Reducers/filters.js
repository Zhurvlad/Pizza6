import produce from "immer"
import {Constance} from "../Action/filters";


const initialState = {
    category: null,
    sortBy: {
        type: 'rating',
        order: 'desc'
    }
}


/*
const filter = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
    }
    return state
}
*/


const filter = (state = initialState, action) => {
   return  produce(state,draft => {
        switch (action.type) {
            case Constance.SET_CATEGORY:
                draft.category = action.payload;
                break;
            case Constance.SET_SORT_BY:
                draft.sortBy = action.payload;
                break;
            default:
        }
    })
}

export default filter;