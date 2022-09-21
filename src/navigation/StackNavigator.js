import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen'
import ResultsShowScreen from '../screens/ResultsShowScreen';
import ResultsList from '../components/ResultsList';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Bussiness Search"
                component={SearchScreen}
                initialRouteName="SearchScreen"
                screenOptions={{
                    headerMode: 'screen',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            />

            <Stack.Screen
                name="ResultsList"
                component={ResultsList}
                screenOptions={{
                    headerMode: 'screen',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            />

            <Stack.Screen
                name="ResultsShowScreen"
                component={ResultsShowScreen}
                screenOptions={{
                    headerMode: 'screen',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator