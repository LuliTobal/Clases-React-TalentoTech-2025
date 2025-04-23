import {Navbar} from 'react-bootstrap';

function Header ({usuario, tipo})
{
    return(
        <Navbar bg="dark" variant="dark" ClassName="px-3">
            <Navbar.Brand>Proyecto pueba Talento Tech</Navbar.Brand>
            <Navbar.Text ClassName="text-black">{tipo}-{usuario}</Navbar.Text>
        </Navbar>
    )
}

export default Header;