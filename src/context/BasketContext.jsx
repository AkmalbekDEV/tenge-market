import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext()

const BasketProvider = ({ children }) => {
    const storage = JSON.parse(localStorage.getItem('products'))
    const [basket, setBasket] = useState(storage || [])

    const getBasketData = (data) => {
        const isExist = basket.some((product) => product.id === data.id)
        const isIndex = basket.some((product) => product.img === data.img)
        if (isExist === false && isIndex === false) {
            setBasket([...basket, data])
        }
        console.log(data);
    };

    const onDelete = (data) => {
        setBasket(basket.filter(card => card.id !== data))
    }

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(basket))
    }, [basket])

    return (
        <BasketContext.Provider value={{ getBasketData, basket, onDelete }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider