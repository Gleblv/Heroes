const initialState = {
    heroes: [],
    allHeroes: [],
    heroesLoadingStatus: 'idle', // idle - значит что у нас ничего не происходит
    filters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                allHeroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'DELETE_HERO': 
            const newHeroesList = state.heroes.filter(hero => hero.id !== action.payload);
            return {
                ...state,
                heroes: newHeroesList
            }
        case 'ADD_HERO':
            const newHero = action.payload;
            return {
                ...state,
                heroes: [...state.heroes, newHero],
                allHeroes: [...state.heroes, newHero]
            }
        case "GET_FILTRES":
            return {
                ...state,
                filtres: action.payload
            }
        case "FILTER_HEROES":
            if (action.payload === "all") {
                return {
                    ...state,
                    heroes: state.allHeroes
                }
            }

            const filterHeroes = state.allHeroes.filter(hero => hero.element === action.payload);
            return {
                ...state,
                heroes: filterHeroes
            }
        default: return state
    }
}

export default reducer;