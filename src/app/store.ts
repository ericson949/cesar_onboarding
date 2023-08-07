import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import EmployeeReducer from "../features/employee/EmployeeSlice.ts"
export const store = configureStore({
    reducer: {
        employeesReducer:EmployeeReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    consultantApiGetaway: new EmployeeApiGetawayHttp(),
                }
            },
        })
})

setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch