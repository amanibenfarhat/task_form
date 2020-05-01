import React from 'react';

import './element.css';


function Element(props) {
    
            
    return (
       
        <div className='row-c'>
             
           <div className='col'>

          <p>{props.title} {props.number} min - {props.children}</p> 
          {props.obj && (
             <p>{props.obj.type} - {props.obj.date} </p>
          )}
            


              

           </div>
           <div className='col'>
                <a href='/#' onClick = {
                        props.delete
                        }>Delete </a>
                <a href='/#'>Update </a>        
           </div>
        </div>

    );

}
export default Element;