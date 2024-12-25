import { createSlice } from '@reduxjs/toolkit'

export const headerSlicer = createSlice({
    name: 'header',
    initialState: {
        headerText: "",
        headerSubtext: "",
        buttonKey: "",
        buttonVisible: false
    },
    reducers: {
        addHeaderText: (state, action) => {
            state.headerText = action.payload
        },
        addHeaderSubtext: (state, action) => {
            state.headerSubtext = action.payload
        },
        addButton: (state, action) => {
            state.buttonVisible = action.payload.buttonVisible;
            state.buttonKey = action.payload.buttonKey;
        },
    },
})

// Action creators are generated for each case reducer function
export const { addHeaderText, addHeaderSubtext, addButton } = headerSlicer.actions

export default headerSlicer.reducer
