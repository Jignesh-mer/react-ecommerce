import React from 'react'

const Footer = (props) => {
  const styles = {
    color: "#fff",
    background: "#2d3246",
    padding:"30px 20px"
  };

  return(
    <>
      <footer className="section footer-classic context-dark bg-image" style={styles}>
         <div className="container">
            <div className="row row-30">
               <div className="col-md-4 col-xl-5">
                  <div className="pr-xl-4">
                     <p>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>
                     <p className="rights"><span>©  </span><span className="copyright-year">2018</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>
                  </div>
               </div>
               <div className="col-md-4">
                  <h5>Contacts</h5>
                  <dl className="contact-list">
                     <dt>Address:</dt>
                     <dd>798 South Park Avenue, Jaipur, Raj</dd>
                  </dl>
                  <dl className="contact-list">
                     <dt>email:</dt>
                     <dd><a href="mailto:#">dkstudioin@gmail.com</a></dd>
                  </dl>
                  <dl className="contact-list">
                     <dt>phones:</dt>
                     <dd>
                        9687570525
                     </dd>
                  </dl>
               </div>
               <div className="col-md-4 col-xl-3">
                  <h5>Links</h5>
                  <ul className="nav-list">
                     <li><a href="#">Home</a></li>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Shop</a></li>
                     <li><a href="#">Contact</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
    </>
  )
}
export default Footer