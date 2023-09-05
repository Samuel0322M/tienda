import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider =({children}) => {
    const [count, setCount] = useState(0)
    const [IsProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            IsProductDetailOpen,
            productToShow,
            setProductToShow,
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}