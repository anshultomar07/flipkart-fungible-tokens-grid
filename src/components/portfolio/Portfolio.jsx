import "./portfolio.css";
import React, { useState } from 'react';
import { BsFillGiftFill } from 'react-icons/bs';
import { BiSolidCopy } from 'react-icons/bi';

//Portfolio function
const Portfolio = (props) => {
  const soloProjects = [
    {
      id: 1,
      title: "Shop on Myntra",
      img: "https://www.topfdeals.com/wp-content/uploads/2022/06/Myntra-India-reviews.jpg",
      description:
        "Flat Rs. 500 Off on shopping above Rs. 3999.",
      technologies: "5 FLT",
      amount: 5,
      github: "",
    },
    {
      id: 2,
      title: "Flipkart Fashion",
      img: "https://storiesflistgv2.blob.core.windows.net/stories/2019/07/Banner.jpg",
      description:
        "FLAT 20% Off on shopping above Rs. 1499",
      technologies: "5 FLT",
      amount: 5,
      github: "",
    },
    {
      id: 3,
      title: "Kitchen Appliances",
      img: "https://img.taste.com.au/B-2TCKSb/w720-h480-cfill-q80/taste/2022/11/black-friday-kitchen-appliances-183278-1.jpg",
      description: "Get extra 5% Off on Kitchen Appliances.",
      technologies: "10 FLT",
      amount: 10,
      github: "",
    },
    {
      id: 4,
      title: "Flipkart Groceries",
      img: "https://www.bcwebwise.com/uploads/blog_images/flipkart-joins-the-online-grocery-bandwagon1572423207.jpg",
      description:
        "FLAT Rs. 100 Off on Grocery Shopping of above Rs. 1499 on Flipkart.",
      technologies: "10 FLT",
      amount: 10,
      github: "",
    },
    {
      id: 5,
      title: "Flipkart Flights",
      img: "https://english.cdn.zeenews.com/sites/default/files/2020/06/10/865909-flipkartflight.jpg",
      description:
        "Flat 10% Off on Domestic Flights.",
      technologies: "10 FLT",
      amount: 10,
      github: "",
    },
    {
      id: 6,
      title: "Home Appliances",
      img: "https://www.aya-toptech.com/wp-content/uploads/2018/09/my_nasco.png",
      description:
        "FLAT 10% Off on shopping above Rs. 4999 on home appliances on Flipkart.",
      technologies: "15 FLT",
      amount: 15,
      github: "",
    },
  ];

  const [transferHash, setTransferHash] = useState();
	const [errorMsg, setErrorMsg] = useState();
	const [success, setSuccess] = useState();
  const [index, setIndex] = useState();


	const transferHandler = async (e, arg1) => {
    e.preventDefault();
    if(!(props.contract)){
      setErrorMsg("Please connect to wallet.")
      setTimeout(() => {
				setErrorMsg('')
			}, 2000);
    }
    else{
      let transferAmount = e.target.value;
      let recieverAddress = '0xd3d55b9CA7e494e0255d9b9Dd75e7C4E37B546fa';
  
      let txt = await props.contract.transfer(recieverAddress, transferAmount);
      console.log(txt);
      setTransferHash(String(txt.hash).substring(2, 15));
      setSuccess("Coupon Claimed.!");
      setTimeout(() => {
        setSuccess('')
      }, 2000);
  
      setIndex(e.target.name);
        // setTransferHash("Transfer confirmation hash: " + txt.hash);

    }
		

	}


  return (
    <section id="portfolio">
      <h2><BsFillGiftFill/> Rewards to Claim</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                More Details
              </a>
              <button className="claim_btn" value={pro.amount} name={pro.id} onClick={transferHandler}>Claim</button>
            </div>
              {index == pro.id && <div className="coupon_code">{transferHash} <BiSolidCopy/> </div>}
          </article>
        ))}
        {errorMsg && window.alert(errorMsg)}
      </div>
        
    </section>
  );
};

export default Portfolio;
