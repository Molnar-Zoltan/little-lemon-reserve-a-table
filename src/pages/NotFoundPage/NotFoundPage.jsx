import './NotFoundPage.css'; 

const NotFoundPage = ({headerHeight}) => {
    
    return (
        <section className='not-found-page' style={{ minHeight: `calc(100vh - ${headerHeight}px)`}}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </section>
    );
}

export default NotFoundPage;