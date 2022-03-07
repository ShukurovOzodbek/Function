// 1
let bar = function (age) {
    age = +prompt('Write your age :')
    if ( age >= 18 ) {
        alert('Welcome ferferro')
    }else if (age <= 18 && age > 0) {
        alert('No you are not ferferro')
    }else{
        alert('Yobrello')
    }
}
// bar()


// 2 
function calc(a, b) {
        a = +prompt('write: a')
        let pr = prompt('What we will do: +,-,*,/,^')
        b = +prompt('write: b')
        if ( pr === "+" ) {
            alert(`${a} + ${b} = ${ a + b}`);
        }else if ( pr === "-" ) {
            alert(`${a} - ${b} = ${ a - b}`);
        }else if ( pr === "*" ) {
            alert(`${a} * ${b} = ${ a * b}`);
        }else if ( pr === "/" ) {
            alert(`${a} / ${b} = ${ a / b}`);
        }else if ( pr === "^" ) {
            alert(`${a} ^ ${b} = ${ a ** b}`);
        }
}
// calc()


// 3
function filt(array) {
    let arr = array
    let longerName = ''
    arr.filter(item => {
        if (item.length > longerName.length) {
            longerName = item
        }
    })
    console.log(longerName);
}

// filt(['Morgenshtern', 'VladimirVladimirovichPutin', 'VladimirAleksandrevichZelenskiy'])


// 4
function MyMin(myarr){
    let al = myarr.length;
    minimum = myarr[al-1];
    while (al--){
        if(myarr[al] < minimum){
            minimum = myarr[al]
        }
    }
    return minimum;
};
let myArray = [1, 0, 5, 6, 2, 3];
let m = MyMin(myArray);
// console.log(m)


// 5
function prop(a, b, c, d) {    
    console.log(Number((a/b == c/d || (a/b)/(d/c)).toFixed(1)));
}
prop(4, 6, 7, 8)

