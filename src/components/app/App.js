import { useHttp } from '../../hooks/http.hook';
import { useDispatch } from 'react-redux';
import { getFiltres } from '../../actions';
import { useEffect } from 'react';

import HeroesList from '../heroesList/HeroesList';
import HeroesAddForm from '../heroesAddForm/HeroesAddForm';
import HeroesFilters from '../heroesFilters/HeroesFilters';

import './app.scss';

const App = () => {
    const {request} = useHttp();
    const dispatch = useDispatch();

    useEffect(() => {
        request("http://localhost:3001/filters", "GET")
            .then(data => dispatch(getFiltres(data)));
    })
    
    return (
        <main className="app">
            <div className="content">
                <HeroesList/>
                <div className="content__interactive">
                    <HeroesAddForm/>
                    <HeroesFilters/>
                </div>
            </div>
        </main>
    )
}

export default App;