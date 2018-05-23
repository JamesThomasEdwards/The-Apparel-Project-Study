import { HANDLE_CLICK, HANDLE_CLOSE, FILTER_SUNGLASSES, FILTER_SHIRTS, FILTER_SHOES, FILTER_PANTS } from './types';

export const handleClick = () => {
    return {
        type: HANDLE_CLICK
    };
}

export const handleClose = () => {
    return {
        type: HANDLE_CLOSE
    };
}

export const filterSunglasses = () => {
    return {
        type: FILTER_SUNGLASSES
    }
}
export const filterShirts = () => {
    return {
        type: FILTER_SHIRTS
    }
}

export const filterShoes = () => {
    return {
        type: FILTER_SHOES
    }
}

export const filterPants = () => {
    return {
        type: FILTER_PANTS
    }
}