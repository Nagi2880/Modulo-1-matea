import React from 'react';



 function Datepicker() {
     
    const count = 0;

function Day(){
    while (count <31){
      const setCount =  count + 1;
      <option>{setCount}</option>;
    }
}
    return (
    
     <select>{Day()}</select>    
         
            
   
    );
}
export default Datepicker