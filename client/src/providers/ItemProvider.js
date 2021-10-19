import React, { useState } from 'react';
import axios from 'axios';

export const ItemContext = React.createContext()
export const ItemConsumer = ItemContext.Consumer

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([])

  const getItems = (listId) => {
    axios.get(`/api/lists/${listId}/items`)
      .then( res => setItems(res.data))
      .catch( err => console.log(err))
  }

  const addItem = (listId, item) => {
    axios.post(`/api/lists/${listId}/items`, { item })
      .then( res => setItems([...items, res.data]))
      .catch( err => console.log(err))
  }

  const updateItem = (listId, id, item) => {
    axios.put(`/api/lists/${listId}/items/${id}`, { item })
      .then(res => {
        const updatedItems = items.map( i => {
          if (i.id == id){
            return res.data
          }
          return i
        })
        setItems(updatedItems)
      })
      .catch( err => console.log(err))
  }

  const deleteItem = (listId, id) => {
    axios.delete(`/api/lists/${listId}/items/${id}`)
      .then( res => {
        setItems(items.filter(i => i.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <ItemContext.Provider value={{
      items,
      getItems: getItems,
      addItem: addItem,
      updateItem: updateItem,
      deleteItem: deleteItem,
    }}>
      { children }
    </ItemContext.Provider>
  )
}

export default ItemProvider;