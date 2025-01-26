import NavBar from '../../navbar/NavBar'
import { useState, useEffect } from 'react';
import './grocery.css'

const Grocery = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  // Add loading state

    useEffect(() => {
        // Fetch all products from backend
        fetch('https://hayas-backend.onrender.com/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);  // Data is fetched, set loading to false
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false);  // In case of error, stop loading
            });
    }, []);

    return (
        <div className='groceryBody'>
            <NavBar />
            <div className="groceryContainer">
                <div className='groceryHead'>
                    <h1>Grocery List</h1>
                </div>
                <div className="search">
                    <input type="text" placeholder='Search Item Here...' />
                </div>
                <div className="groceryBoxes">
                    {loading ? (  // Check if loading is true
                        <div className="loading">
                            <div className="spinner"></div> {/* Spinner will be displayed during loading */}
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
                                            <span>{product.halfKg}</span>Rs/500gm
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
                                            <span>{product.oneKg}</span>Rs/1kg
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

export default Grocery;
