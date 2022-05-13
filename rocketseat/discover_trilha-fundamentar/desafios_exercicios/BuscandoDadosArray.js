/* Buscando Dados em Arrays */

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                tittle: "Os segredo da mente milionária",
                author: "T. Harv Eker"
            },
            {
                tittle: "O homem mais rico da Babilônia",
                author: "George S. Clarson",
            },
            {
                tittle: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            }
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                tittle: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                tittle: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                tittle: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            }
        ],
    },
];


/* Mostrar categorias e quantidade: */
console.log(`Número de categorias existentes: ${booksByCategory.length}`);

for (let category of booksByCategory) {
    console.log(`- ${category.category}`);
    console.log(`  - Quantidade de livros: ${category.books.length}`);
};

/* Quantidade de autores: */
console.log(""); // Linha em branco no console.
console.log("Autores");

function countAuthors() {
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author);
            };
        };
    };

    console.log(`Total de autores: ${authors.length}.`);
};

countAuthors();

/* Buscar livros do autor pelo nome: */
console.log(""); // Linha em branco no console.

function authorBooks(authorName) {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === authorName) {
                books.push(book.tittle);
            };
        };
    };

    console.log(`Livros do autor ${authorName}:`);
    console.log(`- ${books.join(", ")}`);
};

authorBooks("Augusto Cury");

