import Form from 'react-bootstrap/Form';

function HeaderSwitch() {
  return (
    <Form>
      <Form.Check 
        className='font-mono m-0'
        type="switch"
        id="custom-switch"
        label="Dark Mode"
      />
    </Form>
  );
}

export default HeaderSwitch;