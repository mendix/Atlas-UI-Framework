/**
 * Merge 2 objects
 * This function will look at every object property of the second object and will override the matching property in the first object
 *
 * @param   {object[]}    sources   Array of 2 objects
 *
 * @return  {object} Returns merged object
 *
 */
export default function <T extends { [k: string]: any }>(...sources: T[]): T {
    function mergeDeep(target: T, ...sources: T[]): T {
        function isObject(item: T): boolean {
            return item && typeof item === "object" && !Array.isArray(item);
        }

        if (!sources.length) {
            return target;
        }
        const source: T = sources.shift()!;

        if (isObject(target) && isObject(source)) {
            Object.keys(source).forEach(key => {
                if (isObject(source[key] as T)) {
                    if (!target[key]) {
                        Object.assign(target, { [key]: {} });
                    }
                    mergeDeep(target[key] as T, source[key] as T);
                } else {
                    Object.assign(target, { [key]: source[key] || target[key] });
                }
            });
        }
        return mergeDeep(target, ...sources);
    }

    return mergeDeep({} as T, ...sources);
}
