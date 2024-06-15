import { useState } from 'react';
import { StyleSheet, Image, ImageSourcePropType, } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Rating } from '@kolking/react-native-rating';

interface CardProps {
    id: string;
    title: string;
    image: string;
    price: number;
    discount: number;
    rating: number[];
    handleAddRating: Function;
    images: { [key: string]: ImageSourcePropType };
}

export const Card = ({id, title, image, price, discount, rating, handleAddRating, images}:CardProps) => {
    const [rate, setRate] = useState(() => {
        return rating.reduce((acc, elem) => acc + elem, 0) / rating.length || 0
    })

  const newPrice = price - price * discount / 100

  const handleRate = (value: number) => {  
    setRate([...rating, value].reduce((acc, elem) => acc + elem, 0) / (rating.length + 1))
    handleAddRating(id, value)
  }
  return (
    <ThemedView style={styles.card}>
        <Image source={images[image]} style={styles.image}/>
        <ThemedView style={styles.info}>
            <ThemedText>{title}</ThemedText>
            <ThemedText style={styles.discount}>{discount}% Of</ThemedText>
            <ThemedText style={styles.price}>
                <ThemedText style={styles.newPrice}>${newPrice.toFixed(2)}</ThemedText>
                <ThemedText style={styles.oldPrice}>${price.toFixed(2)}</ThemedText>
            </ThemedText>
            <ThemedView style={styles.ratingContainer}>
                <Rating size={16} rating={rate} onChange={handleRate} style={styles.rating} />
                <ThemedText>({rate.toFixed(2)})</ThemedText>
            </ThemedView>
        </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        height: 150,
        width: 200,
        borderRadius: 10,
    },
    card: {
        flex: 1,
        margin: 16,
    },
    info: {
        position: 'static',
    },
    price: {
        display: 'flex',
        gap: 10,
        alignItems: 'baseline',
    },
    newPrice: {

    },
    oldPrice: {
        textDecorationLine: 'line-through',
        fontSize: 12,
    },
    discount: {
        backgroundColor: 'orange',
        color: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 5,
    },
    ratingContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    rating: {
        cursor: 'pointer',
    }
})