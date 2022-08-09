import React from 'react';
import styled from '@emotion/styled';

const BarLocation = styled.div`


    .barLocation {
        display: flex;
        flex-direction: column;
        background: transparent;
        margin-left: 1rem;
        margin-top: 4.1rem;
        row-gap: 3.4rem;
        align-items: start;
        
    }

   .btnLoc {        
        border: none;
        background-color: transparent;
        color: #4F4F4F;
        font-family: 'Mulish', sans-serif; 
        font-weight: 400;
        font-size: 1.4rem;
    }

    .btnLoc:hover {
        color:  #828282;
    }

    
    .material-symbols-rounded {
    vertical-align: middle;
    font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48    
    }

    @media (max-width: 523px){

        .barLocation {
            width: 150%;
            margin-top: 3rem;

        }
    }

    @media (max-width: 418px){

        .barLocation {
            width: 150%;
            margin-top: 1rem;

        }
    }

`;



const Location = ({mostrarLoc, GuardarMostrarLoc, termino, guardarTermino}) => {

const agregaTermino = (e, valor) => {        
      e.preventDefault()
      guardarTermino(valor);
 }


    return ( 
        <BarLocation>
            <div className="barLocation">
         
                <button
                className="btnLoc"
                onClick= { (e) => {agregaTermino(e, 'Helsinki, Finland')}}
                >
                <span className="material-symbols-rounded">location_on</span>  Helsinki, Finland</button>
                
                <button
                className="btnLoc"
                onClick= { (e) => {agregaTermino(e, 'Turku, Finland')}}
                >
                <span className="material-symbols-rounded">location_on</span>  Turku, Finland</button>

                <button
                className="btnLoc"
                onClick= { (e) => {agregaTermino(e, 'Olulu, Finland')}}
                >
                <span className="material-symbols-rounded">location_on</span>  Oulu, Finland</button>

                <button
                className="btnLoc"
                onClick= { (e) => {agregaTermino(e, 'Vaasa, Finland')}}
                >
                <span className="material-symbols-rounded">location_on</span>  Vaasa, Finland</button>

            </div>
        </BarLocation>
     );
}
 
export default Location;
