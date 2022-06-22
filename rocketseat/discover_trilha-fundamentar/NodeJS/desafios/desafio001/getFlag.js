module.exports = getFlag;

function getFlag(flag){
    // Pegar o valor da próxima flag.
    const flagIndex = process.argv.indexOf(flag) + 1;
    return process.argv[flagIndex];
};