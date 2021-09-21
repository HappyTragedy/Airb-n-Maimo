import React from 'react'
import money from '../img/money.png'

const Price = ({ price }) => {
    let i = 0;
    let precios = [];
    if (i < price) {
        for (i = 0; i < price; i++){
            precios.push(<img src={money} alt="" />)
        }
    }
    return precios
}

export default Price
