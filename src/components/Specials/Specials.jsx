import './Specials.css';
import OnlineMenuButton from '../Button/Button';
import GreekSalad from '../../assets/images/greek-salad.jpg';
import Bruschetta from '../../assets/images/bruschetta.svg';
import LemonDessert from '../../assets/images/lemon-dessert.jpg';
import SpecialsCard from '../SpecialsCard/SpecialsCard';

const Specials = () => {

    const specials = [
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

    return (
        <section className="specials">
            <div className='specials-header'>
                <h1>This weeks specials!</h1>
                <OnlineMenuButton 
                    text='Online Menu' 
                    route={'/menu'} 
                    paddingY={1.5} paddingX={2.5} 
                    fontSize='var(--font-size-xl)'
                />  
            </div>
            <div className='specials-content'>
                { 
                    specials.map((special) => (
                        <SpecialsCard key={special.id} special={special} />
                    ))
                }
            </div>
            


        </section>
    );
}

export default Specials;