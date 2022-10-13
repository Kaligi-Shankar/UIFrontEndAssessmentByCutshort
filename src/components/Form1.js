import React from 'react'
import { Link } from 'react-router-dom';/*to link the next page*/
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const input = () => {
  return (
    <div id="form1">
      {/* heading */}
      <h3>Eden</h3>
      {/* step by step progress bar */}
      <div class="stepper-wrapper">
        <div class="stepper-item completed">
          <div class="step-counter">1</div>
        </div>
        <div class="stepper-item active">
          <div class="step-counter">2</div>
        </div>
        <div class="stepper-item">
          <div class="step-counter">3</div>
        </div>
        <div class="stepper-item">
          <div class="step-counter">4</div>
        </div>
      </div>

      {/* Headings and titles */}
      <div className="heading">
        <h1>Welcome! First thing first...</h1>
        <p>You can change them later.</p>
      </div>
      {/* form for Workspace */}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="name">Full Name</Form.Label><br />
          <input className="input" type="text" placeholder="Steve Jobs" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="name">Display Name</Form.Label><br />
          <input className="input" type="text" placeholder="Steve" />
        </Form.Group>

        <Link to="/form2" href='#'>
          <Button variant="primary" type="submit">
            Create Workspace
          </Button>
        </Link>
      </Form></div>
  )
}

export default input