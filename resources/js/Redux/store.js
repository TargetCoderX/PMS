import { configureStore } from '@reduxjs/toolkit'
import headerSlicer  from './Reducers/HeaderReducer'

export default configureStore({
    reducer: {
        headerReducer: headerSlicer,
    },
})
