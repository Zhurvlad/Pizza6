import React from "react";
import CartEmptySVG from '../assets/img/empty-cart.png'
import {Link} from "react-router-dom";

function CartEmpty() {
    return(
        <div className="cart cart--empty">
            <h2>Корзина пустая <i>😕</i></h2>
            <p>
                Вероятней всего, вы не заказывали ещё пиццу.<br/>
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={CartEmptySVG} alt="Empty cart"/>
            <Link to="/" class="button button--black">
                <span>Вернуться назад</span>
            </Link>
        </div>
    )
}


export default CartEmpty;