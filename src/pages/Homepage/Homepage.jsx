import './Homepage.css';

const Homepage = ({headerHeight}) => {
    return (
        <section className="homepage" style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}>
            <h1>Homepage</h1>
        </section>
    );
}

export default Homepage;