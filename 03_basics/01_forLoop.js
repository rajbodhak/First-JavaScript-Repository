
    // for loop
    for (let num = 0; num <= 10; num++) {
        const element = num;
        console.log(num);
    }

    //if condition inside for loop
    for (let i = 1; i <= 10; i++) {
        if(i == 1 || i == 6) {
            console.log(`Here are 5 numbers`);
        }
        const element = i; 
        console.log(i); 
    }

    //for loop inside for loop
    for (let i = 1; i <= 10; i++) {
        console.log(`-------Table of ${i}-------`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = `, i * j);
        }
    }

    //array inside for loop
    const heroes = ["Batman", "Superman", "Wonder Woman", "The Flash", "Green Lantern", "Aquaman", "Green Arrow", "Shazam", "Martian Manhunter", "Cyborg"]

    for (let index = 0; index < heroes.length; index++) {
        const element = heroes[index];
        console.log(element);
    }

    //keyword in loop (break and continue)

    //Break statement stops the entire process of the loop. Continue statement only stops the current iteration of the loop.

    //Break
    for (let index = 0; index <= 10; index++) {
        if(index == 5) {
            console.log(`5 Detected thats why the numbering are break`);
            break;
        }
        const element = index;
        console.log(element);
    }

    //Continue
    for (let index = 0; index <= 10; index++) {
        if(index == 5) {
            console.log(`5 Detected thats why stops the current iteration of the loop And You can see the mumber of 5 is in other color.`);
            continue;
        }
        const element = index;
        console.log(element);
    }