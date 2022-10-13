import React from 'react';
import { Link } from 'react-router-dom';/*to link the next page*/
import Button from 'react-bootstrap/Button';

import { BsFillCheckCircleFill } from "react-icons/bs";/*importing icon*/

const FOrm4 = () => {
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
        <div class="stepper-item completed">
          <div class="step-counter">4</div>
        </div>
      </div>
      {/* Headings and titles */}
      <BsFillCheckCircleFill className='fillcircle' /><br />
      {/* form for Workspace */}
      <div className='heading'>
        <h1>Congratulations, Eren!</h1>
        <p>You have completed onboarding, you can start using the Eden!</p>
      </div>




      <Link to='/' href='#'>
        <Button variant="primary" type="submit">
          Launch Eden
        </Button>
      </Link>

    </div>
  )
}

export default FOrm4