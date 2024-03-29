import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ticketService from './ticketService'


export const getTickets = createAsyncThunk('tickets/getAll', async(_, thunkAPI) => {
    try {
        return await ticketService.getTickets()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const createTicket = createAsyncThunk('tickets/create', async(ticketData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await ticketService.createTicket(ticketData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const likeTicket = createAsyncThunk('tickets/like', async(ticketId, thunkAPI) => {
    try {
        return await ticketService.likeTicket(ticketId)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})


const initialState = {
    tickets: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

export const ticketSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        reset: (state) => {
            state.tickets = []
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
        
    },
    extraReducers:(builder) => {
        builder
        .addCase(getTickets.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getTickets.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.tickets = action.payload
        })
        .addCase(getTickets.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(createTicket.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createTicket.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.tickets.push(action.payload)
        })
        .addCase(createTicket.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(likeTicket.pending, (state) => {
            state.isLoading = true
        })
        .addCase(likeTicket.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            const ticket = state.tickets.find(ticket => ticket._id === action.payload.id)
            ticket.numLikes = action.payload.numLikes
        })
        .addCase(likeTicket.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const ticketReducer = ticketSlice.reducer
export const { reset } = ticketSlice.actions