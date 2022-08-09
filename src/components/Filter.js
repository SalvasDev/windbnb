import React from 'react';
import Searchbig from './Searchbig';
import styled from '@emotion/styled';




const Contglobal =styled.div` 
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(79, 79, 79, 0.4);    

    .btn__close {
        position: relative;
        display: flex;
        background-color: transparent;
        border: none;
        cursor: pointer;
        margin-top: 2rem;
        margin-right: 2rem;
        margin-left: auto;
        margin-bottom: 0;
        z-index: 100;
    }  
`;

const Container = styled.div`
        position: absolute;
        margin-top: -46rem;
        background-color:  #FFFFFF;
        width: 100%;
        height: 50rem;
        /* transition: all 5s ease-in-out 5s; */
        transform: translateY(46rem);

        @media (max-width: 418px) {     
                    height: 75rem;
                }
      

`;

const Contfilter = styled.div`    
    width: min(95%, 1253px);
    margin: 0 auto;
    padding-top: 7rem;
`;



const Filter = ({ stays, mostrar, guardarMostrar, guardarBusqueda, nadults, guardarnAdults, nkids, guardarnKids, nguests, guardarnGuests}) => {

 const ocultarDetalles = (mostrar, e) => {        
      e.preventDefault()

          if (mostrar) {
            guardarMostrar(false)
            return;
          }
          guardarMostrar(true);
        }



    return (
        
        <Contglobal>

            <Container>            
                <button 
                        className="btn__close"
                        onClick={ (e) => ocultarDetalles(true, e)}
                    >
                        <span className="material-symbols-rounded">close</span>
                </button> 

                <Contfilter>
                    <Searchbig 
                        satys = {stays}
                        mostrar = {mostrar}
                        guardarMostrar = {guardarMostrar}
                        guardarBusqueda={guardarBusqueda}
                        nadults = {nadults}
                        guardarnAdults = {guardarnAdults}
                        nkids = {nkids}
                        guardarnKids = {guardarnKids}
                        nguests = {nguests}
                        guardarnGuests = {guardarnGuests}
                    />
                </Contfilter>
            </Container>

        </Contglobal>   
    );
}
 
export default Filter;