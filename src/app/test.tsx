import React from 'react'
import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Test() {
    return (
        <View>
            <Link href='/'>Home</Link>
        </View>
    )
}