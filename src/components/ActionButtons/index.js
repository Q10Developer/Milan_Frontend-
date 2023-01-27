import React from 'react'
import { Button } from 'react-bootstrap';

const ActionButtons = () => {
    return (
      <>
        <div>
          <Button variant="primary" size="sm">
            <i className="fa-solid fa-user-pen"></i>
          </Button>{" "}
          <Button  variant="danger" size="sm">
            <i className="fa-sharp fa-solid fa-trash"></i>
          </Button>
        </div>
      </>
    );
}

export default ActionButtons;