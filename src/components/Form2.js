import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';/*to link the next page*/

const Form2 = () => {
    return (
        <div id="form1">
            {/*Heading*/}
            <h3>Eden</h3>
            {/* step by step progress bar */}
            <div class="stepper-wrapper">
                <div class="stepper-item completed">
                    <div class="step-counter">1</div>
                </div>
                <div class="stepper-item completed">
                    <div class="step-counter">2</div>
                </div>
                <div class="stepper-item active">
                    <div class="step-counter">3</div>
                </div>
                <div class="stepper-item">
                    <div class="step-counter">4</div>
                </div>
            </div>
            {/* Headings and titles */}
            <h1>Let's set up a home for all your work</h1>
            <p>You can change them later.</p>
            {/* form for Workspace */}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="name">Workspace Name</Form.Label><br />
                    <input className="input" type="text" placeholder="Eden" />
                </Form.Group>

                <Form.Label className="name" htmlFor="basic-url">Workspace URL <span disabeled>(optional)</span></Form.Label>
                <InputGroup id="input2" className="mb-3" >

                    <InputGroup.Text>www.eden.com</InputGroup.Text>
                    <input className="input" placeholder='Example' />
                </InputGroup>
                {/*                 
                <InputGroup className="mb-3">
                    <InputGroup.Text  id="basic-addon3">
                        www.eden.com/
                    </InputGroup.Text>
                    <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder="Example" />
                </InputGroup> */}

                <Link to="/form3" href='#'>
                    <Button variant="primary" type="submit">
                        Create Workspace
                    </Button>
                </Link>

            </Form></div>
    )
}

export default Form2