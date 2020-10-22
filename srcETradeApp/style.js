import { StyleSheet, Dimensions } from 'react-native';

// Main.js
const main = StyleSheet.create({
    banner: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 10,
    },
});

//ProductCard
const product_card = StyleSheet.create({

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

//SearchBar
const search_bar = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        paddingHorizontal: 8,
        margin: 5,
        borderRadius: 10,
    }
});

export { main, product_card, search_bar };
