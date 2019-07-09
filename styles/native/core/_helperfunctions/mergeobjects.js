/**
 * Merge 2 objects
 * This function will look at every object property of the second object and will override the matching property in the first object
 *
 * @param   {object[]}    sources   Array of 2 objects
 *
 * @return  {object} Returns merged object
 */
export default function(...sources) {
    function mergeDeep(target, ...sources) {
        function isObject(item) {
            return item && typeof item === "object" && !Array.isArray(item);
        }

        if (!sources.length) return target;
        const source = sources.shift();

        if (isObject(target) && isObject(source)) {
            for (const key in source) {
                if (isObject(source[key])) {
                    if (!target[key]) Object.assign(target, { [key]: {} });
                    mergeDeep(target[key], source[key]);
                } else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }
        return mergeDeep(target, ...sources);
    }

    return mergeDeep({}, ...sources);
}
