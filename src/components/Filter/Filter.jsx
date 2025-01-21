import React from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { setFilter } from '../../redux/filterSlice'; 
import styles from './Filter.module.css';  

const Filter = () => {  
    const dispatch = useDispatch();  
    const filter = useSelector((state) => state.filter.name);  

    return (  
        <input   
            className={styles.filter}  
            type="text"  
            value={filter}  
            onChange={(e) => dispatch(setFilter(e.target.value))}  
            placeholder="Пошук контактів"   
        />  
    );  
};  

export default Filter;