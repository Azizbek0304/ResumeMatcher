import React from 'react';
import './pricingcard.scss';

const PricingCard = () => {
  const pricingData = [
    {
      title: 'Use Once',
      price: 1,
      period: 'each',
      features: ['take a credit for one useage'],
    },
    {
      title: 'Monthly',
      price: 19,
      period: 'mo',
      features: ['One month unlimited usage'],
    },
    {
      title: 'Yearly',
      price: 39,
      period: 'ye',
      features: ['One Year unlimited usage'],
    },
  ];

  return (
    <div id="generic_price_table">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* PRICE HEADING START */}
            <div className="price-heading clearfix">
              <h1>Pricing</h1>
            </div>
            {/* //PRICE HEADING END */}
          </div>
        </div>
      </div>
      <div className="container">
        {/* BLOCK ROW START */}
        <div className="row">
          {pricingData.map((item, index) => (
            <div className="col-md-4" key={index}>
              {/* PRICE CONTENT START */}
              <div className="generic_content clearfix">
                {/* HEAD PRICE DETAIL START */}
                <div className="generic_head_price clearfix">
                  {/* HEAD CONTENT START */}
                  <div className="generic_head_content clearfix">
                    {/* HEAD START */}
                    <div className="head_bg"></div>
                    <div className="head">
                      <span>{item.title}</span>
                    </div>
                    {/* //HEAD END */}
                  </div>
                  {/* //HEAD CONTENT END */}
                  {/* PRICE START */}
                  <div className="generic_price_tag clearfix">
                    <span className="price">
                      <span className="sign">$</span>
                      <span className="currency">{item.price}</span>
                      <span className="cent">.99</span>
                      <span className="month">/{item.period}</span>
                    </span>
                  </div>
                  {/* //PRICE END */}
                </div>
                {/* //HEAD PRICE DETAIL END */}
                {/* FEATURE LIST START */}
                <div className="generic_feature_list">
                  <ul>
                    {item.features.map((feature, i) => (
                      <li key={i}>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* //FEATURE LIST END */}
                {/* BUTTON START */}
                <div className="generic_price_btn clearfix">
                  <a className="" href="">
                    Choose plan
                  </a>
                </div>
                {/* //BUTTON END */}
              </div>
              {/* //PRICE CONTENT END */}
            </div>
          ))}
        </div>
        {/* //BLOCK ROW END */}
      </div>
    </div>
  );
};

export default PricingCard;
