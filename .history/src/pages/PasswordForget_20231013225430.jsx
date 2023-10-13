import React from 'react'
import '../styles/notFound.css'
import { Link } from 'react-router-dom'
export default function PasswordForget() {
    return (
      <>
  <header class="top-header  ">
</header>

<div className=''>
<div>
  <div class="starsec"></div>
  <div class="starthird"></div>
  <div class="starfourth"></div>
  <div class="starfifth"></div>
</div>



<div class="lamp__wrap ">
  <div class="lamp">
    <div class="cable"></div>
    <div class="cover"></div>
    <div class="in-cover">
      <div class="bulb"></div>
    </div>
    <div class="light"></div>
  </div>
</div>

<section class="error">

  <div class="error__content">
    <div class="error__message message">
      <h1 className="h1 p-20 self-center text-center">Forgot Password Assistance</h1>
      <p class="message__text" >If you've forgotten your password, consider reaching out to your teacher or Munindra Sir for help. If they're unavailable, contact our support team at <a href='mailto:eufalkon@gmail.com' className="link text-blue-500">eufalkon@gmail.com</a> for assistance.<br/> Your security matters to us.</p>
    </div>
    <div class="error__nav e-nav ">
      <a href='mailto:eufalkon@gmail.com'  class=" btn-primary text-white rounded-full e-nav__link"></a>
    </div>
  </div>


</section>
</div>
</>
    )
}
