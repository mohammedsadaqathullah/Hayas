import NavBar from '../navbar/NavBar';
import { useState, useEffect } from 'react';
import './grocery.css';

const Food = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://hayas-backend.onrender.com/food')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {

                console.error('Error fetching food items:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='groceryBody'>
            <NavBar />
            <div className="groceryContainer">
                <div className="groceryHead">
                    <h1>Foods</h1>
                </div>
                <div className="search">
                    <input type="text" placeholder='Search Item Here...' />
                </div>
                <div className="groceryBoxes">
                    {loading ? (
                        <div className="loading">
                            <div className="spinner"></div>
                        </div>
                    ) : products.length > 0 ? (
                        products.map((product) => (
                            <div className="mainBox" key={product._id}>
                                <div className='card'>
                                    <span className='productImage'>
                                        <img src={product.imageURL} alt={product.title} />
                                    </span>
                                    <span className='title'>
                                        <p>{product.title}</p>
                                    </span>
                                    <span className='description'>
                                        <p>{product.description}</p>
                                    </span>
                                    <span className='addbtn'>
                                        <span>
                                            <button> - </button>
                                        </span>
                                        <span>
                                            <span>{product.halfKg}</span>Rs / 500gm
                                        </span>
                                        <span>
                                            <button> + </button>
                                        </span>
                                    </span>
                                    <span className='addbtn'>
                                        <span>
                                            <button> - </button>
                                        </span>
                                        <span>
                                            <span>{product.oneKg}</span>Rs / 1kg
                                        </span>
                                        <span>
                                            <button> + </button>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Food;
