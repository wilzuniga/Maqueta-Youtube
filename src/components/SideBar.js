import { Nav } from 'react-bootstrap'
import imgHome from "../img/home.png";
import imgShorts from "../img/utube-short.png"
import Imagesubs from "../img/subs.png"
import imgTú from "../img/tusvideos.png";
import imgtuCanal from "../img/user.png";
import imgHistory from "../img/history.png";
import imgPlaylist from "../img/playlist.png";
import imgPlay from "../img/play.png";
import imgClock from "../img/clock.png";
import imgIdea from "../img/idea.png";
import imgLike from "../img/like.png";
import imgAmongus1 from "../img/amongus1.png";
import imgAmongus2 from "../img/amongus2.png";
import imgAmongus3 from "../img/amongus3.png";

export const SideBar = ({expanded}) => {
  const subscription = [
    imgAmongus1,
    imgAmongus2,
    imgAmongus3
  ]
  
  const name =[
    'Amongus1',
    'Amongus2',
    'Amongus3'
  ];
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
        {expanded === true ? <hr className='separatos0'/> : null}
        {expanded === true ? <Nav.Link className={`nav-link ${expanded ? 'nav-link-expanded' : 'nav-link'}`} href="/tu">
          <span className= "span-t" style={{paddingLeft: "23.9px"}}>Tú  &gt; </span>
        </Nav.Link> 
        
        : <Nav.Link className={`nav-link ${expanded ? 'nav-link-expanded' : 'nav-link'}`} href="/tu">
        <img src={imgTú} alt="Contact" className="nav-icon" width="20" height="20"/>
        <span className= "span-t" style={{paddingLeft: "23.9px"}}>Tú</span>
      </Nav.Link> }

      {expanded === true ? <Nav.Link className={`nav-link ${expanded ? 'nav-link-expanded' : 'nav-link'}`} href="/tu">
      <img src={imgtuCanal} alt="Contact" className="nav-icon" width="20" height="20"/>
          <span className= "span-t" style={{paddingLeft: "23.9px"}}>Tú Canal  </span>
        </Nav.Link> 
        : null }
        {expanded === true ? <Nav.Link className={`nav-link ${expanded ? 'nav-link-expanded' : 'nav-link'}`} href="/tu">
      <img src={imgHistory} alt="Contact" className="nav-icon" width="20" height="20"/>
          <span className= "span-t" style={{paddingLeft: "23.9px"}}>Historial  </span>
        </Nav.Link> 
        : null }
        {expanded === true ? <Nav.Link className={`nav-link ${expanded ? 'nav-link-expanded' : 'nav-link'}`} href="/tu">
      <img src={imgPlaylist} alt="Contact" className="nav-icon" width="20" height="20"/>
          <span className= "span-t" style={{paddingLeft: "23.9px"}}>PlayList  </span>
        </Nav.Link> 
        : null }
        {expanded === true ? <Nav.Link className={`nav-link ${expanded ? 'nav-link-expanded' : 'nav-link'}`} href="/tu">
      <img src={imgPlay} alt="Contact" className="nav-icon" width="20" height="20"/>
          <span className= "span-t" style={{paddingLeft: "23.9px"}}>Tus Videos  </span>
        </Nav.Link> 
        : null }
        {expanded === true ? <Nav.Link className={`nav-link ${expanded ? 'nav-link-expanded' : 'nav-link'}`} href="/tu">
      <img src={imgIdea} alt="Contact" className="nav-icon" width="20" height="20"/>
          <span className= "span-t" style={{paddingLeft: "23.9px"}}>Tus Cursos </span>
        </Nav.Link> 
        : null }
        {expanded === true ? <Nav.Link className={`nav-link ${expanded ? 'nav-link-expanded' : 'nav-link'}`} href="/tu">
      <img src={imgClock} alt="Contact" className="nav-icon" width="20" height="20"/>
          <span className= "span-t" style={{paddingLeft: "23.9px"}}>Ver Mas Tarde  </span>
        </Nav.Link> 
        : null }
        {expanded === true ? <Nav.Link className={`nav-link ${expanded ? 'nav-link-expanded' : 'nav-link'}`} href="/tu">
      <img src={imgLike} alt="Contact" className="nav-icon" width="20" height="20"/>
          <span className= "span-t" style={{paddingLeft: "23.9px"}}>Videos que me..  </span>
        </Nav.Link> 
        : null }
        {expanded === true ? <hr className='separatos0'/> : null}
        {expanded === true ? 

    <Nav.Link className={`nav-link ${expanded ? 'nav-link-expanded' : 'nav-link'}`} href="/tu">
      <span className= "span-t" style={{paddingLeft: "23.9px"}}>Subcripciones</span>
    </Nav.Link> 
  : null 
}
        {expanded === true ? 
  subscription.map((image, index) => (
    <Nav.Link key={index} className={`nav-link ${expanded ? 'nav-link-expanded' : 'nav-link'}`} href="/tu">
      <img src={image} alt="Contact" className="nav-icon" width="20" height="20"/>
      <span className= "span-t" style={{paddingLeft: "23.9px"}}>{name[index]}</span>
    </Nav.Link> 
  )) 
  : null 
}

        
      </Nav>
    </div>
  )
}
