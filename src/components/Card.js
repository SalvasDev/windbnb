import React from 'react';
import styled from '@emotion/styled';

const Cardcontainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
    margin: 0;
    width: 100%;
`;

const Imagehost = styled.div`
    max-width: 100%;
    max-height: 267px;
    min-height: 80%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 24px;

     }
`;

const Rowhosttype = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin: 0;
    column-gap: 1rem;

    p {
        color:  #828282;
    }
`;

const Ratinggroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    column-gap: .7rem;

    span {
        color: #EB5757;
    }
`;

const Superhost = styled.div`
    border: 1px solid  #4F4F4F;;
    border-radius: 12px;
    padding: 7px 9px;
    font-weight: 700;
    color:  #4F4F4F;

    @media (max-width: 553px) {
       
       span { 
            font-size: 10px;
       }
    }
`;

const Titleplace = styled.h2`
    font-size: 1.6rem;
    margin: 0;
    font-weight: 600;
`;

const Card = ({stays}) => {
    
    // Extraer variables
const {superHost, title, rating, type, beds, photo } = stays;




    return (
        <Cardcontainer>
            <Imagehost>
                <img src={photo} alt="Stay" />
            </Imagehost>
            <Rowhosttype>
                { superHost ?
                <Superhost>
                    <span>SUPERHOST</span>
                </Superhost>
                : null
                }
                <p>{type}</p>
                { beds ? 
                    <p className="Number_beds">{beds} beds</p>
                : null        
                }
                <Ratinggroup>
                    <span className="material-symbols-rounded">star</span> 
                    <p>{rating}</p>
                </Ratinggroup>
            </Rowhosttype>

            <Titleplace>{title}</Titleplace> 

        </Cardcontainer>
      );
}
 
export default Card;