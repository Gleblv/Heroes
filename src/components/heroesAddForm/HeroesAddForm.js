import { v4 as uuidv4 } from 'uuid';
import {addHero} from '../../actions';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {useHttp} from '../../hooks/http.hook';

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const dispatch = useDispatch();
    const {request} = useHttp();

    const [heroName, setHeroName] = useState('');
    const [heroDescription, setHeroDescription] = useState(null);
    const [element, setElement] = useState(null);
    const [filtres, setFiltres] = useState(null);

    useEffect(() => {
        request("http://localhost:3001/filters", "GET")
            .then(data => setFiltres(data));
    }, []);

    const getFiltresList = (arr) => {
        return !arr ? null : arr.map(item => {
            return (
                item === "all" ? <option key={uuidv4()}>Я владею элементом...</option> : <option key={uuidv4()} value={item}>{item}</option>
            )
        })
    }

    const filtresList = getFiltresList(filtres);

    const getHeroData = (name, description, element) => {
        const id = uuidv4();

        return {
            id,
            name,
            description,
            element
        }
    }

    const newHero = getHeroData(heroName, heroDescription, element);

    return (
        <form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    onChange={(e) => setHeroName(e.target.value)}
                    value={heroName}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    onChange={(e) => setHeroDescription(e.target.value)}
                    value={heroDescription}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    onClick={(e) => setElement(e.target.value)}
                    value={element}>
                    {filtresList}
                </select>
            </div>

            <button onClick={(e) => {e.preventDefault(); request('http://localhost:3001/heroes', 'POST', JSON.stringify(newHero)); dispatch(addHero(newHero))}} type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;