import grocery from '../imagesAndVideos/grocery.png'
import food from '../imagesAndVideos/food.png'
import { Link } from 'react-router-dom'
import './products.css'

const Products = () => {
    return (
        <div className="categoriesContainer">
            <Link to="/Grocery" style={{ textDecoration: "none", color: "white" }}> <div className="groceryBox">
                <img src={grocery} alt="icon" />
                <p>Order Grocery</p>
            </div></Link>
            <Link to="/Food" style={{ textDecoration: "none", color: "white" }}>  <div className="foodBox">
                <img src={food} alt="icon" />
                <p>Order Food</p>
            </div></Link>
        </div>
    )
}

export default Products