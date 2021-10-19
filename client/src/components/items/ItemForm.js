import { useState, useEffect } from 'react';
import { ItemConsumer } from '../../providers/ItemProvider';

const ItemForm = ({ addItem, listId, updateItem, name, desc, id, img }) => {
  const [item, setItem] = useState({ name: '', desc: '', img: '' })

  useEffect( () => {
    if (id) {
      setItem({ name, desc, img })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateItem(listId, id, item)
    } else {
      addItem(listId, item)
    }
    setItem({ name: '', desc: '', img: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          value={item.name}
          onChange={(e) => setItem({...item, name: e.target.value })}
          required
          placeholder="Item Name"
        />
        <input
          name='desc'
          value={item.desc}
          onChange={(e) => setItem({...item, desc: e.target.value })}
          required
          placeholder="Item Description"
        />
        <input
          name='img'
          value={item.img}
          onChange={(e) => setItem({...item, img: e.target.value })}
          required
          placeholder="Item Image"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

const ConnectedItemForm = (props) => (
  <ItemConsumer>
    { value => <ItemForm {...props} {...value} /> }
  </ItemConsumer>
)

export default ConnectedItemForm;