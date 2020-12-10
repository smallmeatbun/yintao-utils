/**
 * 对象的类型判断
 * by lirui
 * date 2020-05-28
 */
export default {
    isString: o => Object.prototype.toString.call(o) === '[object String]',
    isNumber: o => Object.prototype.toString.call(o) === '[object Number]',
    isBoolean: o => Object.prototype.toString.call(o) === '[object Boolean]',
    isFunction: o => Object.prototype.toString.call(o) === '[object Function]',
    isNull: o => Object.prototype.toString.call(o) === '[object Null]',
    isUndefined: o => Object.prototype.toString.call(o) === '[object Undefined]',
    isObject: o => Object.prototype.toString.call(o) === '[object Object]',
    objNotEmpty: o => Object.prototype.toString.call(o) === '[object Object]' && Object.keys(o).length > 0,
    isArray: o => Object.prototype.toString.call(o) === '[object Array]',
    //判断是否为非空数组
    isNotEmpty: arr => Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && arr.length > 0,
    isDate: o => Object.prototype.toString.call(o) === '[object Date]',
    isRegExp: o => Object.prototype.toString.call(o) === '[object RegExp]',
    isError: o => Object.prototype.toString.call(o) === '[object Error]',
    isSymbol: o => Object.prototype.toString.call(o) === '[object Symbol]',
    isPromise: o => Object.prototype.toString.call(o) === '[object Promise]',
    isSet: o => Object.prototype.toString.call(o) === '[object Set]',
    belongTo: (type, value) => {
        switch (type) {
            case Number:
                {
                    return Object.prototype.toString.call(value) === '[object Number]'
                }
            case Boolean:
                {
                    return Object.prototype.toString.call(value) === '[object Boolean]'
                }
            case String:
                {
                    return Object.prototype.toString.call(value) === '[object String]'
                }
            case Array:
                {
                    return Object.prototype.toString.call(value) === '[object Array]'
                }
            case Object:
                {
                    return Object.prototype.toString.call(value) === '[object Object]'
                }
            case Function:
                {
                    return Object.prototype.toString.call(value) === '[object Function]'
                }
            case null:
                {
                    return Object.prototype.toString.call(value) === '[object Null]'
                }
            case undefined:
                {
                    return Object.prototype.toString.call(value) === '[object Undefined]'
                }
            case Date:
                {
                    return Object.prototype.toString.call(value) === '[object Date]'
                }
            default:
                {
                    return false;
                }
        }
    }
}