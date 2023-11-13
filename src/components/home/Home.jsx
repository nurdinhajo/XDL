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

          <div className="xdlClientDesc">
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

        <div className="xdlBenefit">
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

      <div className="grow">
        <div className="xdlBusiness">
            <h1>Grow your business with XOBO</h1>

          <div className="xdlBenefits-1">
            <div className="benefit-icon">
              <img src={process.env.PUBLIC_URL + '/ICONS/Fast.png'} alt="XOBO RELIABLE" />
            </div>
            <div className="benefit-content">
              <h3>Fast & flexible delivery</h3>
              <p>On-demand, same-day or advance orders. We're ready when you are and promise a fast service.</p>
            </div>
          </div>

          <div className="xdlBenefits-2">
            <div className="benefit-icon">
              <img src={process.env.PUBLIC_URL + '/ICONS/Reduce.png'} alt="XOBO SAVING" />
            </div>
            <div className="benefit-content">
              <h3>Reduce operational costs</h3>
              <p>No need to manage your own delivery fleet. Outsource and simply pay for the deliveries you need.</p>
            </div>
          </div>

          <div className="xdlBenefits-3">
            <div className="benefit-icon">
              <img id='track' src={process.env.PUBLIC_URL + '/ICONS/Track.png'} alt="XOBO TRACKING" />
            </div>
            <div className="benefit-content">
              <h3>Real-time tracking</h3>
              <p>In-app tracking allows you and the receiver to track your order in real time during the delivery.</p>
            </div>
          </div>

          <div className="xdlBenefits-4">
            <div className="benefit-icon">
              <img  src={process.env.PUBLIC_URL + '/ICONS/Vehicles.png'} alt="XOBO VEHICLE" />
            </div>
            <div className="benefit-content">
              <h3>Vast array of vehicles</h3>
              <p>Different vehicles to suit any kind of business including trucks, vans, motorcycles and runners for deliveries of anything of any size.</p>
            </div>
          </div>       
      </div>

      <div className="xdlDelivered">
        <img  src={process.env.PUBLIC_URL + '/XDL-DELIVERED.png'} alt="XOBO Client" />
      </div>

    </div>
  
  </div>
  )}
export default Home