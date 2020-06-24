// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_keyby
const keyBy = (array, key) => (array || []).reduce((r, x) => ({ ...r, [key ? x[key] : x]: x }), {})
export default keyBy
