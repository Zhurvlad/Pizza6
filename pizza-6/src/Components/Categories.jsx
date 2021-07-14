import React from "react";


function Categories({items, onclickCategory, activeCategory }) {
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' :''} onClick={() =>onclickCategory(null)}>Все</li>
                {items &&
                items.map((name, index) => <li
                    onClick={() =>onclickCategory(index)}
                    className={activeCategory === index ? 'active': ''}
                key={`${name}_${index}`}
                >{name}</li>)}

            </ul>
        </div>
    )
}

export default React.memo(Categories);