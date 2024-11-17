import React, { useState } from 'react'
import "..//css/Header.css"
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FiMoon } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/BasketSlice';

useSelector
function Header() {

    const [theme, setTheme] = useState(false);
    const dispatch = useDispatch();
    const changeTheme = () => {
        const root = document.getElementById("root")
        setTheme(!theme);
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff"
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black"
        }
    }
    const navigate = useNavigate();
    const { products } = useSelector((store) => store.basket)


    return (

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div onClick={() => navigate("/")} className='flex-row'>
                <img className='logo' src='./src/images/logo.PNG' />
                <p className='logo-text'>UG Company</p>
            </div>
            <div className='flex-row'>
                <input className='search-input' placeholder='Bir Şeyler Ara' />
                <div>

                    {
                        theme ? <FiMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />
                    }

                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <CiShoppingBasket style={{ marginRight: '5px' }} className='icon' />
                    </Badge>


                </div>


            </div>

        </div>
    )
}

export default Header
