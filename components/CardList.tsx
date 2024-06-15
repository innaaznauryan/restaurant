import { FlatList } from "react-native-gesture-handler"
import { Card } from "./Card"
import { CardInterface } from "./Home"

interface CardsProps {
    cards: CardInterface[],
    capitalize: Function,
    handleAddRating: Function
}

export const CardList = ({cards, capitalize, handleAddRating}:CardsProps) => {
    const images = {
        "burger.jpg": require("@/assets/images/burger.jpg"),
        "pizza.jpg": require("@/assets/images/pizza.jpg"),
        "sandwich.jpg": require("@/assets/images/sandwich.jpg"),
        "pasta.jpg": require("@/assets/images/pasta.jpg"),
    }

    return (
        <FlatList 
            data={cards} 
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({item}) => {
                return <Card 
                    id={item.id}
                    title={capitalize(item.title)} 
                    image={item.image}
                    price={item.price}
                    discount={item.discount}
                    rating={item.rating}
                    handleAddRating={handleAddRating}
                    images={images}/>
            }}
        />
    )
}
