import React from 'react';
import { View, Text, Image } from 'react-native';

import { product_card } from '../style';

const ProductCard = (props) => {
    return (
        <View style={product_card.container}>
            <Image
                source={{ uri: props.product.imgURL }}
                style={product_card.image}
            />
            <View style={product_card.detailContainer}>
                <Text>{props.product.title}</Text>
                <Text style={product_card.price}>{props.product.price}</Text>
            </View>
        </View>
    )
}

export { ProductCard };


