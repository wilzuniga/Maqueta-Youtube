import { Nav } from 'react-bootstrap'
import imgHome from "../img/home.png";
import imgShorts from "../img/utube-short.png"
import Imagesubs from "../img/subs.png"
import imgTú from "../img/tusvideos.png";
export const SideBar = ({expanded}) => {
  return (
    <div className={`sidebar ${expanded ? 'expanded' : 'sidebar'}`}>
      <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link className={`nav-link ${expanded ? 'nav-link-expanded' : 'nav-link'}`} href="/home" style={{marginTop: "40px"}}>
          <img src={imgHome} alt="Home" className="nav-icon" width="20" height="20"></img>
          <span className= "span-t" style={{paddingLeft: "18px"}}>Inicio</span>
        </Nav.Link>
        <Nav.Link className={`nav-link ${expanded ? 'nav-link-expanded' : 'nav-link'}`} href="/shorts">
          <img src={imgShorts} alt="About" className="nav-icon" width="20" height="20" />
          <span className= "span-t" style={{paddingLeft: "15px"}}>      Shorts</span>
        </Nav.Link>
        <Nav.Link className={`nav-link ${expanded ? 'nav-link-expanded' : 'nav-link'}`} href="/subscription">
          <img src={Imagesubs} alt="Services" className="nav-icon" width="20" height="20" />
          <span className="span-t"> subscripciones</span>
        </Nav.Link>
        {expanded == true ? <hr className='separatos0'/> : null}
        {expanded == true ?<Nav.Link className={`nav-link ${expanded ? 'nav-link-expanded' : 'nav-link'}`} href="/tu">
          <img src={imgTú} alt="Contact" className="nav-icon" width="20" height="20"/>
          <span className= "span-t" style={{paddingLeft: "23.9px"}}>Tú</span>
        </Nav.Link> 
        : <Nav.Link className={`nav-link ${expanded ? 'nav-link-expanded' : 'nav-link'}`} href="/tu">
        <span className= "span-t" style={{paddingLeft: "23.9px"}}>Tú</span>
      </Nav.Link>}
        
      </Nav>
    </div>
  )
}
