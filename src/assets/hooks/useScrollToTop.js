import { useEffect } from 'react';

function useScrollToTop() {  // This is a custom hook
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
}

export default useScrollToTop;