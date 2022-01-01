const p = [
    { name: "sakib", age: 23, temp: 99 },
    { name: "rakib", age: 22, temp: 98 },
    { name: "nakib", age: 37, temp: 97 },
    { name: "lakib", age: 34, temp: 98 },
    { name: "akib", age: 54, temp: 100 },
    { name: "akib", age: 45, temp: 94 }
]

const vaxTrail = (array) => {
    let A = [];
    let B = [];
    let C = [];
    let D = [];
    for (x of array) {
        if (x.age >= 20 && x.age <= 30 && x.temp < 100) {
            // console.log(x)
            if (x.age % 2 == 0) {
                A.unshift(x);
            }
            else { A.push(x) }
        }
        if (x.age > 30 && x.age <= 40 && x.temp < 100) {
            if (x.age % 2 == 0) {
                B.unshift(x);
            }
            else { B.push(x) }
        }
    }
    if (x.age > 40 && x.age <= 50 && x.temp < 100) {
        if (x.age % 2 == 0) {
            C.unshift(x);
        }
        else {
            C.push(x)
        }
    }
    if (x.temp >= 100 && x.age % 2 == 0) {

        D.unshift(x);
    }
    else { D.push(x) }

    return { A, B, C, D };
}

const output = vaxTrail(p);
console.log(output);