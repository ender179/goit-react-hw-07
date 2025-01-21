export const selectFilter = state => state.filter.name;  

export const selectContacts = state => state.contacts;  

export const selectFilteredContacts = state => {  
  const allContacts = selectContacts(state);  
  const filter = selectFilter(state);  

  return allContacts.filter(contact =>  
    contact.name.toLowerCase().includes(filter.toLowerCase())  
  );  
};