import './Navbar.css';
import { NavLink } from 'react-router-dom';
import navbarlogo from '../images/navbarlogo.PNG';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Navbar() {
  return (
  <>
    <nav>
      <Container>
        <Row>
        <img className="navlogo" src={navbarlogo}></img>
        <div className="buttons">
          <Row>
          <div className="navbutton">
            <NavLink to="" className="link" style={{textDecoration: 'none'}}>Home</NavLink>
          </div>
          <div className="navbutton">
            <NavLink to="/Resources" className="link" style={{textDecoration: 'none'}}>All Resources</NavLink>
          </div>
          <div className="navbutton">
            <NavLink to="/FreshHub" className="link" style={{textDecoration: 'none'}}>FreshHub</NavLink>
          </div>
          <div className="navbutton">
            <NavLink to="/womxncenter" className="link" style={{textDecoration: 'none'}}>Women's Center</NavLink>
          </div>
          <div className="navbutton">
            <NavLink to="/safetyEscorts" className="link" style={{textDecoration: 'none'}}>Safety Escorts</NavLink>
          </div>
          <div className="aboutbutton">
            <NavLink to="/About" className="link" style={{textDecoration: 'none'}}>About</NavLink>
          </div>
          </Row>
        </div>
        </Row>
      </Container>
    </nav>
  </>
  );
}

export default Navbar
