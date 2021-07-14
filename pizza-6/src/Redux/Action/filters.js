export const Constance = {
    SET_CATEGORY: 'FILTER@SET_CATEGORY',
    SET_SORT_BY: 'FILTER@SET_SORT_BY'
}




export const setCategory = (index) => ({
    type: Constance.SET_CATEGORY,
    payload: index
})


export const setSortBy = ({type, order}) => ({
    type : Constance.SET_SORT_BY,
    payload: {type, order},
})