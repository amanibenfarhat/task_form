import React from 'react';


function Input() {
    return (
        <div className='row form-inline' >
            <div className='form-group col-md-6'>
              <label>Inter somthing here :</label>
              <input type="text" name="" value="" className="form-control"/>
              <div className='form-group col-md-3'>
                   <button type="button" className="btn btn-primary ">Enter</button>
              </div>
            </div>
        </div>

    );

}
export default Input;