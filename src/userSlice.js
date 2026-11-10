import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 

const API = "https://dummyjson.com/users";

export const fetchUser = createAsyncThunk(
    "users/fetchUsers",
    async() => {
        const res = await fetch(API);
        const data = await res.json();
        return data.user;
    }
)

export const addUser = createAsyncThunk(
    "users/add",
    async (user) => {
        const res = await fetch(`${API}/add`,{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(user),
        })
        return await res.json();
    }
)

export const editUser = createAsyncThunk(
    "users/edit",
    async (user) => {
        const res = await fetch(`${API}/${user.id}`,{
            method:"PUT",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(user),
        })
        return await res.json();
    }
)

export const removeUser = createAsyncThunk(
    "users/delete",
    async (user) => {
        const res = await fetch(`${API}/${id}`,{
            method:"DELETE",
            
        })
        return await res.json();
    }
)

const userSlice = createSlice({
    name : "users",

    initialState:{
        users:[],
        loading:false,
    },
    reducers : {},

    extraReducers : (builder) => {
        builder

        .addCase(fetchUser.fulfilled,(state,action) => {
            state.users.push(action.payload);
        })

        .addCase(editUser.fulfilled,(state,action) => {
            const index = state.user.findIndex(
                (u) => u.id === action.payload.id
            )
            if (index !== -1){
                state.user[index]={
                ...state.users[index],
                ...action.payload
            }
            }

        })

        .addCase(removeUser.fulfilled,(state,action) =>{
            state.users = state.users.filter(
                (u) => u.id !== action.payload.id
            )
        })
        
    }



})
export default userSlice.reducer;