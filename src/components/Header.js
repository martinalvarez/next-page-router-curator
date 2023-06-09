import Link from "next/link";
import styles from './Header.module.css';

const menu = [
    {
        href: '/',        
        id: 1,
        label: 'Home',

    },
    {
        href: '/videos',        
        id: 2,
        label: 'Videos',
    },        
    {
        href: '/videos-ssr',        
        id: 3,
        label: 'Videos (getServerSideProps)',
    },       
    {
        href: '/videos-csr',        
        id: 4,
        label: 'Videos (getStaticProps)',
    },           
    {
        href: '/about',
        id: 5,
        label: 'About',
    },        
];

function Header() {
    return(
        <header>
            <nav>
                <ul className={styles.menu}>
                    {menu.map((item)=>{
                        return (
                            <li key={item.id}>
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Header;