import React from 'react';
import styled from '@emotion/styled';

 
const Containguest = styled.div `
    display: flex;
    row-gap: 3rem;
    flex-direction: column;
    width: 150px;
    margin-top: 3rem;
    margin-left: 109%;    
    font-family: 'Mulish', sans-serif;



    .row_edit {
        display: block;
    }

    button {
        width: 23px;
        height: 23px;
        border: 1px solid #828282;
        border-radius: 4px;
        padding: 0;  
        background-color: transparent;
        cursor: pointer;     
        
    }

    button:hover {
        background-color: #BDBDBD;
    }

    .material-symbols-rounded {
        font-size: 14px;
        color: #828282;
        line-height: 22px;
    }

    .row_edit {
        display: flex;
        align-items: center;
        column-gap: 1rem;
    }

    .groupguests p {
        margin-bottom: .2rem;
        font-size: 1.4rem;
        font-weight: 700;
    } 

    .groupguests h3 {
        margin-top: 0;
        font-weight: 400;
        margin-bottom: 1.2rem;
        color: #BDBDBD;
    } 

    .cant {
        color: #333333;
        font-size: 1.4rem;
        font-weight: 700;
    }

     @media (max-width: 418px) {
        row-gap: 7rem;
        margin-left: 2rem;

        h1 {
            margin-bottom: 1rem;
        }  
    }
`;



const Guests = ({nadults, guardarnAdults, nkids, guardarnKids, nguests, guardarnGuests}) => {

// Restar adultos 

const restAdults = () => {

    if (nadults === 1) return;
    const nadultsActual = nadults - 1;
    guardarnAdults(nadultsActual);
    
}




    return (  
        <Containguest>
           <div className="groupguests">
           <p>Adults</p>
           <h3>Ages 13 or Above</h3> 
           <div className="row_edit">
                <button
                    onClick = {restAdults}
                >
                    <span className="material-symbols-rounded">
                    remove
                    </span>
                </button>

                <span className="cant">{nadults}</span>

                <button>
                    <span className="material-symbols-rounded">
                    add
                    </span>
                </button>
            </div>
           </div>

           <div className="groupguests">
                <p>Children</p>    
                <h3>Ages 2 to 12 years</h3> 
                <div className="row_edit">
                    <button>
                        <span className="material-symbols-rounded">
                        remove
                        </span>
                    </button>

                    <span className="cant">0</span>

                    <button>
                        <span className="material-symbols-rounded">
                        add
                        </span>
                    </button>
                </div>
            </div>
             


        </Containguest>
    );
}
 
export default Guests;