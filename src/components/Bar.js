import React from 'react';
import logo from '../img/logo.svg';
import Search from './Search';
import styled from '@emotion/styled';

const Barheader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 553px) {
        flex-direction: column;
        row-gap: 2rem;
        width: 100%;

        .logo {
           align-self: start;
        }

         .search-btn {
           align-self: start;
           width: 100%;
        }
    }

    
`;

const Bar = ({mostrar, guardarMostrar}) => {
    return (
        <Barheader>
            <div className="logo">
            <img src={logo} alt="Logo Windbnb" />
            </div>
            <div className="search-btn">
            <Search
             mostrar = { mostrar } 
             guardarMostrar = { guardarMostrar }
            />
            </div>
        </Barheader>
    );
}
 
export default Bar;