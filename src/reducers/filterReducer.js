import { HANDLE_CLICK, HANDLE_CLOSE, FILTER_SUNGLASSES, FILTER_SHIRTS, FILTER_SHOES, FILTER_PANTS } from '../actions/types'

const initialState = {
    anchorEl: null,
    filterItems: 'All products'
}
export default (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_CLICK:
            return { ...state, achhorEl: event.currentTarget };
        case HANDLE_CLOSE:
            return { ...state, achhorEl: null };
        case FILTER_SUNGLASSES:
            return { ...state, filterItems: 'Sunglasses' };
        case FILTER_SHIRTS:
            return { ...state, filterItems: 'Shirts' };
        case FILTER_SHOES:
            return { ...state, filterItems: 'Shoes' };
        case FILTER_PANTS:
            return { ...state, filterItems: 'Pants' };
        default:
            return state;
    }
}