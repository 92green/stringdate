// @flow
import wrap from './core/wrap';

export default (time: boolean = true) => {
    return date
        ? Date.now().toISOString()
        : Date.now().toISOString().slice('T')[0]
    ;
}

