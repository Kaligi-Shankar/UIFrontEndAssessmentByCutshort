import React from 'react'
import { Link } from 'react-router-dom';/*to link the next page*/
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const Form3 = () => {
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
        <div class="stepper-item completed">
          <div class="step-counter">3</div>
        </div>
        <div class="stepper-item active">
          <div class="step-counter">4</div>
        </div>
      </div>
      {/* Headings and titles */}
      <div className='heading'>
        <h1>How are you planning to use Eden?</h1>
        <p>We'll streamline your setup experience accordingly.</p>
      </div>
      {/* form for Workspace */}
      <div >
        <ButtonGroup >
          <Button className='selectbuttons' variant="outline-secondary"><h5><strong>For mySelf</strong></h5>Write better. think<br />
            more clearly. stay<br /> organized. </Button>{' '}
          <Button className='selectbuttons' variant="outline-secondary"><h5><strong>With my Team</strong></h5>
            Wikis, tasks, docs &<br />Projects, all in one<br /> place.</Button>{' '}
        </ButtonGroup>

      </div>

      <Link to='/FOrm4' href='#'>
        <Button variant="primary" type="submit">
          Create Workspace
        </Button>
      </Link>

    </div>
  )
}

export default Form3