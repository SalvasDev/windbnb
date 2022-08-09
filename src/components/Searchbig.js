import React, { useState } from 'react';
import Error from './Error';
import Location from './Location';
import Guests from './Guests';
import styled from '@emotion/styled';


const Global = styled.div`
    width: 100%;

    .Searchbtn {
        display: flex;
        flex-direction: row;
        background-color: transparent;
        width: 100%;
        height: 55px;
    }  
    
    &:hover {
        cursor: unset;
    }

    .edit__title {
        margin-top: -3rem;
        margin-bottom: 2rem;
    }

    input {
        border: none;
        width: 100%;
        height: 100%;
        padding-left: 16px;
        padding-right: 16px;
        line-height: 10rem;
        padding-top: 1.4rem;
        
    }

    .group1, .group2, .group3{
        display: flex;
        flex-direction: row;
        background-color: transparent;
        width: 33.3%;
        height: 55px;
        padding: 19px, 16px;
        border-radius: 16px;
        margin-right: 0;
    }

    .group1 {
        border-radius: 16px 0px 0px 16px;
        box-shadow: -1px 1px 6px rgba(0, 0, 0, 0.1);

    }
    
    .group2 {
        border-radius: 0;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);

    }

     .group3 {
        border-radius: 0px 16px 16px 0px;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);

    }

    input:focus {
        outline: none;
        border: 1px solid #333333;
        border-radius: 1.6rem;
    }

    input:last-of-type {
        width: 100%;
        padding-left: 1.6rem;
        
    }

    input::placeholder {
        
    }

    input::content {
        margin-top: 1.2rem;
    }

   
    .contsearch {
        display: flex;
        width: 395px;
        justify-content: center;
    }

    .continfo {
        display: grid;
        grid-template-columns: 32% 1fr;
    }

    .tit_location {
         margin-left: 1.6rem;
         font-family: 'Mulish', sans-serif;
         font-size: 9px;
         font-weight: 800;
         margin-top: 1rem;
         position: absolute;
}

    .btnsearch {
        display: flex;
        margin-right: auto;
        margin-left: auto;
        align-self: center;
        border: none;
        width: 127px;
        height: 48px;
        background-color: #EB5757;
        color: white;
        border-radius: 1.6rem;
        font-size: 1.4rem;
        line-height: 4.5rem;
        cursor: pointer;
    }

     .btnsearch span {
        color: white;
        margin-left: 1.7rem;
        margin-right: .5rem;

    }

     .btnsearch:hover {
        transition: .3s;
        background-color: #fc9696;
    }

    

    @media (max-width: 418px) {
        .Searchbtn {
            flex-direction: column;    
            margin-left: 1rem;
            margin-right: 1rem;
            height: 165px;
            width: 100%;
        } 

        p {
            margin-top: -4rem;
            margin-left: 1rem;
        }

        .group1, .group2 {
            width: 95%;
            margin-right: 1rem;
        }

        .group1 {
            border-radius: 16px 16px 0px 0px;
            box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
        }

        .group2 {
            border-radius: 0px 0px 16px 16px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

        }

        .group3 {
            box-shadow: none;
            position: absolute;
            margin-top: 50rem;
            align-self: center;
        }


    }
    
`;



const  Searchbig = ({mostrar, guardarMostrar, stays, guardarBusqueda, nadults, guardarnAdults, nkids, guardarnKids, nguests, guardarnGuests}) => {

    const [termino, guardarTermino] = useState('');
    const [error, guardarError] = useState(false);
    const [mostrarLoc, guardarMostrarLoc] = useState(false);
    const [mostrarGuests, guardarMostrarGuests] = useState(false);



    const buscarStays = e => {
        e.preventDefault();

        // actualiza el número de huespedes
          guardarnGuests(totalGuests)

          //Cierra el filtro
          guardarMostrar(false);

        // Validar
        if (termino.trim() === '' ) {
            guardarError(true);
            return;
        }
        guardarError(false);

       
    // Enviar el término de búsqueda hacia el componente principal


    if ((termino.split(" ")).length === 1) {
         guardarBusqueda(termino);
         return;
        } 
        guardarBusqueda((termino.split(' ').slice(0, -1).join(' '))
                    .substring(0, (termino.split(' ').slice(0, -1).join(' ')).length - 1))      
    }


    const mostrarDetallesLoc = (mostrar, e) => {        
      e.preventDefault()

          if (mostrar) {
            guardarMostrarLoc(true)            
            return;
          }
          guardarMostrarLoc(false);
        }



     const mostrarDetallesGuests = (mostrar, e) => {        
      e.preventDefault()

          if (mostrar) {
            guardarMostrarGuests(true)
            return;
          }
          guardarMostrarGuests(false);
          
        }


        const  totalGuests = nadults + nkids;

        


    return (
      <Global>

        <p className="edit__title">Edit your search</p>
        <form
            onSubmit = {buscarStays} 
          >
        <div className="Searchbtn">           

       
            <div className="group1">
            <span className="tit_location">LOCATION</span>    
            <input
                className="input-location"
                type="text"
                placeholder='Add Location'
                value={termino}
                onClick={ (e) => {
                mostrarDetallesGuests(false, e)
                mostrarDetallesLoc(true, e)
                }}
                onChange={ (e) => guardarTermino(e.target.value)}
             />
            </div>
           
            <div className="group2">
            <span className="tit_location">GUESTS</span>   
            <input
                className="input-guests"
                type="text"
                value={totalGuests}
                placeholder='Add guests'
                onChange={(e) => guardarnGuests(e.target.value)}
                onClick= { (e) => {
                     mostrarDetallesGuests(true, e)
                     mostrarDetallesLoc(false, e);
                     }}              
                   
            />
            </div>

            <div className="group3">
            <div className="contsearch">
                <button 
                    className="btnsearch"
                    type='submit'
                    >
                    <span className="material-symbols-rounded search__class">
                    search
                    </span>Search
                </button>

            </div>
            </div>  
        </div>     
        { error ? <Error mensaje = 'Agrega un término de búsqueda' /> : null }
    </form>

        
        <div className="continfo">
        
         { mostrarLoc ?               
          <Location   
          termino = {termino}
          guardarTermino = {guardarTermino}     
        />             
        : null }

         { mostrarGuests ?               
          <Guests
            nadults = {nadults}
            guardarnAdults = {guardarnAdults}
            nkids = {nkids}
            guardarnKids = {guardarnKids}
            nguests = {nguests}
            guardarnGuests = {guardarnGuests}
          />             
        : null }
  
        </div>
       
        

      
        </Global> 

      );
}
 
export default Searchbig;




