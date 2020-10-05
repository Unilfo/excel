import {TABLE_RESIZE} from '@/redux/types';


// Action create
export function tableResize(data) {
    return {
        type: TABLE_RESIZE,
        data
    }
}

