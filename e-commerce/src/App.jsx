import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer';
import Header from './components/Header';

import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateBasket, setDrawer } from './redux/slices/BasketSlice';

function App() {
  const dispatch = useDispatch()
  const { products, drawer, totalAmount } = useSelector((store) => store.basket)

  useEffect(() => {
    dispatch(calculateBasket());


  }, [])

  return (
    <>
      <PageContainer>

        <Header />
        <RouterConfig />

        <Loading />
        <Drawer onClose={() => dispatch(setDrawer())} anchor='right' open={drawer} >
          {
            products && products.map((product) => {
              return (
                <div key={product.id} style={{ marginTop: '50px' }}>
                  <div className='flex-row'>
                    <img src={product.image} style={{ width: '50px', height: '50px', marginRight: '5px' }} alt="" />
                    <p style={{ width: '350px', marginRight: '5px' }}>{product.title}({product.count})</p>
                    <p style={{ fontWeight: 'bold', marginRight: '10px', width: '60px' }}>{product.price}TL</p>
                  </div>

                </div>
              )
            })
          }
          <div>
            <h2>
              Toplam Tutar : {totalAmount}
            </h2>
          </div>
        </Drawer>
      </PageContainer>
    </>
  )
}

export default App
