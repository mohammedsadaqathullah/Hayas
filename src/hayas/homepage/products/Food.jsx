import NavBar from '../../navbar/NavBar'
import './grocery.css'


const Food = () => {
    return (
        <>
            <NavBar />
            <div className="groceryContainer">
                <div><h1>Grocery List</h1></div>
                <div className="search">
                    <input type="text"
                        placeholder='Search Item Here...' />
                </div>
                <div className="groceryBoxes">
                    <div className="mainBox">
                        <div className='card'>
                            <span className='productImage'>
                                <img src="https://i.postimg.cc/q7vPcvky/51-DJ-9xku-QL.jpg" alt="" />
                            </span>
                            <span className='title'>
                                <p>வெங்காயம் / Onion </p>
                            </span>
                            <span className='description'>
                                <p>Its Healthy and Organic</p>
                            </span>
                            <span className='addbtn'>
                                <button> - </button>
                                20Rs
                                <button> + </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Food