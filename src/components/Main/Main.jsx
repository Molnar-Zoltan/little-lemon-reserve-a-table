import './Main.css';
import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import BookingPage from "../../pages/BookingPage/BookingPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import NotImplementedPage from '../../pages/NotImplementedPage/NotImplementedPage';
import ConfirmedBooking from '../../pages/ConfirmedBookingPage/ConfirmedBookingPage';

const Main = ({headerHeight}) => {


    const notImplementedPages = [
        "/about",
        "/menu",
        "/order-online",
        "/login"
    ];


    return (
        <main className="main" style={{ paddingTop: `${headerHeight}px` }}>

        <Routes>
            <Route path="/" element={<Homepage headerHeight={headerHeight} />} />
            <Route path="/reservations" element={<BookingPage  headerHeight={headerHeight} />} />
            <Route path="/confirmed-booking" element={<ConfirmedBooking  headerHeight={headerHeight} />} />
            {
                notImplementedPages.map((path) => (
                    <Route key={path} path={path} element={<NotImplementedPage headerHeight={headerHeight}/>} /> 
                ))
            }
            <Route path="*" element={<NotFoundPage headerHeight={headerHeight} />} /> {/* For unmatched routes */}
        </Routes>
        </main>
    );
}

export default Main;