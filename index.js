function foo(x,y,z,d, ...args) {
    return console.log (x,y,z,d, args)
}

foo(1, 2, 3, 4, 5, 6, 7)

function asd(...args) {
    console.log(args[5])
}

var arr = [1, 2, 3, 4, 5, 6, 7]

asd(...arr)