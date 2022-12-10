/* eslint-disable default-case */
import { useSelector, useDispatch } from "react-redux";
import { filterHeroes } from '../../actions/index';
import { v4 as uuidv4 } from 'uuid';

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
    const dispatch = useDispatch();
    const filtres = useSelector(state => state.filtres);

    const getFiltresList = (arr) => {
        let className = "";
        return !arr ? null : arr.map(item => {
            switch(item) {
                case "all":
                    className = "btn btn-outline-dark";
                    break;
                case "fire":
                    className = "btn btn-danger";
                    break;
                case "water":
                    className = "btn btn-primary";
                    break;
                case "wind":
                    className = "btn btn-success";
                    break;
                case "earth":
                    className = "btn btn-secondary";
                    break;
                default:
                    return className;
            }

            return (
                <button key={uuidv4()} onClick={() => dispatch(filterHeroes(item))} className={className}>{item}</button>
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