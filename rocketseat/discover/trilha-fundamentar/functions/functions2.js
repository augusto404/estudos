let subject = "create video";

function createThink(){
    subject = "study"; // Se usar let ou const a reatribuição não irá acontecer.
    return subject;
};

console.log(createThink(subject));
console.log(subject);

// O retorno será study.