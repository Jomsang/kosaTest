const car = {
    company:"현대",
    model:"그랜저",
    price: 50000000
}

console.log(car);

const mycar = {
    ...car
};

console.log(car === mycar); //다른 객체이기 때문에 false임