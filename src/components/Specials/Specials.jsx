import './Specials.css';
import OnlineMenuButton from '../Button/Button';
import SpecialsCard from './SpecialsCard';
import specials from './specialsData'

const Specials = () => {

    return (
        <section className="specials">
            <div className='specials-header'>
                <h1 className='specials-title'>This weeks specials!</h1>
                <OnlineMenuButton 
                    text='Online Menu' 
                    route={'/menu'} 
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