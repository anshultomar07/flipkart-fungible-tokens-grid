import "./intro.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { FaCoins } from "react-icons/fa";
import { BiSolidCoupon } from "react-icons/bi";
import React from "react";
import img from '../../assets/logo.png'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      {/* <h2>Send FKS</h2>
      <h5>across the world</h5> */}
      {/* <h4>across the world</h4> */}
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaCoins className="about__icon" />
              <h5>Flipkart's Own Fungible Tokens</h5>
              <small>Flipkart Loyalty Tokens (FLT)</small>
            </article>
            <article className="about__card">
              <BiSolidCoupon className="about__icon" />
              <h5>Redeem coupons with your FLTs.</h5>
              <small>Secure and Reliable</small>
            </article>
          </div>
          <p>
          With Flipkart's Loyalty Tokens, customers are empowered to earn rewards with every purchase. These Supercoins can be easily exchanged, transferred, or redeemed for discounts and products. Additionally, the decentralized nature of blockchain ensures that these rewards are tamper-proof and fraud-resistant, enhancing the trustworthiness of the rewards program.
          </p>
          {/* <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Intro;
