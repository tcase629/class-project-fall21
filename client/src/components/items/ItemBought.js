import { useState, useEffect } from 'react'
import { ItemConsumer } from '../../providers/ItemProvider';
import { Checkbox } from 'semantic-ui-react';

const ItemBought = ({ name, desc, img, bought, updateItem, listId, id }) => {
  const [item, setItem] = useState({ name: '', desc: '', img: '', bought: false })

  useEffect( () => {
    setItem({ name, desc, img, bought })
  }, [])

  return (
    <>
      <Checkbox 
        label='Bought?' 
        name='bought'
        value={item.bought}
        onChange={() => setItem({...item, bought: !item.bought})}
        onClick={() => updateItem(listId, id, item)}
      />

    </>
  )
}

const ConnectedItemBought = (props) => (
  <ItemConsumer>
    { value => <ItemBought {...props} {...value} />}
  </ItemConsumer>
)

export default ConnectedItemBought;