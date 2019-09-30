import React from 'react';

import { CartItemContainer, ItemDetailsContainer, Name, Price } from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity} }) => (
    <CartItemContainer>
        <img src={imageUrl} alt='item'/>
        <ItemDetailsContainer>
            <Name>{name}</Name>
            <span>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;