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