import './Homepage.css';
import CallToAction from '../../components/CallToAction/CallToAction';
import Specials from '../../components/Specials/Specials';
import CustomerSay from '../../components/CustomersSay/CustomersSay';
import Chicago from '../../components/Chicago/Chicago';
import useScrollToTop from '../../assets/hooks/useScrollToTop';

const Homepage = ({headerHeight}) => {

    useScrollToTop();

    return (
        <section className="homepage" style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}>
            <CallToAction />
            <Specials />
            <CustomerSay />
            <Chicago />
        </section>
    );
}

export default Homepage;