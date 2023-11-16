
import './OurStory.css';

const OurStory = () => {
  return (
    <section className='chicagoSection'>
        <div className='chicago-container'>
            <div className='chicago-text'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. 
                    Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
                </p>
            </div >
            <div className='chicago-images-container'>
                <div className="mosaic">
                    <div className="mosaic__item"> 
                        <img className='chicago-image-top' src={require('./assets/chefs-mario-and-adrian_b.jpg')} alt='Mario and Adrian' />
                    </div>
                    <div className="mosaic__item">
                        <img className='chicago-image-bottom' src={require('./assets/chefs-mario-and-adrian_a.jpg')} alt='Mario and Adrian' />
                    </div>
                </div>      
            </div>
        </div>
    </section>
);
}

export default OurStory;
