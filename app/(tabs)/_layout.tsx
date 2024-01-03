//import liraries
import { Tabs } from 'expo-router';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// create a component
const Layout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.primary,
            tabBarLabelStyle: {
                fontFamily: 'mon-sb'
            }
        }}>
            <Tabs.Screen name="index" options={{
                tabBarLabel: 'Explore',
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="map-search" size={size} color={color} />
            }}
            />
        </Tabs>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Layout;
