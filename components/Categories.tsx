import { StyleSheet, FlatList, Pressable } from 'react-native'
import { ThemedText } from './ThemedText'
import { CategoryInterface } from './Home'

interface CategoryProps {
    categories: CategoryInterface[],
    capitalize: Function,
    handlePress: Function,
}

export const Categories = ({categories, capitalize, handlePress}: CategoryProps) => {
  return (
    <FlatList
    data={categories}
    keyExtractor={(item) => item.id}
    horizontal={true}
    style={styles.categories}
    renderItem={({item, index}) => {
        const selectedStyle = item.selected ? styles.selectedItem : null
        return (
            <Pressable 
                style={[styles.item, selectedStyle]}
                onPress={() => handlePress(index)}>
                    <ThemedText lightColor={item.selected ? 'white' : 'black'}>
                        {capitalize(item.name)}
                    </ThemedText>
            </Pressable>
        )
        }}
/>
  )
}

const styles = StyleSheet.create({
    categories: {
        padding: 10,
    },
    item: {
        paddingHorizontal: 8,
        paddingVertical: 5,
        marginHorizontal: 8,
        borderRadius: 10,
        borderColor: 'orange',
        borderWidth: 1,
        cursor: 'pointer',
    },
    selectedItem: {
        backgroundColor: 'orange',
    },
})