'use strict';

function fn() {
    const obj1 = {
        name: 'Artem',
    };
    let obj2 = {
        name: 'Timur',
    };

    obj1.name = 'Nikolay';
    obj2.name = 'Ivan';

    obj1.internalObj1 = () => {return { string: 'emptyObject1'}};
    obj2.internalObj2 = () => {return { string: 'emptyObject2'}};

    return obj1;
}

console.log( fn() );