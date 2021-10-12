import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ListContext = React.createContext();
export const ListConsumer = ListContext.Consumer;

const ListProvider = ({ children }) => {
  const [lists, setLists] = useState([])

  // useEffect(() => {
  //   axios.get('/api/lists')
  //     .then( res => setLists(res.data) )
  //     .catch( err => console.log(err))
  // }, [])
  const grabLists = () => {
    axios.get('/api/lists')
      .then( res => setLists(res.data) )
      .catch( err => console.log(err))
  }

  const addList = (list) => {
    axios.post('/api/lists', { list })
      .then( res => {
        setLists([...lists, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateList = (id, list) => {
    axios.put(`/api/lists/${id}`, { list })
      .then(res => {
        const updatedLists = lists.map( l => {
          if (l.id == id) {
            return res.data 
          }
          return l
        })
        setLists(updatedLists)
      })
      .catch( err => console.log(err))
  }

  const deleteList = (id) => {
    axios.delete(`api/lists/${id}`)
      .then(res => {
        setLists(lists.filter( l => l.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <ListContext.Provider value={{
      lists,
      grabLists: grabLists,
      addList: addList,
      updateList: updateList,
      deleteList: deleteList,
    }}>
      { children}
    </ListContext.Provider>
  )

}

export default ListProvider;