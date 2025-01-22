import { createSelector } from 'reselect';  

// Селектор для отримання елементів контактів  
export const selectContacts = state => state.contacts.items;  

// Селектор для отримання імені фільтра  
export const selectFilter = state => state.filter.name;  

// Селектор для отримання відфільтрованих контактів  
export const selectFilteredContacts = createSelector(  
  [selectContacts, selectFilter],  
  (allContacts, filter) => {  
    return allContacts.filter(contact =>  
      contact.name.toLowerCase().includes(filter.toLowerCase())  
    );  
  }  
);