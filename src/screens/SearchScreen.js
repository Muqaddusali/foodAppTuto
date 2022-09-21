import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResult();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView style={{ marginLeft: 10 }} showsVerticalScrollIndicator={false}>
                <ResultsList
                    title="Cost Effective"
                    results={filterResultsByPrice('$')}
                    navigation={navigation}
                />
                <ResultsList
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}
                    navigation={navigation}
                />
                <ResultsList
                    title="Big Spender"
                    results={filterResultsByPrice('$$$')}
                    navigation={navigation}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
