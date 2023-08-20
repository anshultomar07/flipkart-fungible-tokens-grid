import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { BsFacebook } from 'react-icons/bs';
import './footer.css';
import { SiFlipkart } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Flipkart Loyalty Tokens</a>
      <div className="footer__socials">
      <a href="https://www.flipkart.com/?ef_id=f0f8bcb9e00910345052d858a567b646:G:s&s_kwcid=AL!739!10!76484942419895!76485137405439&semcmpid=sem_F1167BY7_Brand_adcenter" target="_blank" rel="noreferrer" ><SiFlipkart/></a>
      <a href="https://www.instagram.com/flipkart/" target="_blank" rel="noreferrer" ><FiInstagram /></a>
      <a href="https://www.facebook.com/flipkart/" target="_blank" rel="noreferrer" ><BsFacebook /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; FLT 2023. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer