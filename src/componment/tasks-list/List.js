import React from 'react';
import Element from '../tasks/element'


function List(props) {
  
    return (
      <div>
        {props.objects.map((object,index)=>(
          <Element obj={object.details}  number={object.duration} title={object.title} key={index}
           
          >
{object.description}
        </Element>

          ))
        }
     
      </div>
    );

}
export default List;