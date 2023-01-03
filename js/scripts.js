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
        if (Array.isArray(peoplesElements.children) && !peoplesElements.children.length){
            peoplesElements.children.push({name: 'Stepan', age: Math.round(Math.random() * 18)})
        }
    }
    return result
}

console.dir(operation(peoples),{depth: null})