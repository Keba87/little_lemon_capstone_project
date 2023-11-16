import { Link } from 'react-router-dom';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const specialsData = [
  {
      imgSrc: require('./assets/greek-salad.jpg'),
      title: "Greek salad",
      price: "$ 12.99",
      description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  {
      imgSrc: require('./assets/bruschetta.jpg'),
      title: "Bruchetta",
      price: "$ 5.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
      imgSrc: require('./assets/lemon-dessert.jpg'),
      title: "Lemon Dessert",
      price: "$ 5.00",
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  },
];

const WeekSpecials = () => {
  return (
    <section className="specialsSection">
        <div>
            <div className="specialsTextButton">
                <h2>This weeks specials!</h2>
                <Link className="button-primary" to={pages.get('orderOnline').path}>
                  Online Menu
                </Link>
            </div>
            <div className="cards">
                {specialsData.map((special, index) =>(
                    <MealCard 
                        key={index}
                        imgSrc={special.imgSrc}
                        title={special.title}
                        price={special.price}
                        description={special.description} 
                    />
                ))}
            </div>
        </div>
    </section>
)   
}

export default WeekSpecials;
