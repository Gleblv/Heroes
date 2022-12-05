import { useHttp } from "../../hooks/http.hook";
import { useState, useEffect } from "react";

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
    const {request} = useHttp();

    const [filtres, setFiltres] = useState(null);

    useEffect(() => {
        request("http://localhost:3001/filters", "GET")
            .then(data => setFiltres(data));
    }, []);

    const getFiltresList = (arr) => {
        return !arr ? null : arr.map(item => {
            return (
                <button className={item}>{item}</button>
            )
        })
    }

    const filtresList = getFiltresList(filtres);

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {filtresList}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;