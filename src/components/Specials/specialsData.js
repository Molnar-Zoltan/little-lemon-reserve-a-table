import GreekSalad from '../../assets/images/greek-salad.jpg';
import Bruschetta from '../../assets/images/bruschetta.svg';
import LemonDessert from '../../assets/images/lemon-dessert.jpg';

const specialsData = [
    { 
        id: 1, 
        name: 'Greek Salad', 
        price: 12.99, 
        description: `The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.`,
        image: GreekSalad
    },
    { 
        id: 2, 
        name: 'Bruschetta', 
        price: 5.99, 
        description: `Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.`,
        image: Bruschetta
    },
    { 
        id: 3, 
        name: 'Lemon Dessert', 
        price: 5.00, 
        description: `This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.`,
        image: LemonDessert
    },
];

export default specialsData;