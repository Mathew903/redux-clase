import { configureStore } from '@reduxjs/toolkit';
import taskSlice from '../taskSlice';

//configuramos el estado
export const store = configureStore({
	reducer: {
		tasks: taskSlice,
	},
});
