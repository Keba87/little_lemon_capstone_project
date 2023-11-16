import React from 'react';
import './customerSay.css';
import Testimonial from './Testimonial';

const CustomerSay = () => {
    const testimonialsData = [
        {
            quote: "Little Lemon is a hidden gem in Chicago! The cozy atmosphere and friendly staff immediately make you feel welcome. I highly recommend trying their signature dishes.",
            imgSrc: require('./assets/StephenBrekke.png'),
            author: "Stephen Brekke",
        },
        {
            quote: "I can't get enough of Little Lemon! This restaurant knows how to elevate simple ingredients to a whole new level. Their dessert menu is particularly delightful.",
            imgSrc: require('./assets/TomWilliams.png'),
            author: "Tom Williams",
        },
        {
            quote: "Little Lemon is a breath of fresh air in the Chicago dining scene. The menu is thoughtfully curated, and their wine selection complements the dishes perfectly.",
            imgSrc: require('./assets/MichaelBrown.png'),
            author: "Michael Brown",
        },
        {
            quote: "Little Lemon is a culinary masterpiece! The ambiance is cozy and inviting. Prepare to be amazed! Don't forget to try their daily specials.",
            imgSrc: require('./assets/BusyBeth.png'),
            author: "Busy Beth",
        }
    ];
    return (
        <section className='customerSaySection'>
            <h2 className="textCenter">Testimonials</h2>
            <div className='customerSay-container'>
                <div className="testimonials">
                    {testimonialsData.map((testimonial, index) =>(
                        <Testimonial 
                            key={index}
                            quote={testimonial.quote}
                            imgSrc={testimonial.imgSrc}
                            author={testimonial.author}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerSay;
