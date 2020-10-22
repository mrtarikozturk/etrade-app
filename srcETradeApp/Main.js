import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'

import productData from './product_data.json';
import { ProductCard } from './components/index';
import { TextInput } from 'react-native-gesture-handler';

const Main = () => {

    const [displayData, setDisplayData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const renderListItem = ({ item }) => <ProductCard product={item} />

    useEffect(() => {
        // Alert.alert('Root Shop', 'Welcome to Root Shop...');
        setDisplayData(productData);
    }, []);

    useEffect(() => {
        const filteredData = productData.filter(item => {
            const userText = searchValue.toUpperCase();
            const itemTitle = item.title.toUpperCase();

            return itemTitle.indexOf(userText) > -1;
        });

        setDisplayData(filteredData);

    }, [searchValue])

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.banner}>RootShop</Text>
            <View style={styles.searhBar}>
                <TextInput
                    placeholder="Search Product..."
                    onChangeText={(value) => { setSearchValue(value) }} />
            </View>
            <FlatList
                data={displayData}
                renderItem={renderListItem}
                keyExtractor={(_, index) => index.toString()}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 10,
    },
    searhBar: {
        backgroundColor: '#eceff1',
        paddingHorizontal: 8,
        margin: 5,
        borderRadius: 10,
    }
})




export default Main
