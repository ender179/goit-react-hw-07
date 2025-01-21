import { createSlice } from '@reduxjs/toolkit';  

const filterSlice = createSlice({  
    name: 'filter',  
    initialState: {  
        name: ''   
    },  
    reducers: {  
        setFilter(state, action) {  
            state.name = action.payload; 
        }  
    }  
});  

// Експорт дій та редюсера  
export const { setFilter } = filterSlice.actions;  
export default filterSlice.reducer;