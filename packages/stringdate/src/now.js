// @flow
import {stringifyDate, stringifyDateTime} from './core/date';

export default (time: boolean = true) => {
    return (time ? stringifyDateTime : stringifyDate)(new Date());
};

