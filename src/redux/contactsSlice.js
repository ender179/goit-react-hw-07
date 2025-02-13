import { createSlice } from '@reduxjs/toolkit';  
import { fetchContacts, addContact, deleteContact } from './contactsOps';  

const contactsSlice = createSlice({  
    name: 'contacts',  
    initialState: {  
        items: [],  
        loading: false,  
        error: null,  
    },  
    reducers: {  
    },  
    extraReducers: (builder) => {  
        builder  
            .addCase(fetchContacts.pending, (state) => {  
                state.loading = true;  
            })  
            .addCase(fetchContacts.fulfilled, (state, action) => {  
                state.loading = false;  
                state.items = action.payload;  
            })  
            .addCase(fetchContacts.rejected, (state, action) => {  
                state.loading = false;  
                state.error = action.payload;  
            })  
            .addCase(addContact.pending, (state) => {  
                state.loading = true;  
            })  
            .addCase(addContact.fulfilled, (state, action) => {  
                state.loading = false;  
                state.items.push(action.payload);  
            })  
            .addCase(addContact.rejected, (state, action) => {  
                state.loading = false;  
                state.error = action.payload;  
            })  
            .addCase(deleteContact.fulfilled, (state, action) => {  
                state.loading = false;  
                state.items = state.items.filter(contact => contact.id !== action.payload);  
            });  
    },  
});  

export default contactsSlice.reducer;