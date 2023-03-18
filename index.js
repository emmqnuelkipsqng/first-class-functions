function receivesAFunction(callback) {
    callback();
}

function  returnsANamedFunction() {
    return function namedFunction() {
        console.log('Emmanuel is a genious!');
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        let data = {
            name: 'Emmanuel',
            age: 20,
            place: 'Nairobi'
        }
        data;
        console.log(`My name is ${name}, I am ${age} years old and I live in ${place}.`);

    };
    
}
