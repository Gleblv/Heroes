import { configureStore } from '@reduxjs/toolkit';
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') { // елси action приходит в качестве строки то dispatch-им нужный нам объект
        return next({ 
            type: action
        })
    }
    return next(action);
}

// const enhancer = (createStore) => (...args) => {
//     // eslint-disable-next-line no-const-assign
//     store = createStore(...args);

//     const oldDispatch = store.dispatch(); // сохраняем оригинальный dispatch
//     store.dispatch = (action) => { // перезаписываем оригинальный dispatch
//         if (typeof action === 'string') { // если строка то
//             return oldDispatch({ // возвращаем dispatch в который передаём сформированный объект
//                 type: action
//             })
//         }
//         return oldDispatch(action); // если не строка то помещаем объект в наш старый dispatch
//     }
//     return store;
// }

// const store = createStore(
//         combineReducers({heroes, filters}), 
//         compose(
//             applyMiddleware(ReduxThunk, stringMiddleware), 
//             window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//         );

const store = configureStore({
    reducer: {heroes, filters}, // передаём объект с reducer-ами
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware), // получаем стандартные middleware-ы и добавляем наш собственный
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;