import { Item } from "semantic-ui-react"

import ItemForm from './ItemForm';
import ItemList from './ItemList';

const Items = ({ listId }) => (
  <>
    <ItemForm listId={listId} />
    <ItemList listId={listId} />
  </>
)

export default Items;