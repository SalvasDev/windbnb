import React, { Fragment, useEffect, useState } from 'react'
import Filter from './components/Filter';
import Bar from './components/Bar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import styled from '@emotion/styled';



const Container = styled.div`

  width: min(95%, 1253px);
  margin: 0 auto;
  padding-top: 4.9rem;   

  @media (max-width: 553px) {
    padding-top: 2rem;
  }
  
`;


function App() {

const [busqueda, guardarBusqueda] = useState([]);
const [stays, guardarStays] = useState([]);
const [mostrar, guardarMostrar] = useState(false);
const [nadults, guardarnAdults] = useState(1);
const [nkids, guardarnKids] = useState(0);
const [nguests, guardarnGuests] = useState(0);





  useEffect (() => {

        const getStays = async () => {


        if (busqueda === '') return;

              const response = await fetch("stays.json");
              const resultado = await response.json();
              
              
              if ( busqueda.length === 0) {
                  guardarStays(resultado); 
                  return;
              } else {
                const filtStays = resultado.filter(resultado => (resultado.city === busqueda) && (resultado.maxGuests >= nguests));
                guardarStays(filtStays);
              }     

          } 
          getStays(); 

        }, );
  
        
    


  return (
    
    <Fragment>      
      { mostrar ?               
          <Filter 
          mostrar = { mostrar } 
          guardarMostrar = { guardarMostrar }
          guardarBusqueda = {guardarBusqueda}
          stays={stays}
          nadults = { nadults}
          guardarnAdults = {guardarnAdults}
          nkids = {nkids}
          guardarnKids = {guardarnKids}
          nguests = {nguests}
          guardarnGuests = {guardarnGuests}
          />             
        : null 
      }  
      <Container>
          <Bar
          mostrar = { mostrar } 
          guardarMostrar = { guardarMostrar }
          />
          
          <Gallery
            stays={stays}
          />
          <Footer
            autor='Salvador Sánchez'
          />
      </Container>
    </Fragment>
  );
}

export default App;
