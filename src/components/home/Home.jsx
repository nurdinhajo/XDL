import React from 'react'
import"./home.css"

function Home() {
  return (
    <div className="home">

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
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>


    </div>
  )
}

export default Home