import './Card.css';
import React from 'react';
import Card from './Card';

const CardList = ({friend}) => {
    return(
        <div>
            {friend.map((user, i)=>{
                                    return (<Card key = {i} id = {user.id} 
                                                name = {user.name} 
                                                email = {user.email}/>
                                            );
                                    }
                        )
            }
             
        </div>
    );
}
export default CardList;