//FUNÇÃO PARA TRANSFORMAR UMA STRING EM ARRAY;
module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(",").map(tech => tech.trim());
}