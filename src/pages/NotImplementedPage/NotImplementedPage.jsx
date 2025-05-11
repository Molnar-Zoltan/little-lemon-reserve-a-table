import { Link } from 'react-router-dom';
import './NotImplementedPage.css';
import useScrollToTop from '../../assets/hooks/useScrollToTop';

const NotImplementedPage = ({headerHeight}) => {

    useScrollToTop();

    return (
        <section className="not-implemented-page" style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}>
            <h2>This page is not implemented.</h2>
            <div className='page-information'>
                <p>This project is about table reservations.</p>
                <p>Available pages: <Link to="/">Home</Link>, <Link to="/reservations">Reservations</Link>.</p>
            </div>
        </section>
    );
}

export default NotImplementedPage;
// This component is a placeholder for pages that are not implemented.