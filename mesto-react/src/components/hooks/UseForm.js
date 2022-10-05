import React from "react";

 function UseForm(inputValues) {
  
  const [values, setValues] = React.useState(inputValues);

  const handleChange = (event) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value});
  };
  return {values, handleChange, setValues};
}

  export default UseForm