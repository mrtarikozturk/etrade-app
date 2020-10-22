import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'


const ProductCard = (props) => {


    return (
        <View style={styles.container}>
            <Image
                source={{ uri: props.product.imgURL }}
                style={styles.image}
            />
            <View style={styles.detailContainer}>
                <Text>{props.product.title}</Text>
                <Text style={styles.price}>{props.product.price}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        borderWidth: 1,
        flex: 1,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderColor: '#e0e0e0',
    },

    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain',
    },

    detailContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },

    price: {
        fontWeight: 'bold',
    },
});







export { ProductCard }


