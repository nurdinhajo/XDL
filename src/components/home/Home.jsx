import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import"./home.css"
function Home() {
  return (
    <div className="Home">

      <div className="xdlLandingPage">
        <div className="xdlIntro">
          <b><h1 className='fast'>
            Fast <span id='middledot'>·</span> Reliable
          </h1></b>

          <h3 className='desc'>
            On-demand delivery platform
          </h3>

          <h3 className="description">
            XOBO Delivery LTD offers immediate pick and delivery services. Customers can specify delivery preferences, track their packages in real-time, and benefit from flexible options.
          </h3>


          <a href="http://18.130.30.102/xobo" target='blank'>
            <button className='orderBtn'>
              Deliver Now
            </button>
          </a>
        </div>

        <div className="xdlVideo">
        <iframe        
            src="https://www.youtube.com/embed/Oe0Tme-yRBU?si=1Y6TpTYw71Lano8J"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="xdlClient">
        <div className="xdlClientImg">
          <img src={process.env.PUBLIC_URL + '/XDL-CLIENT.png'} alt="XOBO Client" />

          {/* <div className="xdlbenefit">
            <h2>
              Seamlessly streamline your orders.
            </h2>

            <h3>
              Wave goodbye to long customer and driver chats. Free more time to grow your business.
            </h3>
              
            <Link to="/services">
              <p>
                Learn more <FaArrowRight/>
              </p>
            </Link>    
          </div> */}
        </div>

        <div className="xdlBenefit1">
            <h2>
            Seamlessly streamline your orders.
            </h2>

            <h3>
            Wave goodbye to long customer and driver chats. Free more time to grow your business.
            </h3>
            
            <Link to="/services">
              <p>
                Learn more 
                <span className="rightArrow">
                  <FaArrowRight/>
                </span>
              </p>
            </Link>           
        </div>

      </div>
    </div>
  )
}

export default Home