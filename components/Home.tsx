import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { Categories } from './Categories';
import { CardList } from './CardList';

export interface CardInterface {
    id: string;
    image: string;
    title: string;
    price: number;
    discount: number;
    rating: number[];
    category: string;
}
export interface CategoryInterface {
    id: string;
    name: string;
    selected: boolean;
}

const dataCategories: CategoryInterface[] = [
    {
        id: "1", 
        name: "pizza", 
        selected: true, 
    },
    {
        id: "2", 
        name: "pasta", 
        selected: false, 
    },
    {
        id: "3", 
        name: "burger", 
        selected: false, 
    },
    {
        id: "4", 
        name: "sandwich", 
        selected: false, 
    }
]

const dataCards: CardInterface[] = [
    {
        id: "11",
        image: "pizza.jpg",
        title: "peperoni",
        price: 500,
        discount: 70,
        rating: [4, 5],
        category: "pizza"
    },
    {
        id: "12",
        image: "pizza.jpg",
        title: "quatro",
        price: 400,
        discount: 0,
        rating: [3, 4, 5],
        category: "pizza"
    },
    {
        id: "13",
        image: "burger.jpg",
        title: "cheeseburger",
        price: 500,
        discount: 5,
        rating: [4, 4],
        category: "burger"
    },
    {
        id: "14",
        image: "pasta.jpg",
        title: "Pesto",
        price: 400,
        discount: 20,
        rating: [5],
        category: "pasta"
    },
    {
        id: "15",
        image: "sandwich.jpg",
        title: "club",
        price: 0,
        discount: 0,
        rating: [],
        category: "sandwich"
    }
]

export default function Home () {
    const [catergories, setCategories] = useState<CategoryInterface[]>(dataCategories)
    const [cards, setCards] = useState<CardInterface[]>(dataCards)

    const capitalize = (string: string) => {
        return string[0].toUpperCase() + string.slice(1)
    }
    const handlePress = (index: number) => {
        setCategories(prev => prev.map((category, idx) => {
            return index === idx ? {...category, selected: !category.selected} : category
        }))
    }
    const handleAddRating = (id: string, itemRating: number) => {
        setCards(prev => prev.map(card => card.id === id ? {...card, rating: [...card.rating, itemRating]} : card))
    }

    useEffect(() => {      
        const selectedCategories = catergories
            .filter(category => category.selected)
            .map(category => category.name)
        const filteredCards = dataCards
            .filter(card => selectedCategories
            .includes(card.category))
        setCards(filteredCards)        
    }, [catergories])

    return (
        <>
            <ThemedView style={styles.stepContainer}>
                <Categories 
                    categories={catergories} 
                    capitalize={capitalize} 
                    handlePress={handlePress} 
               />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <CardList 
                    cards={cards} 
                    capitalize={capitalize}
                    handleAddRating={handleAddRating}
                />
            </ThemedView>
        </>
    )
}

const styles = StyleSheet.create({
    stepContainer: {
        marginBottom: 8,
    },
})