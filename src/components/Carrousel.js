import React, {useRef} from 'react'
import { Container } from 'react-bootstrap'
import imgLeftArrow from "../img/left-arrow.png"
import imgRightArrow from "../img/right-arrow.png"
export const Carrousel = ({expanded}) => {
    const scrollContainer = useRef(null);

    const scrollLeft = () => {
      scrollContainer.current.scrollBy({ left: -200, behavior: 'smooth' });
    };
  
    const scrollRight = () => {
      scrollContainer.current.scrollBy({ left: 200, behavior: 'smooth' });
    };
  return (
    <Container fluid className='CarrouselContainer fixed-carrousel mt-5 me-5'>
      <div className={`CarrouselText ${expanded ? 'expandedCarrouselText' : 'CarrouselText'}`}>
      <img src={imgLeftArrow} alt="left" className="nav-iconCarrousel" width="20" height="20" onClick={scrollLeft}></img>
      <div className="scroll-container" id="scroll-container" ref={scrollContainer}>
          
          <div className="scroll-item">Todos</div>
          <div className="scroll-item">Videojuegos</div>
          <div className="scroll-item">Musica</div>
          <div className="scroll-item">Manga</div>
          <div className="scroll-item">Pokemon</div>
          <div className="scroll-item">Amongus</div>
          <div className="scroll-item">Minecraft</div>
          <div className="scroll-item">KanyeWest</div>
          <div className="scroll-item">KanyeWest</div>
          <div className="scroll-item">KanyeWest</div>
          <div className="scroll-item">KanyeWest</div>
          <div className="scroll-item">KanyeWest</div>
          <div className="scroll-item">KanyeWest</div>
          <div className="scroll-item">KanyeWest</div>
          <div className="scroll-item">KanyeWest</div>
        
        </div>
        <img src={imgRightArrow} alt="right" className="nav-iconCarrousel" width="20" height="20" onClick={scrollRight}></img>
        </div>
      </Container>
  )
}
