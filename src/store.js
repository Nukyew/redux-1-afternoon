import {createStore} from 'redux'

const initialState = {
    recipeName: '',
    recipeCategory: '',
    authorFirstName: '',
    authorLastName: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_RECIPE_NAME = 'UPDATE_RECIPE_NAME'
export const UPDATE_RECIPE_CATEGORY = 'UPDATE_RECIPE_CATEGORY'
export const UPDATE_AUTHOR_FIRST_NAME = 'UPDATE_AUTHOR_FIRST_NAME'
export const UPDATE_AUTHOR_LAST_NAME = 'UPDATE_AUTHOR_LAST_NAME'
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS'
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS'
export const UPDATE_RECIPES = 'UPDATE_RECIPES'
export const CLEAR_STATE = 'CLEAR_STATE'
export const DELETE_RECIPE = 'DELETE_RECIPE'

const reducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_RECIPE_CATEGORY:
            return {...state, recipeCategory: action.paload}
        case UPDATE_INSTRUCTIONS:
            return {...state, instructions: [...state.instructions, action.payload]}
        case UPDATE_INGREDIENTS:
            return {...state, ingredients: [...state.ingredients, action.payload]}
        case UPDATE_AUTHOR_FIRST_NAME:
            return {...state, authorFirstName: action.payload}
        case UPDATE_AUTHOR_LAST_NAME:
            return {...state, authorLastName: action.payload}
        case UPDATE_RECIPE_NAME:
            return {...state, recipeName: action.payload}
        case UPDATE_RECIPES:
            const {recipeName, recipeCategory, authorFirstName, authorLastName, ingredients, instructions} = state
            const recipe = {recipeName, recipeCategory, authorFirstName, authorLastName, ingredients, instructions}
            const newRecipes = [...state.recipes, recipe]
            return {...state, recipes: newRecipes}
        case CLEAR_STATE:
            // const {recipeName} = state
            return {...state, recipeName: '', recipeCategory: '', authorFirstName: '', authorLastName: '', ingredients: [], instructions: []}
        case DELETE_RECIPE:
            const newRecipesList = [...state.recipes]
            newRecipesList.splice(action.payload, 1)
            return {...state, recipes: newRecipesList}
        default:
          return state
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )