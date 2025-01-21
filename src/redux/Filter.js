import React from 'react';  
import { useDispatch } from 'react-redux';  
import { setFilter } from '../redux/filterSlice';  

const Filter = () => {  
    const dispatch = useDispatch();  

    const handleChange = (e) => {  
        dispatch(setFilter(e.target.value));  
    };  

    return (  
        <input type="text" onChange={handleChange} placeholder="Filter contacts" />  
    );  
};  

export default Filter;