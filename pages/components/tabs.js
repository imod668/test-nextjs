import React,{ useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Tabs = () => {
	const router = useRouter();
	const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const tabsTop = document.querySelector(".tabs").offsetTop;
        window.onscroll = () => {
            if (window.scrollY >= tabsTop) {
            setScrolled(true);
            } else {
            setScrolled(false);
            }
        };

    }, []);
	
    return (
        <div className={scrolled ? "tabs fixed" : "tabs"}>
            <Link href="/"><a className={router.pathname == "/" ? "tab active" : "tab"}>Home</a></Link>
            <Link href="/tweaks"><a className={router.pathname == "/tweaks" ? "tab active" : "tab"}>Tweaks</a></Link>
            <Link href="/ipa"><a className={router.pathname == "/ipa" ? "tab active" : "tab"}>ipa</a></Link>
            <Link href="/about"><a className={router.pathname == "/about" ? "tab active" : "tab"}>About</a></Link>
        </div>

    );
}
export default Tabs;