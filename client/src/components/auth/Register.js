import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Header, Form, Segment } from 'semantic-ui-react'

const Register = ({ handleRegister, history }) => {
  const [user, setUser] = useState({ email: "", first_name: "", last_name: "", role: "reg", password: "", passwordConfirmation: ""})
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password === user.passwordConfirmation) {
      handleRegister(user, history)
    } else {
      alert('Password does not match!')
    }
  }

  return(
    <Segment basic>
      <Header as='h1' textAlign='center'>Register</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}

          placeholder="Email"
          required
        />
        <Form.Input
          name="first_name"
          value={user.first_name}
          onChange={(e) => setUser({ ...user, first_name: e.target.value })}

          placeholder="First Name"
          required
        />
        <Form.Input
          name="last_name"
          value={user.last_name}
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}

          placeholder="Last Name"
          required
        />
        <Form.Input
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          placeholder="Password"
          required
        />
        <Form.Input
          name="passwordConfirmation"
          value={user.passwordConfirmation}
          onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
          type="password"
          placeholder="Password Confirmation"
          required
        />
        <Segment textAlign='center' basic>
          <Button primary type="submit">Register</Button>
        </Segment>
      </Form>
    </Segment>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedRegister;