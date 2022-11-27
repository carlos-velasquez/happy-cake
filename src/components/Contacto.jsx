import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Navbar() {
  return (
    <Form className='col-11 col-md-8 mx-auto text-center'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text.center'>Correo</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-center'>Descripcion</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Navbar;