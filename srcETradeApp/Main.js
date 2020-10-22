import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';

import productData from './product_data.json';
import { ProductCard, SearchBar } from './components/index';
import { main } from './style';

const Main = () => {

    //useStates
    const [displayData, setDisplayData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    //Functions
    const renderListItem = ({ item }) => <ProductCard product={item} />
    const onChangeText = text => setSearchValue(text)

    //useEffects
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
            <Text style={main.banner}>RootShop</Text>
            <SearchBar
                onChangeText={onChangeText}
            />
            <FlatList
                data={displayData}
                renderItem={renderListItem}
                keyExtractor={(_, index) => index.toString()}
                numColumns={2}
            />
        </View>
    )
}

export default Main;
