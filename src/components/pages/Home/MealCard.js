import React, { Fragment } from 'react';
import './MealCard.css';

function MealCard(props) {
  const { imgSrc, title, price, description } = props;
return (
  <Fragment>
      <div className="card">
          <div >
              <img className="card__img" src={imgSrc} alt={title} />
          </div>
          <div className="card__descr-wrapper">
              <div>
                  <h4 className="card__title"> {title} <span className="price"> {price} </span></h4> 
              </div>
              <p className="card__descr">{description}</p>
              <div className="card__links">
                  <div>
                      <a className="link" href="/order-online">Order a delivery</a>
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                          <path d="M14.4708 1.72713C14.4708 0.8993 13.7206 0.221985 12.8036 0.221985H10.3029V1.72713H12.8036V3.72145L9.90273 6.99513H6.96846V3.23227H3.63407C1.79182 3.23227 0.299683 4.57938 0.299683 6.24256V8.50028H1.96688C1.96688 9.74955 3.0839 10.758 4.46767 10.758C5.85144 10.758 6.96846 9.74955 6.96846 8.50028H10.703L14.4708 4.24825V1.72713ZM4.46767 9.25285C4.00919 9.25285 3.63407 8.91419 3.63407 8.50028H5.30127C5.30127 8.91419 4.92615 9.25285 4.46767 9.25285Z" fill="black"/>
                          <path d="M6.96841 0.974548H2.80042V2.47968H6.96841V0.974548Z" fill="black"/>
                          <path d="M14.4709 6.24255C13.0871 6.24255 11.9701 7.251 11.9701 8.50026C11.9701 9.74952 13.0871 10.758 14.4709 10.758C15.8547 10.758 16.9717 9.74952 16.9717 8.50026C16.9717 7.251 15.8547 6.24255 14.4709 6.24255ZM14.4709 9.25283C14.0124 9.25283 13.6373 8.91417 13.6373 8.50026C13.6373 8.08635 14.0124 7.74769 14.4709 7.74769C14.9294 7.74769 15.3045 8.08635 15.3045 8.50026C15.3045 8.91417 14.9294 9.25283 14.4709 9.25283Z" fill="black"/>
                      </svg>
                  </div>
              </div>
          </div>
      </div>
  </Fragment>
)}

export default MealCard;
