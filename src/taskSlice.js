import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{ id: '1', titulo: 'titulo1', descripcion: 'descripcion1' },
	{ id: '2', titulo: 'titulo2', descripcion: 'descripcion2' },
	{ id: '3', titulo: 'titulo3', descripcion: 'descripcion3' },
	{ id: '4', titulo: 'titulo4', descripcion: 'descripcion4' },
	{ id: '5', titulo: 'titulo5', descripcion: 'descripcion5' },
	{ id: '6', titulo: 'titulo6', descripcion: 'descripcion6' },
];

//creamos el estado con configuraciones que nos provee redux
const taskSlice = createSlice({
	name: 'tasks', //nombre del estado
	initialState, //estado inicial
	reducers: { //propiedad que contiene las funciones para poder actualizar nuestro estado
		removeTask: (state, action) => {//se les pasa el state y el action
			const taskFound = state.find((task) => task.id === action.payload);
			if (taskFound) state.splice(state.indexOf(taskFound), 1);
        },
        addTask: (state, action) => {
            state.push(action.payload);
        }
	},
});

export default taskSlice.reducer; //exportamos el estado
export const { removeTask, addTask } = taskSlice.actions; //exportamos los reducers
