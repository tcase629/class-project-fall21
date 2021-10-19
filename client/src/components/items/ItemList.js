import { ItemConsumer } from '../../providers/ItemProvider';
import { useEffect } from 'react';
import { Grid, Card, Image, Button, Icon } from 'semantic-ui-react';
import ItemBought from './ItemBought';

const ItemList = ({ listId, getItems, items, deleteItem }) => {

  useEffect(() => {
    getItems(listId)
  }, [])

  return (
    <>
      <h1>Items</h1>
      <Grid columns={3} divided stackable>
        { items.map(i => 
          <Grid.Column>
            <Card>
              <Image src={i.img} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{i.name}</Card.Header>
                <Card.Description>
                  {i.desc}
                  <br />
                  <ItemBought {...i} listId={listId} />
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Grid columns={3}>
                  <Grid.Column>
                    <a>
                      Notes
                    </a>
                  </Grid.Column>
                  <Grid.Column>

                  </Grid.Column>
                  <Grid.Column>
                    <Button icon color='red' onClick={() => deleteItem(listId, i.id)}>
                      <Icon name='trash alternate' />
                    </Button>
                  </Grid.Column>
                </Grid>
              </Card.Content>
            </Card>
          </Grid.Column> 
        )}
      </Grid>
    </>
  )
}

const ConnectedItemList = (props) => (
  <ItemConsumer>
    { value => <ItemList {...props} {...value} /> }
  </ItemConsumer>
)

export default ConnectedItemList;