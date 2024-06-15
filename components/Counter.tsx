import React, { FC, useState } from 'react'
import { Text, Button, StyleSheet, View } from 'react-native'

const Counter:FC = () => {
    const [count, setCount] = useState(20);
    const handlePress = () => {
        setCount(prev => prev - 1);
    };
    return (
        <>
            <View style={styles.container}><Button color="#841584" title="Click" onPress={handlePress} /></View>
            <Text style={styles.counter}>{count} items left</Text>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: 100,

    },
    counter: {
        fontWeight: '900',
    }
})

export default Counter