export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const deleteHero = (heroId) => {
    return {
        type: "DELETE_HERO",
        payload: heroId
    }
}

export const addHero = (data) => {
    return {
        type: "ADD_HERO",
        payload: data
    }
}

export const getFiltres = (filtres) => {
    return {
        type: "GET_FILTRES",
        payload: filtres
    }
}

export const filterHeroes = (filter) => {
    return {
        type: "FILTER_HEROES",
        payload: filter
    }
}