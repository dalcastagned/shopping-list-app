import { createContext, useEffect, useState } from "react";

import toast from "react-hot-toast";

import database from '../config/firebase'

export const ItemContext = createContext([]);

export const ItemProvider = ({ children }) => {

    const [totalCart, setTotalCart] = useState(0)
    const [items, setItems] = useState([])
    const [userId, setUserId] = useState(null)

    useEffect(() => {
        if (userId !== null) {
            database.collection(userId).onSnapshot((query) => {
                const list = []
                query.forEach((doc) => {
                    list.push({ ...doc.data(), id: doc.id })
                })
                setItems(list)
            })
        }
    }, [userId])

    useEffect(() => {
        let total = 0
        items
            .filter(item => item.inCart === true)
            .map(item => (
                total += ((item.amount > 0 ? item.amount : 0) * (item.value > 0 ? item.value : 0))
            ))
        setTotalCart(total)
    }, [items])

    const handleUserId = (userId) => {
        setUserId(userId)
    }

    const handleAddItem = (item, amount) => {
        database.collection(userId).add({
            amount: amount,
            item: item,
            value: '',
            inCart: false
        })
        toast.success('Item Adicionado')
    }

    const handleRemoveItem = (id) => {
        database.collection(userId).doc(id).delete()
        toast.success('Item Removido')
    }

    const handleUpdateItem = (id, amount, item, value) => {

        database.collection(userId).doc(id).update({
            mount: amount,
            item: item,
            value: value
        })
    }

    const handleAddCart = (id, amount, item, value) => {

        handleUpdateItem(id, amount, item, value)

        database.collection(userId).doc(id).update({
            inCart: true
        })
        toast.success('Adicionado ao Carrinho')
    }

    const handleRemoveCart = (id) => {

        database.collection(userId).doc(id).update({
            inCart: false
        })
        toast.success('Removido do Carrinho')
    }

    const handleClearAll = () => {
        items.map((item) => (
            database.collection(userId).doc(item.id).delete()
        ))
        toast.success('Lista removida')
    }

    const handleEmptyCart = () => {
        items.map((item) => (
            database.collection(userId).doc(item.id).update({
                inCart: false
            })
        ))
        toast.success('Carrinho esvaziado')
    }

    return (
        <ItemContext.Provider
            value={{
                addItem: handleAddItem,
                removeItem: handleRemoveItem,
                addCart: handleAddCart,
                removeCart: handleRemoveCart,
                updateItem: handleUpdateItem,
                removeAll: handleClearAll,
                emptyCart: handleEmptyCart,
                setUserId: handleUserId,
                userId: userId,
                items: items,
                totalCart: totalCart,
            }}
        >
            {children}
        </ItemContext.Provider>
    )
}

