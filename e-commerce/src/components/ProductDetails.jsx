import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../redux/slices/ProductSlice';
import { useParams } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { addToBasket, calculateBasket } from '../redux/slices/BasketSlice';
function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const { price, image, title, description } = selectedProduct;
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count == 0) {
            return;
        }
        setCount(count - 1);
    }
    useEffect(() => {
        getProductById();
    }, [])
    const dispatch = useDispatch();

    const getProductById = () => {

        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }
    const addBasket = () => {
        if (count == 0) {
            return;
        }
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count

        }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket())
    }


    return (
        <div style={{ marginTop: "30px", display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <div>
                <img width={300} height={500} src={image} alt="" />
            </div>
            <div style={{ marginLeft: "40px" }}>
                <h2 style={{ fontFamily: "arial" }}>{title}</h2>
                <p style={{ fontFamily: 'inherit', fontSize: '20px' }}>{description}</p>
                <h1 style={{ fontFamily: 'inherit', fontSize: '50px', fontWeight: "bold", color: 'darkblue' }}>{price} ₺</h1>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CiCirclePlus onClick={increment} style={{ fontSize: '40px', marginRight: '15px', cursor: 'pointer' }} />
                    <span style={{ fontSize: '35px' }}>{count}</span>
                    <CiCircleMinus onClick={decrement} style={{ fontSize: '40px', marginLeft: '15px', cursor: 'pointer' }} />
                </div>
                <div style={{ marginTop: '25px' }}>
                    <Button onClick={addBasket} variant="outlined">Sepete Ekle</Button>
                </div>

            </div>

        </div>
    )
}

export default ProductDetails
