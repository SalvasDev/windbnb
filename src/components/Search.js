import React from 'react';
import styled from '@emotion/styled';


const Searchbtn = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    width: 297px;
    height: 55px;
    padding: 19px, 16px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    margin-right: 0;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 553px) {
        width: 100%;
        margin-bottom: 0;
    }

`;


const  Search = ({mostrar, guardarMostrar}) => {

      
    const mostrarDetalles = (mostrar, e) => {        
      e.preventDefault()

          if (mostrar) {
            guardarMostrar(true)
            return;
          }
          guardarMostrar(false);
        }
        

    
    return (
      
        <Searchbtn>           
            <input
                className="input-location"
                type="text"
                placeholder='Add location'
                onClick={ (e) => mostrarDetalles(true, e)}
                                      
             />

            <input
                className="input-guests"
                type="text"
                placeholder='Add guests'    
                onClick={ (e) => mostrarDetalles(true, e)}
 
            />

            <span  
             onClick={ (e) => mostrarDetalles(true, e)}
             className="material-symbols-rounded search__class">
                search
            </span>
        </Searchbtn>    

      );
}
 
export default Search;