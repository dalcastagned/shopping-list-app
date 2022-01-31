import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';

export const ItemContext = createContext([]);

export const ItemProvider = ({ children }) => {

    const [totalCart, setTotalCart] = useState(0)
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem("item")) != null
            ? JSON.parse(localStorage.getItem("item"))
            : []
    )

    useEffect(() => {
        let total = 0
        items
            .filter(item => item.inCart === true)
            .map(item => (
                total += (item.amount * item.value)
            ))
        setTotalCart(total)
    }, [items])

    const handleAddItem = (item, amount) => {
        const newItem = ({
            id: uuidv4(),
            amount: amount,
            item: item,
            value: '',
            inCart: false
        })

        setItems([newItem, ...items ])
        localStorage.setItem("item", JSON.stringify([newItem, ...items ]));
        toast.success('Item Adicionado')
    }

    const handleRemoveItem = (id) => {
        const itemFiltered = items.filter(item => item.id !== id)

        setItems(itemFiltered)
        localStorage.setItem("item", JSON.stringify(itemFiltered));
        toast.success('Item Removido')
    }

    const handleUpdateItem = (id, amount, item, value) => {

        const index = items.findIndex(item => item.id === id)
        let tempItem = [...items]
        let tempElement = { ...tempItem[index] }

        tempElement.amount = amount
        tempElement.item = item
        tempElement.value = value
        tempItem[index] = tempElement

        setItems(tempItem)
        localStorage.setItem("item", JSON.stringify(tempItem));
    }

    const handleAddCart = (id, amount, item, value) => {

        handleUpdateItem(id, amount, item, value)

        const newItems = JSON.parse(localStorage.getItem("item"))

        const index = newItems.findIndex(item => item.id === id)
        let tempItem = [...newItems]
        let tempElement = { ...tempItem[index] }

        tempElement.inCart = true
        tempItem[index] = tempElement

        setItems(tempItem)
        localStorage.setItem("item", JSON.stringify(tempItem));
        toast.success('Adicionado ao Carrinho')
    }

    const handleRemoveCart = (id) => {
        const index = items.findIndex(item => item.id === id)
        let tempItem = [...items]
        let tempElement = { ...tempItem[index] }

        tempElement.inCart = false
        tempItem[index] = tempElement

        setItems(tempItem)
        localStorage.setItem("item", JSON.stringify(tempItem));
        toast.success('Removido do Carrinho')
    }

    return (
        <ItemContext.Provider
            value={{
                addItem: handleAddItem,
                removeItem: handleRemoveItem,
                addCart: handleAddCart,
                removeCart: handleRemoveCart,
                updateItem: handleUpdateItem,
                items: items,
                totalCart: totalCart
            }}
        >
            {children}
        </ItemContext.Provider>
    )
}

