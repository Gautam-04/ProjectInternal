import React, { useState } from 'react';
import './Alerts.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { TbAlertSquareRounded } from "react-icons/tb";
import { IoWarningOutline } from "react-icons/io5";

function Alerts() {
  const [showModal, setShowModal] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertsList, setAlertsList] = useState([]);
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  // Open modal with specific alert type
  const handleShowModal = (type) => {
    setAlertType(type);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setState('');
    setMessage('');
    setTitle('');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString(); // Capture current date and time
    const newAlert = {
      type: alertType,
      state: state,
      title: title,
      message: message,
      timestamp: timestamp, // Add timestamp to the alert data
    };
    setAlertsList([...alertsList, newAlert]);
    handleCloseModal();
  };

  return (
    <>
      <div className="AlertsMain">
        <div className="LowLevelAlerts">
          <Card className="text-center lowLevel">
            <Card.Header className='lowLevelHeader'>
              <IoWarningOutline size={64}/><br />
              <h3>Low Level Warnings</h3>
            </Card.Header>
            <Card.Body>
              <Card.Title>Send a Warning</Card.Title>
              <Card.Text>
                Click the button below to send a low-level warning.
              </Card.Text>
              <Button variant="primary" onClick={() => handleShowModal('Warning')}>Send Warning</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="HighLevelAlerts">
          <Card className="text-center highLevel">
            <Card.Header>
              <TbAlertSquareRounded size={64}/><br />
              <h3>High Level Alerts</h3>
            </Card.Header>
            <Card.Body>
              <Card.Title>Send an Alert</Card.Title>
              <Card.Text>
                Click the button below to send a high-level alert.
              </Card.Text>
              <Button variant="primary" onClick={() => handleShowModal('Alert')}>Send Alert</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Modal for sending alerts */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Send {alertType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formState">
              <Form.Label>Select State</Form.Label>
              <Form.Control 
                as="select" 
                value={state} 
                onChange={(e) => setState(e.target.value)} 
                required
              >
                <option value="">Select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Karnataka">Karnataka</option>
                {/* Add more states as needed */}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ marginTop: '1rem' }}>
              Send {alertType}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Display submitted alerts below */}
      <div className="SubmittedAlerts">
        <h3>Submitted Alerts</h3>
        {alertsList.map((alert, index) => (
          <Card key={index} className={alert.type === 'Alert' ? 'highLevel' : 'lowLevel'}>
            <Card.Body>
              <Card.Title>{alert.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{alert.type} for {alert.state}</Card.Subtitle>
              <Card.Text>{alert.message}</Card.Text>
              <Card.Footer>
                <small className="text-muted">Sent on: {alert.timestamp}</small>
              </Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Alerts;
