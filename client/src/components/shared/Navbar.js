import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Menu } from 'semantic-ui-react';

const Navbar = ({ user, handleLogout, history, location }) => {

  const rightNavItems = () => {
    if (user) {
      // links if the user is logged in
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={() => handleLogout(history)}
          />
        </Menu.Menu>
      )
    } else {
      // links if there is no user logged in 
      return(
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  return(
    <div>
      <Menu pointing secondary>
        <Link to='/'>
          <Menu.Item
            name='home'
            id='home'
            active={location.pathname === '/'}
          />
        </Link>
          { rightNavItems() }
      </Menu>
    </div>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <Navbar {...value}  {...props}/>}
  </AuthConsumer>
)

export default withRouter(ConnectedNavbar)