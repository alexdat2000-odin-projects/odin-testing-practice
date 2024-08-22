export function analyzeArray(arr) {
    return {
        average: arr.reduce((ac, cur) => ac + cur, 0) / arr.length,
        min: arr.reduce((ac, cur) => Math.min(ac, cur), Infinity),
        max: arr.reduce((ac, cur) => Math.max(ac, cur), -Infinity),
        length: arr.length,
    }
}
