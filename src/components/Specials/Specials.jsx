import './Specials.css';
import OnlineMenuButton from '../Button/Button';

const Specials = () => {

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

            </div>
            


        </section>
    );
}

export default Specials;