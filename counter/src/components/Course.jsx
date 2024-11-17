import React from 'react'

function Course({course}) {
const {id,title,description,price,image}=course;
  return (
    <div className='course'>
      
        <div>
            <img src={image} width={300} height={150} />
            <h4 className='title'>{title}</h4>
            <p className='description'>{description}</p>
            <h3 className='price'>{price}₺</h3>
        </div>

    </div>
  )
}

export default Course