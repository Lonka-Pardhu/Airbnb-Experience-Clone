import Airbnb from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <>
            <nav className='Navbar'>
                <img src={Airbnb} alt="airbnb-logo" className="Airbnb-logo" />
            </nav>
        </>
    )
}

