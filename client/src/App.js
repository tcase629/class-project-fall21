import { Route, Switch } from 'react-router-dom';
import FetchUser from './components/auth/FetchUser';
import Navbar from './components/shared/Navbar';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Lists from './components/lists/Lists';
import ShowList from './components/lists/ShowList';
import Profile from './components/auth/Profile';
import { Container } from 'semantic-ui-react';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/lists" component={Lists} />
          <ProtectedRoute exact path="/lists/:id" component={ShowList} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <Route component={Nomatch} /> 
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;