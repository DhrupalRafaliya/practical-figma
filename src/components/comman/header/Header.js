import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RiArrowDropDownLine } from 'react-icons/ri';
import './header.scss';
import cart from '../../../assets/images/cart-logo.svg';
function Header() {
    return (

        //    <div >
        <Navbar bg="transparent" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#" className='brand-logo'>Panto</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0 gap-4"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Furniture <span className='drop-arrow'><RiArrowDropDownLine /></span></Nav.Link>
                        <Nav.Link href="#action2">Shop</Nav.Link>
                        <Nav.Link href="#action3">About Us</Nav.Link>
                        <Nav.Link href="#action4">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className='cart-icon text-light'>
                    <span><img src={cart} alt='cart' /></span>
                    <span className='cart-count'>0</span>

                </div>
            </Container>
        </Navbar>
        //    </div>
    );
}

export default Header;