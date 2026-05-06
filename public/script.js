const catalogo = [
    {
        id: 1, 
        titulo: "Paris, Texas",
        tipo: "filme",
        ano: 1984,
        generos: ["Drama", "Romance"],
        nota: 10,
        assistido: true
    },
    {
        id: 2, 
        titulo: "Possession",
        tipo: "filme",
        ano: 1981,
        generos: ["Terror", "Drama", "Suspense"],
        nota: 10,
        assistido: true
    },
    {
        id: 3, 
        titulo: "Mullholland Drive",
        tipo: "filme",
        ano: 2001,
        generos: ["Misterio", "Drama", "Suspense"],
        nota: 10,
        assistido: true
    },
    {
        id: 4, 
        titulo: "Duna 2",
        tipo: "filme",
        ano: 2024,
        generos: ["Sci-fi", "Ação", "Épico"],
        nota: 10,
        assistido: true
    },
    {
        id: 5, 
        titulo: "Central do Brasil",
        tipo: "filme",
        ano: 1998,
        generos: ["Drama", "Filme de Estrada", "Aventura"],
        nota: 10,
        assistido: true
    },
    {
        id: 6, 
        titulo: "Cidade de Deus",
        tipo: "filme",
        ano: 2002,
        generos: ["Crime", "Suspense", "Drama"],
        nota: 10,
        assistido: true
    }
]
console.log(catalogo)
console.log("Titulo do primeiro filme: ", catalogo[0].titulo)
console.log("Ano do ultimo filme: ", catalogo[5].ano)
console.log("Segundo genero do terceiro filme: ", catalogo[2].generos[1])
