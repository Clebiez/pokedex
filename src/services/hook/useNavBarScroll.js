import { useEffect, useRef } from 'react';
const NAVBAR_CLASS_TOGGLE = '-translate-y-16';
const OFFSET = 50;

const useNavBarScroll = () => {
    const ref = useRef();
    const lastYoffSet = useRef(window.pageYOffset);

    const handleScroll = () => {
        if (window.pageYOffset > lastYoffSet.current + OFFSET) {
            ref.current.classList.add(NAVBAR_CLASS_TOGGLE);
            lastYoffSet.current = window.pageYOffset;
        } else if (window.pageYOffset < lastYoffSet.current - OFFSET) {
            ref.current.classList.remove(NAVBAR_CLASS_TOGGLE);
            lastYoffSet.current = window.pageYOffset;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return { ref };
};

export default useNavBarScroll;
