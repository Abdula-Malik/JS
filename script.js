const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log("Hello");
    }
};

const john = {
    health: 100
};

let a = Object.setPrototypeOf(john, soldier)
john.sayHello();
