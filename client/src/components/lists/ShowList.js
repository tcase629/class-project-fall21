import { Button, Modal, Header } from 'semantic-ui-react';
import { useState } from 'react';
import ListForm from './ListForm';
import Moment from 'react-moment';
import { ListConsumer } from '../../providers/ListProvider';
import Items from '../items/Items';

const ShowList = ({ location, deleteList }) => {
  const [open, setOpen] = useState(false)

  const { id, title, desc, created_at} = location.state
  return (
    <>  
      <h1>{title}</h1>
      <p>{desc}</p>
      <p>
        <Moment format="MM/DD/YY">
          {created_at}
        </Moment>
      </p>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button color="yellow">Edit</Button>}
      >
        <Modal.Header>Editing {title} List </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <ListForm 
              id={id}
              title={title}
              desc={desc}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='yellow' onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
      <Button color="red" onClick={() => deleteList(id)}>
        Delete
      </Button>
      <Items listId={id} />
    </>
  )
}

const ConnectedShowList = (props) => (
  <ListConsumer>
    { value => <ShowList {...props} {...value} />}
  </ListConsumer>
)

export default ConnectedShowList;