import { configureStore } from '@reduxjs/toolkit';  
import contactsReducer from './contactsSlice';  
import filterReducer from './filterSlice'; // Імпорт фільтр-слайсу  

const store = configureStore({  
    reducer: {  
        contacts: contactsReducer,  
        filter: filterReducer // Додавання фільтра до store  
    },  
});  

export default store;