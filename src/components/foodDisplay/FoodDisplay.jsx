import React, {useContext, useEffect, useState,} from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../foodItem/FoodItem'
import arrowUp from '../../assets/arrow_up.png'


const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 30) {
              setShowArrow(true);
          } else {
              setShowArrow(false);
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='food-display' id='food-display'>
        <h1>Our Menu</h1>
        <h2>Every Bite is Pure Bliss!</h2>
        <div className="food-display-list">
            {food_list.map((item, index)=>{
              if (category==="All" || category===item.category) {
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
            })}
        </div>
        <div className={`scroll-to-top ${showArrow ? 'show' : ''}`} onClick={scrollToTop}>
                <img src={arrowUp} alt="Scroll to top" />
            </div>
    </div>
  )
}

export default FoodDisplay