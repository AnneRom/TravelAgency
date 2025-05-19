const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="/assets/main-logo.png" alt="Main-logo" />
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Tour Packages</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header