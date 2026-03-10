function solve(arr) {

    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(let data of arr) {
        let[name, age] = data.split(' '); 

        cats.push(new Cat(name, age));
    }

    for(let cat of cats) {
        cat.meow();
    }

}
solve(['Mellow 2', 'Tom 5']);