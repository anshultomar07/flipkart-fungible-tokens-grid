import "./how_to_earn.css";
import { FaRegHandPointRight } from 'react-icons/fa';
import { GiThink } from 'react-icons/gi';

import React from "react";

const How_to_earn = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Purchase Rewards",
      description:
        "Customers are rewarded with tokens based on the value of their purchases they make on Flipkart.",
    },
    {
      id: 2,
      title: "Referral Programs",
      description:
        "Customers are rewarded with tokens when they refer new customers to Flipkart.",
    },
    {
      id: 3,
      title: "Social Media Engagement",
      description: "Customers who follow our social media accounts and share our posts are rewarded with the tokens.",
    },
    {
      id: 4,
      title: "Writing Reviews",
      description:
        "Customers who leave product reviews or feedback on Flipkart are rewarded with the tokens. ",
    },
    {
      id: 5,
      title: "Participating in Surveys",
      description:
        "Tokens are rewarded customers who take part in surveys or polls to collect market insights and improve our offerings.",
    },
    {
      id: 6,
      title: "High-Value Customer Rewards",
      description:
        "Highest-spending or most loyal customers are rewarded with special token bonuses and exclusive offers.",
    },
    {
      id: 7,
      title: "Interactive Games",
      description:
        "Customers can play interactive games on Flipkart to earn tokens.",
    },
    {
      id: 8,
      title: "Attending Events",
      description:
        "Whenever Flipkart hosts online events like webinars, workshops, or virtual product launches, the attendees are rewarded with tokens as a way of thanking them for their participation.",
    },
    {
      id: 9,
      title: "Completing Challenges",
      description:
        "Customers can earn tokens by taking part in challenges or contests organised by Flipkart.",
  
    },
  ];

  return (
    <section id="portfolio">
      <h2><GiThink/> How to earn FLT ? </h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-content">
              <h3><FaRegHandPointRight/> {pro.title}</h3>
              <p>{pro.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default How_to_earn;
