import React from "react";
import ClassNames from 'classname'

function Button({children,className, outline, cart, circle, onClick  }) {
    return (
        <button onClick={onClick} className={ClassNames('button', className, {
            'button--outline': outline,
            'button--cart': cart,
            'button--circle' : circle
            }
        )}>
            {children}
        </button>
    )
}

export default Button;