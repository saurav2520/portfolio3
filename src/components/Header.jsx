function Header() {
    return (
        <>
            <div className="container">
                <header className="d-flex justify-content-center py-3">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a href="#" className="nav-link active" aria-current="page">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link">
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#education" className="nav-link">
                                Education
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#modalSignin" className="nav-link">
                                Contact
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a href="#" className="nav-link">
                                About
                            </a>
                        </li> */}
                    </ul>
                </header>
            </div>

        </>
    )
}

export default Header;