import React, {useRef} from 'react'
import { Container } from 'react-bootstrap'
import { Shorts } from './Shorts'
import { VideoCubo } from './VideoCubo'
import imgLeftArrow from "../img/left-arrow.png"
import imgRightArrow from "../img/right-arrow.png"
import './HomeWrapper.css'

export const HomeWrapper = ({expanded}) => {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({ left: 200, behavior: 'smooth' });
  };
  
  const miniaturas = [
    'https://randompicturegenerator.com/img/picture-generator/54e2d24b4e55ad14f1dc8460962e33791c3ad6e04e507441722a72dd9e44c0_640.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoPlmdI9Je7Zk_xEU4aRAIy-3ebZiUlx9fQ&usqp=CAU',
    'https://randompicturegenerator.com/img/picture-generator/odd-socks-4424190_640.jpg',
    'https://s.yimg.com/ny/api/res/1.2/ujhbKBvPoRp72zKNdLrREg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://media.zenfs.com/en/insider_articles_922/c6ce8d0b9a7b28f9c2dee8171da98b8f',
    'https://random.onl/images/pictures/cat18.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DgWhv7FDDUAOHSzvIteDTikjGavh2psUUw&usqp=CAU',
    'https://random.onl/images/pictures/cat20.jpg',
    'https://random.onl/images/pictures/cat21.jpg',];
  
    const miniaturas1 = [
      'https://randompicturegenerator.com/img/picture-generator/55e3d5454a5bab14f1dc8460962e33791c3ad6e04e507441722872d69049cc_640.jpg',
      'https://randompicturegenerator.com/img/picture-generator/54e9d5454851ae14f1dc8460962e33791c3ad6e04e507440762a7cd4924cc6_640.jpg',
      'https://randompicturegenerator.com/img/picture-generator/54e0d7474850ac14f1dc8460962e33791c3ad6e04e507441722978d6944cc4_640.jpg',
      'https://randompicturegenerator.com/img/picture-generator/57e7d1474d5bac14f1dc8460962e33791c3ad6e04e50744172297cd5914cc7_640.jpg',
      'https://randompicturegenerator.com/img/picture-generator/53e0d74b4250ad14f1dc8460962e33791c3ad6e04e50744172277fd09549cd_640.jpg',
      'https://randompicturegenerator.com/img/picture-generator/54e3dd404c5aaf14f1dc8460962e33791c3ad6e04e5074417c2f7dd6954cc1_640.jpg',
      'https://randompicturegenerator.com/img/picture-generator/54e2d24b4e55ad14f1dc8460962e33791c3ad6e04e507441722a72dd9e44c0_640.jpg',
      'https://randompicturegenerator.com/img/picture-generator/55e4d6404354a814f1dc8460962e33791c3ad6e04e507440762a7cd1934cc4_640.jpg',
      'https://random.onl/images/pictures/cat21.jpg',
];
  
  const canales = [
    'Canal1',
    'Canal2',
    'Canal3',
    'Canal4',
    'Canal5',
    'Canal6',
    'Canal7',
    'Canal8',
    'Canal9',
    'Canal10',
    'Canal11',
    'Canal12'];
  
  const nombresCanales = [
    'Nombre Canal 1',
    'Nombre Canal 2',
    'Nombre Canal 3',
    'Nombre Canal 4',
    'Nombre Canal 5',
    'Nombre Canal 6',
    'Nombre Canal 7',
    'Nombre Canal 8',
    'Nombre Canal 9',
    'Nombre Canal 10',
    'Nombre Canal 11',
    'Nombre Canal 12'];
  
  const titulos = [
    'Título 1',
    'Título 2',
    'Título 3',
    'Título 4',
    'Título 5',
    'Título 6',
    'Título 7',
    'Título 8',
    'Título 9',
    'Título 10',
    'Título 11',
    'Título 12'];
  
  const views = [
    '1.2K views',
    '2.5K views',
    '3K views',
    '4.1K views',
    '5K views',
    '6.2K views',
    '7.8K views',
    '8.3K views',
    '9K views',
    '10.5K views',
    '11.1K views',
    '12.6K views'];
  
  const tiempos = [
    '2 days ago',
    '1 week ago',
    '3 days ago',
    '4 hours ago',
    '5 weeks ago',
    '6 months ago',
    '7 years ago',
    '8 minutes ago',
    '9 hours ago',
    '10 seconds ago',
    '11 days ago',
    '12 months ago'];
  
  const duraciones = [
    '12:34',
    '05:20',
    '15:10',
    '03:45',
    '09:58',
    '22:11',
    '07:07',
    '19:45',
    '02:34',
    '08:16',
    '11:22',
    '06:55'];
  
  const avatares = [
    'https://via.placeholder.com/150/FF00FF',
    'https://via.placeholder.com/150/00FFFF',
    'https://via.placeholder.com/150/FFFF00',
    'https://via.placeholder.com/150/FF0000',
    'https://via.placeholder.com/150/008000',
    'https://via.placeholder.com/150/0000FF',
    'https://via.placeholder.com/150/800080',
    'https://via.placeholder.com/150/FFA500',
    'https://via.placeholder.com/150/00FF00',
    'https://via.placeholder.com/150/FFC0CB',
    'https://via.placeholder.com/150/FFD700',
    'https://via.placeholder.com/150/4B0082'];

  const links = [
    'https://youtu.be/dQw4w9WgXcQ?si=fk4VamIersGWiQzM',
    'https://youtu.be/dQw4w9WgXcQ?si=fk4VamIersGWiQzM',
    'https://youtu.be/dQw4w9WgXcQ?si=fk4VamIersGWiQzM',
    'https://youtu.be/dQw4w9WgXcQ?si=fk4VamIersGWiQzM',
    'https://youtu.be/dQw4w9WgXcQ?si=fk4VamIersGWiQzM',
    'https://youtu.be/dQw4w9WgXcQ?si=fk4VamIersGWiQzM',
    'https://youtu.be/dQw4w9WgXcQ?si=fk4VamIersGWiQzM',
    'https://youtu.be/dQw4w9WgXcQ?si=fk4VamIersGWiQzM',
    'https://youtu.be/dQw4w9WgXcQ?si=fk4VamIersGWiQzM',
    'https://youtu.be/dQw4w9WgXcQ?si=fk4VamIersGWiQzM',
  ];  


  
    
    return (
      <Container fluid className='WrapperVideo me-5'>
        <div className={`WrapperVideoT ${expanded ? 'expandedWrapperVideoT' : 'WrapperVideoT'}`}>
        <h4>Continuar Viendo</h4>
        </div>
        <div className={`WrapperVideoT ${expanded ? 'expandedWrapperVideoT' : 'WrapperVideoT'}`}>
        {miniaturas.map((miniatura, index) => (
                  <VideoCubo
                      key={index}
                      link={links[index]}
                      miniatura={miniatura}
                      locoCanal={avatares[index]}
                      titulo={titulos[index]}
                      NameCanal={nombresCanales[index]}
                      Views={views[index]}
                      Tiempo={tiempos[index]}
                      duration={duraciones[index]}
                  />
  
              ))}  
        </div>

        <div className={`WrapperVideoT ${expanded ? 'expandedWrapperVideoT' : 'WrapperVideoT'}`}>
        <h4>Recomendados</h4>
        </div>
        <div className={`WrapperVideoT ${expanded ? 'expandedWrapperVideoT' : 'WrapperVideoT'}`}>
        {miniaturas.map((miniatura, index) => (
                  <VideoCubo
                      key={index}
                      link={links[index]}
                      miniatura={miniatura}
                      locoCanal={avatares[index]}
                      titulo={titulos[index]}
                      NameCanal={nombresCanales[index]}
                      Views={views[index]}
                      Tiempo={tiempos[index]}
                      duration={duraciones[index]}
                  />
  
              ))}  
          </div>


        <div className={`WrapperVideoT ${expanded ? 'expandedWrapperVideoT' : 'WrapperVideoT'}`}>
        <h4>Mi Mix</h4>
        </div>
        <div className={`WrapperVideoT ${expanded ? 'expandedWrapperVideoT' : 'WrapperVideoT'}`}>
        {miniaturas.map((miniatura, index) => (
                  <VideoCubo
                      key={index}
                      link={links[index]}
                      miniatura={miniatura}
                      locoCanal={avatares[index]}
                      titulo={titulos[index]}
                      NameCanal={nombresCanales[index]}
                      Views={views[index]}
                      Tiempo={tiempos[index]}
                      duration={duraciones[index]}
                  />
  
              ))}  
          </div>

          <div className={`WrapperVideoT ${expanded ? 'expandedWrapperVideoT' : 'WrapperVideoT'}`}>
        <h4>Youtube Shorts</h4>
        </div>
          <div className={`CarrouselText ${expanded ? 'expandedCarrouselText' : 'CarrouselText'}`}>
      <img src={imgLeftArrow} alt="left" className="nav-iconCarrousel" width="20" height="20" onClick={scrollLeft}></img>
      <div className="scroll-container" id="scroll-container" ref={scrollContainer}>
          
          {miniaturas1.map((miniatura, index) => (
                      <Shorts
                          key={index}
                          miniatura={miniatura}
                          titulo={titulos[index]}
                          Views={views[index]}
                      />
      
                  ))}

          {miniaturas1.map((miniatura, index) => (
                            <Shorts
                                key={index}
                                miniatura={miniatura}
                                titulo={titulos[index]}
                                Views={views[index]}
                            />
            
                        ))}
        
        </div>
        <img src={imgRightArrow} alt="right" className="nav-iconCarrousel" width="20" height="20" onClick={scrollRight}></img>
        </div>

        </Container>
    )
    
    
    
}
