import { Link } from "react-router-dom"

export default function NavBar(){
    return (
        <div id="navbar">
            <Link to="/allPlayer">All Players</Link>
            <Link to="/singlePlayer">Single Player</Link>
            <Link to="/newPlayer">New Player</Link>
        </div>
    )
}