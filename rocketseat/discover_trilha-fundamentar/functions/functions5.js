function sayMyName (name) {
    console.log("Antes do callback");
    name();
    console.log("Depois do callback");
};

sayMyName(
    () => {
        console.log("Callback");
    }
); /*
- Arrow function sendo passada como parâmetro dentro de outra função
- A função é anônima, mas é reconhecida pelo parâmetro name
*/