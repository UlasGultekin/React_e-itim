import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom';
function Product({ product }) {

    const { id, price, image, title, description } = product;
    const navigate = useNavigate();
    return (
        <div className='card'>
            <img className='image' src={image} alt="" />
            <div>
                <p style={{ height: "65px" }} className='card-detail'>{title}</p>
                <h3 className='card-detail'>{price} ₺</h3>
            </div>

            <div className='flex-row'>
                <button onClick={() => navigate("/product-details/" + id)} className='detail-button'>Ürüne Git</button>
            </div>
        </div>
    )
}

export default Product
