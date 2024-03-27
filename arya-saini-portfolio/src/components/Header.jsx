import { NavLink } from "react-router-dom"

function Header() {
    return (
        <Header>

            <div>
                <h1>Arya Saini Portfolio</h1>
            </div>

            <div>
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Contact</NavLink>
                <NavLink>Projects</NavLink>
            </div>

        </Header>
    )
}
export default Header