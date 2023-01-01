const peoples = [
    {
        name: 'Alina',
        money: 2700.32,
        cities: 'Lviv, Kyiv, Ternopil',
        children: [
            {
                name: 'Oliver',
                age: 6,
            }
        ]
    },
    {
        name: 'Andrii',
        money: 9301.32,
        cities: 'Paris, Madrid, Rivne',
        children: []
    },
    {
        name: 'George',
        money: '35000',
        cities: 'Stambul',
        children: [
            {
                name: 'Olha',
                age: 8,
            },
            {
                name: 'Olena',
                age: 2,
            }
        ]
    }
];

// почему не работает проверка на пустой массив и не добавляет ничего?

function operation(result) {
    for (let i = 0; i < peoples.length; i++) {
        const peoplesElements = peoples[i];
        peoplesElements.name = peoplesElements.name.toUpperCase();
        peoplesElements.cities = peoplesElements.cities.split(',');
        peoplesElements.money = Number(peoplesElements.money);
        if (isNaN(peoplesElements.money)) {
            peoplesElements.money = 'Not a number'
        } else {
            peoplesElements.money = Math.round(peoplesElements.money);
        }
        for (let j = 0; j < peoples[i].children.length; j++) {
            // if (Array.isArray(peoples[i].children) && !peoples[i].children.length) {
            //     // peoples[i].children.push({name: 'Stepan', age: Math.round(Math.random() * 18)})
            //     // peoples[i].children = {name: 'Stepan', age: Math.round(Math.random() * 18)}
            //     // peoples[i].children.name = 'Stepan'
            // } Не видит пустой массив и не добавляет ни одним из способов которые я прописала

            // const childrenElements = peoples[i].children[j];
            // childrenElements.name = childrenElements.name.toUpperCase(); Почему не работает так?
            // peoples[i].children[j].name = peoples[i].children[j].name.toUpperCase(); И так?

            peoples[i].children[j] = peoples[i].children[j].name.toUpperCase(); // А работает так?
        }
    }
    return result
}

console.log(operation(peoples))