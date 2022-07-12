import { useEffect,useState } from 'react';

const useDarkMood = () => {
   

    const [darkMood, setDarkMood] = useState(
            localStorage.getItem('theme') 
        )
        const removeOldTheme = darkMood ==='default' || 'light' ? 'dark' : 'light'

        useEffect(() => {
            
            const body = window.document.documentElement
            body.classList.remove(removeOldTheme)
            body.classList.add(darkMood)
            localStorage.setItem('theme',darkMood)
        }, [darkMood,setDarkMood])

    return [darkMood,setDarkMood]
 
};

export default useDarkMood;