import {Link} from 'react-scroll'

function Header(){
    return (
        <header className="main-header">
            <div>
                <p className="title">Sean Nishanthan</p>
            </div>

            <nav className="navbar">
                <Link to='/' smooth={true} duration={900}>Home</Link>
                <Link to='experience' spy={true} smooth={true} duration={900} activeClass='active'>Experience</Link>
                <Link to='projects' smooth={true} duration={1500}>Projects</Link>

            </nav>
        </header>
    )
}

export default Header   