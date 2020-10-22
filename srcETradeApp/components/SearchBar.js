import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { search_bar } from '../style';

const SearchBar = (props) => {
    return (
        <View style={search_bar.container}>
            <TextInput
                placeholder="Search Product..."
                onChangeText={(value) => { props.onChangeText(value) }} />
        </View>
    )
}

export { SearchBar };
