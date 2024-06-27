
    //For-of

    const arr = ['Aam', 'Jam', 'Kanthal'];

    for (const index of arr) {
        // console.log(index);
    }

    const numbers = [10, 20, 30, 40, 50, 60];

    for(let num of numbers) {
        // const plus10 = num + 10;
        // console.log(plus10);
        num += 10;
        // console.log(num);
    }

    const name = 'Jagadish';
    for(const letter of name) {
        // console.log(letter);
    }

    const iterableMap = new Map([
        ["name", "John Cina"],
        ["age", 69],
        ["isChampion", true]
    ]);

    for(const entries of iterableMap) {
        // console.log(entries);
    }

    for(const [key, value] of iterableMap) {
        // console.log(key, ' -> ' ,value);
    }

    const iterableSet = new Set([3,4,5,5,4,4,3,2,4,5,6,7,8,8]);

    for(const unique of iterableSet) {
        // console.log(unique);
    }


    //For-in
    const objectIterable = {
        "name": 'Chota Don',
        "isGangStar": true,
        "Age": 31,
    }

    for(const property in objectIterable) {
        // console.log(`${property} -> ${objectIterable[property]}`);
    }


    //ForEach


    //Note: The forEach() method of Array instances executes a provided function once for each array element.

    const array1 = ["a", 'b', "c"];
    array1.forEach((i) => console.log(i));

    const numforMulti = [5, 15, 21, 20];
    numforMulti.forEach((num) => console.log(num * 5));
    
