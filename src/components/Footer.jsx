import { faFacebook, faInstagram, faWhatsapp, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin' 
import React from 'react'
import {faVideo} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='py-5 px-3'>
      <div className="container-fluid">
        <div className="row">
          <div className='col-md-4'>
          <h4 className='text-warning'><FontAwesomeIcon icon={faVideo} beat  className='me-3'/>Media Player</h4> 
          <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illo dolorum at inventore excepturi minima et molestias error autem doloremque? Porro, nesciunt sapiente sequi repellat voluptatem quasi qui non inventore!</p>
          </div>
          <div className='col-md-2 d-flex justify-content-center'>
            <div>
              <h4>Links</h4>
              <Link to={'/'}> <p className='mt-3'>Landing page</p></Link>
              <Link to={'/home'}> <p>Home page</p></Link>
              <Link to={'/watchhistory'}> <p>Watch History</p></Link>
              
            </div>
          </div>
          <div className='col-md-2 d-flex justify-content-center'>
           <div> 
            <h4>Guides</h4>
            <p className='mt-3'>React</p>
            <p>React Bootstrap</p>
            <p> Bootswatch</p>
            </div>
          </div>
          <div className='col-md-4 px-5'>
            <h4>Contact Us</h4>
            <div className='d-flex mt-3'>
              <input type="text" placeholder='Email Id' className='form-control'/>
              <button className='btn btn-warning ms-3'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-between mt-3'>
            <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
            <FontAwesomeIcon icon={faTwitter}  className='fa-2x'/>
            <FontAwesomeIcon icon={faFacebook}  className='fa-2x' />
            <FontAwesomeIcon icon={faWhatsapp} className='fa-2x' />
            <FontAwesomeIcon icon={faLinkedin} className='fa-2x' />
      
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer