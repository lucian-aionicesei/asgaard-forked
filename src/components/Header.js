import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="flex justify-around">
            <Link to={'/'}>Home</Link>
            <Link to={'/lineup'}>Lineup</Link>
            <Link to={'/artist'}>Artist</Link>
            <Link to={'/schedule'}>Schedule</Link>
            <Link to={'/shop'}>Shop</Link>
            <Link to={'/purchases'}>Purchase</Link>
            <Link to={'/account'}>Account</Link>
        </nav>
    )
}