import { createAsyncThunk } from '@reduxjs/toolkit';  
import axios from 'axios';  

// Ваша базова URL для API  
const BASE_URL = 'https://679108f3af8442fd7378c489.mockapi.io';  

// Функція для отримання контактів  
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {  
    try {  
        const response = await axios.get(`${BASE_URL}/contacts`);  
        return response.data;  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.message);  
    }  
});  

// Функція для додавання нового контакту  
export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {  
    try {  
        const response = await axios.post(`${BASE_URL}/contacts`, contact);  
        return response.data;  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.message);  
    }  
});  

// Функція для видалення контакту  
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {  
    try {  
        await axios.delete(`${BASE_URL}/contacts/${contactId}`);  
        return contactId;  
    } catch (error) {  
        return thunkAPI.rejectWithValue(error.message);  
    }  
});