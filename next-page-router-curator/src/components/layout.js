function Layout({ children }) {
    return(
        <>
            <header>
                <nav>
                    this is the navigation section
                </nav>
            </header>

            <main>
                {children}
            </main>
            
            <footer>
                (c) 2023 Martin Alvarez
            </footer>
        </>
    );
}

export default Layout;