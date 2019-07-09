import * as main from './styles/native/main';
import * as custom from './styles/native/app/custom';
import mergeobjects from './styles/native/core/_helperfunctions/mergeobjects';

Object.keys(custom).forEach(key => {
    if (main[key]) {
        Object.assign(main[key], mergeobjects(main[key], custom[key]));
        delete custom[key];
    }
});

module.exports = { ...main, ...custom };
