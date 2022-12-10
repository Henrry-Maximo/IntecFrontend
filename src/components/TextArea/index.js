import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../../StyleComponents/textArea.css'

function FormFloatingTextareaExample() {
  return (
    <>
      <FloatingLabel controlId="floatingTextarea2" >
        <Form.Control
          as="textarea"
          style={{ height: '15rem' }}
        />
      </FloatingLabel>
    </>
  );
}

export default FormFloatingTextareaExample;