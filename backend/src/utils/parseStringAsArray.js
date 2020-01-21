module.exports = function parseStringAsArray(arrayAsString){
    return stringArray.split(',').map(tech => tech.trim());
}