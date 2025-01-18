import {Link} from 'react-scroll'

function Header(){
    return (
        <header className="main-header">
            <div>
                <p className="title">Sean Nishanthan</p>
            </div>

            <nav className="navbar">
                <Link to='home' smooth={true} duration={900} offset={-100}>Home</Link>
                <Link to='experience' spy={true} smooth={true} duration={900} offset={-60}>Experience</Link>
                <Link to='projects' smooth={true} duration={1500} offset={-10}>Projects</Link>

            </nav>
        </header>
    )
}

export default Header   