import React, { Fragment } from 'react';
import Card from './Card';
import styled from '@emotion/styled';



const Contgallery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(395px, 1fr));
    margin: 3.2rem auto 0 auto;
    row-gap: 4.9rem;
    column-gap: 3.2rem;

    @media(max-width: 1316px) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }  
   
`;


const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6.1rem;
  font-weight: 700;

  h1 {
    font-size: 2.4rem;
     color: #333333;
  }

    p {
    color: #4F4F4F;
    font-weight: 500;
  }
`;

const Gallery = ({stays}) => {
    
   const { country } = stays;


   return ( 
   <Fragment>
        <Title>       
              <h1>Stays in {country} </h1>
              <p>{stays.length}+stays</p>
          </Title>
      
        <Contgallery>
            { stays.map( stays => (
                <Card
                    key={stays.photo}
                    stays={stays}
                />
            ))}         
        </Contgallery>
    </Fragment>     
     );
}
 
export default Gallery;