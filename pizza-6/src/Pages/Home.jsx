import React, {useEffect} from "react";
import {Categories, Header, PizzaBlock, SortPopup} from "../Components";
import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas} from "../Redux/Action/pizzas";
import pizzas from "../Redux/Reducers/pizzas";
import LoadingBlock from "../Components/PizzaBlock/LoadingBlock";
import {setCategory, setSortBy} from "../Redux/Action/filters";
import {addPizzaToCart} from "../Redux/Action/cart";

const enableCategory = [
    'Мясные',
    'Вегетерианская',
    'Гриль',
    'Острые',
    'Закрытые',
]

const sortByObj = [
    {name: 'популярности', type: 'rating', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавиту', type: 'name', order: 'asc'}
]

function Home() {

    const pizzas = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoading)
    const {category, sortBy} = useSelector(({filter}) => filter)
    const cartCount = useSelector(({cart}) => cart.items)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPizzas({category, sortBy}))
    }, [category, sortBy])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortBy = React.useCallback((obj) => {
        dispatch(setSortBy(obj))
    }, [])

    const pizzaToCart = (pizzaObj) => {
        dispatch(addPizzaToCart(pizzaObj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onclickCategory={onSelectCategory}
                    activeCategory={category}
                    items={enableCategory}

                />
                <SortPopup
                    availableSortBy={sortByObj}
                    onSelectSortBy={onSelectSortBy}
                    sortBy={sortBy.type}

                />
            </div>
            <h2 className="content__title">Пицца</h2>
            <div className="content__items">
                {isLoaded ? pizzas.map((obj, id) => <PizzaBlock
                        pizzaToCart={pizzaToCart}
                        pizzaCount={cartCount[obj.id] && cartCount[obj.id].items.length}
                        {...obj}
                        key={obj + id}
                    />) :
                    Array(16).fill(0).map((_, id) => <LoadingBlock
                        key={_ + id}/>)}
            </div>
        </div>
    )
}

export default Home;


/*
const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
},[])

const onSelectSortBy = React.useCallback((obj) => {
    dispatch(setSortBy(obj))
},[])
*/
