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

// Експортуємо дії та редюсер  
export const { setFilter } = filterSlice.actions;  
export default filterSlice.reducer;