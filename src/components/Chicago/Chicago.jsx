import './Chicago.css';
import MarioAdrianA from '../../assets/images/Mario-and-Adrian-A.jpg';
import MarioAdrianB from '../../assets/images/Mario-and-Adrian-B.jpg';


const Chicago = () => {
    return (
        <section className="chicago">
            <div className='chicago-content'>
                <div className='chicago-text'>
                    <h2 className='chicago-title'>Little Lemon</h2>
                    <h3 className='chicago-subtitle'>Chicago</h3>
                    <div className='chicago-description'>
                        <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p>
                        <p>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.</p>
                        <p>Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
                    </div>
                </div>
                <div className='chicago-image-container'>
                    <div className='crop-container-a'>
                        <img className='chicago-image-a' src={MarioAdrianA} alt='Picture of Mario and Adrian' />
                    </div>
                    <div className='crop-container-b'>
                        <img className='chicago-image-b' src={MarioAdrianB} alt='Picture of Mario and Adrian' />
                    </div>

                    
                </div>
            </div>
        </section>
    );
}

export default Chicago;