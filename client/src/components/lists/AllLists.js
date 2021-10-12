import { ListConsumer } from '../../providers/ListProvider';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const AllList = ({ lists, grabLists }) => {

  useEffect( () => {
    grabLists()
  }, [])

  return(
    <>
      <List divided relaxed>
        {lists.map( l => 
          <Link to={{
            pathname: `/lists/${l.id}`,
            state: {
              ...l
            }
          }}>
            <List.Item>
              <List.Content>
                <List.Header>{l.title}</List.Header>
              </List.Content>
            </List.Item>
          </Link>
        )}
      </List>
    </>
  )
}

const ConnectedAllList = (props) => (
  <ListConsumer>
    { value => <AllList {...value} {...props}/>}
  </ListConsumer>
)

export default ConnectedAllList;