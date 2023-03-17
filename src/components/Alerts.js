import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AdditionalContentExample() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant="info" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Hey, movie fans</Alert.Heading>
        <p>
          Enjoy a complete selection of your favorite movies along with some fan favorite details!
        </p>
        <hr />
      </Alert>
    );
  }
  return <Button variant="outline-primary" onClick={() => setShow(true)}>Welcome! Show Alert</Button>;
}

export default AdditionalContentExample;
