import { Nav as NavBs, Navbar, Container } from "react-bootstrap";

function Nav({items, onSeleccion})
{
    return(
        <Navbar bg="light" expand="md">
            <Container>
                <NavBs className="me-auto">
                    {items.map((item) => (
                        <NavBs.Link key={item} onClick={() => onSeleccion(item)}>
                            {item}
                        </NavBs.Link>
                    ))}
                </NavBs>
            </Container> 
        </Navbar>

    );
}

export default Nav;