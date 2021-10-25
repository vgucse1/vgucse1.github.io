
const md5 = require('md5')
// var a = 123
// function hash(a, key1, key2) {
//     var layer0 = md5(a)
//     var layer1 = md5(layer0)
//     var layer2 = md5(layer1)
//     var layer3 = md5(layer2)
//     var layer4 = md5(layer3)
//     var layer5 = md5(layer4)
//     var layer6 = md5(layer5)
//     var layer7 = md5(layer6)
//     var layer8 = md5(layer7)
//     var layer9 = md5(layer8)
//     var layer10 = md5(layer9)
//key
function alphabet(key, hashing) {
    switch (key) {
        case 1:
            hashing = hashing.replace('a', '1')
            hashing = hashing.replace('b', '2')
            hashing = hashing.replace('c', '3')
            hashing = hashing.replace('d', '4')
            hashing = hashing.replace('e', '5')
            hashing = hashing.replace('f', '6')
            hashing = hashing.replace('g', '7')
            hashing = hashing.replace('h', '8')
            hashing = hashing.replace('i', '9')
            hashing = hashing.replace('j', '10')
            hashing = hashing.replace('k', '11')
            hashing = hashing.replace('l', '12')
            hashing = hashing.replace('m', '13')
            hashing = hashing.replace('n', '14')
            hashing = hashing.replace('o', '15')
            hashing = hashing.replace('p', '16')
            hashing = hashing.replace('q', '17')
            hashing = hashing.replace('r', '18')
            hashing = hashing.replace('s', '19')
            hashing = hashing.replace('t', '20')
            hashing = hashing.replace('u', '21')
            hashing = hashing.replace('v', '22')
            hashing = hashing.replace('w', '23')
            hashing = hashing.replace('x', '24')
            hashing = hashing.replace('y', '25')
            hashing = hashing.replace('z', '26')
            break;
        case 2:
            hashing = hashing.replace('a', '9')
            hashing = hashing.replace('b', '1')
            hashing = hashing.replace('c', '7')
            hashing = hashing.replace('d', '3')
            hashing = hashing.replace('e', '5')
            hashing = hashing.replace('f', '08')
            hashing = hashing.replace('g', '02')
            hashing = hashing.replace('h', '36')
            hashing = hashing.replace('i', '34')
            hashing = hashing.replace('j', '29')
            hashing = hashing.replace('k', '21')
            hashing = hashing.replace('l', '47')
            hashing = hashing.replace('m', '43')
            hashing = hashing.replace('n', '45')
            hashing = hashing.replace('o', '46')
            hashing = hashing.replace('p', '42')
            hashing = hashing.replace('q', '28')
            hashing = hashing.replace('r', '25')
            hashing = hashing.replace('s', '33')
            hashing = hashing.replace('t', '37')
            hashing = hashing.replace('u', '01')
            hashing = hashing.replace('v', '09')
            hashing = hashing.replace('w', '4')
            hashing = hashing.replace('x', '6')
            hashing = hashing.replace('y', '2')
            hashing = hashing.replace('z', '8')
            break
        case 3:
            hashing = hashing.replace('a', '1')
            hashing = hashing.replace('b', '02')
            hashing = hashing.replace('c', '13')
            hashing = hashing.replace('d', '04')
            hashing = hashing.replace('e', '15')
            hashing = hashing.replace('f', '06')
            hashing = hashing.replace('g', '17')
            hashing = hashing.replace('h', '08')
            hashing = hashing.replace('i', '19')
            hashing = hashing.replace('j', '20')
            hashing = hashing.replace('k', '41')
            hashing = hashing.replace('l', '60')
            hashing = hashing.replace('m', '81')
            hashing = hashing.replace('n', '90')
            hashing = hashing.replace('o', '71')
            hashing = hashing.replace('p', '50')
            hashing = hashing.replace('q', '31')
            hashing = hashing.replace('r', '09')
            hashing = hashing.replace('s', '18')
            hashing = hashing.replace('t', '07')
            hashing = hashing.replace('u', '16')
            hashing = hashing.replace('v', '05')
            hashing = hashing.replace('w', '14')
            hashing = hashing.replace('x', '03')
            hashing = hashing.replace('y', '12')
            hashing = hashing.replace('z', '0')
            break
        case 4:
            hashing = hashing.replace('a', 'z')
            hashing = hashing.replace('b', 'y')
            hashing = hashing.replace('c', 'x')
            hashing = hashing.replace('d', 'w')
            hashing = hashing.replace('e', 'v')
            hashing = hashing.replace('f', 'u')
            hashing = hashing.replace('g', 't')
            hashing = hashing.replace('h', 's')
            hashing = hashing.replace('i', 'r')
            hashing = hashing.replace('j', 'q')
            hashing = hashing.replace('k', 'p')
            hashing = hashing.replace('l', 'o')
            hashing = hashing.replace('m', 'n')
            hashing = hashing.replace('n', 'm')
            hashing = hashing.replace('o', 'l')
            hashing = hashing.replace('p', 'k')
            hashing = hashing.replace('q', 'j')
            hashing = hashing.replace('r', 'i')
            hashing = hashing.replace('s', 'h')
            hashing = hashing.replace('t', 'g')
            hashing = hashing.replace('u', 'f')
            hashing = hashing.replace('v', 'e')
            hashing = hashing.replace('w', 'd')
            hashing = hashing.replace('x', 'c')
            hashing = hashing.replace('y', 'b')
            hashing = hashing.replace('z', 'a')
            break
        case 5:
            hashing = hashing.replace('a', 'b')
            hashing = hashing.replace('b', 'd')
            hashing = hashing.replace('c', 'f')
            hashing = hashing.replace('d', 'h')
            hashing = hashing.replace('e', 'j')
            hashing = hashing.replace('f', 'l')
            hashing = hashing.replace('g', 'n')
            hashing = hashing.replace('h', 'p')
            hashing = hashing.replace('i', '1')
            hashing = hashing.replace('j', '3')
            hashing = hashing.replace('k', '5')
            hashing = hashing.replace('l', '7')
            hashing = hashing.replace('m', '9')
            hashing = hashing.replace('n', '8')
            hashing = hashing.replace('o', '6')
            hashing = hashing.replace('p', '4')
            hashing = hashing.replace('q', '2')
            hashing = hashing.replace('r', '0')
            hashing = hashing.replace('s', 'o')
            hashing = hashing.replace('t', 'm')
            hashing = hashing.replace('u', 'k')
            hashing = hashing.replace('v', 'i')
            hashing = hashing.replace('w', 'g')
            hashing = hashing.replace('x', 'e')
            hashing = hashing.replace('y', 'c')
            hashing = hashing.replace('z', 'a')
            break
        case 6:
            hashing = hashing.replace('a', '0')
            hashing = hashing.replace('b', '2')
            hashing = hashing.replace('c', '4')
            hashing = hashing.replace('d', '6')
            hashing = hashing.replace('e', '8')
            hashing = hashing.replace('f', 'a')
            hashing = hashing.replace('g', 'c')
            hashing = hashing.replace('h', 'e')
            hashing = hashing.replace('i', 'g')
            hashing = hashing.replace('j', 'i')
            hashing = hashing.replace('k', 'k')
            hashing = hashing.replace('l', 'm')
            hashing = hashing.replace('m', 'o')
            hashing = hashing.replace('n', 'p')
            hashing = hashing.replace('o', 'n')
            hashing = hashing.replace('p', 'l')
            hashing = hashing.replace('q', 'j')
            hashing = hashing.replace('r', 'h')
            hashing = hashing.replace('s', 'f')
            hashing = hashing.replace('t', 'd')
            hashing = hashing.replace('u', 'b')
            hashing = hashing.replace('v', '9')
            hashing = hashing.replace('w', '7')
            hashing = hashing.replace('x', '5')
            hashing = hashing.replace('y', '3')
            hashing = hashing.replace('z', '1')
            break
        case 7:
            hashing = hashing.replace('a', '0')
            hashing = hashing.replace('b', 'b')
            hashing = hashing.replace('c', '2')
            hashing = hashing.replace('d', 'd')
            hashing = hashing.replace('e', '4')
            hashing = hashing.replace('f', 'f')
            hashing = hashing.replace('g', '6')
            hashing = hashing.replace('h', 'h')
            hashing = hashing.replace('i', '8')
            hashing = hashing.replace('j', 'j')
            hashing = hashing.replace('k', 'o')
            hashing = hashing.replace('l', 'k')
            hashing = hashing.replace('m', 'n')
            hashing = hashing.replace('n', 'm')
            hashing = hashing.replace('o', 'p')
            hashing = hashing.replace('p', 'l')
            hashing = hashing.replace('q', '9')
            hashing = hashing.replace('r', 'i')
            hashing = hashing.replace('s', '7')
            hashing = hashing.replace('t', 'g')
            hashing = hashing.replace('u', '5')
            hashing = hashing.replace('v', 'e')
            hashing = hashing.replace('w', '3')
            hashing = hashing.replace('x', 'c')
            hashing = hashing.replace('y', '1')
            hashing = hashing.replace('z', 'a')
            break
        case 8:
            hashing = hashing.replace('a', '10')
            hashing = hashing.replace('b', '32')
            hashing = hashing.replace('c', '54')
            hashing = hashing.replace('d', '76')
            hashing = hashing.replace('e', '98')
            hashing = hashing.replace('f', '0a')
            hashing = hashing.replace('g', '2c')
            hashing = hashing.replace('h', '4e')
            hashing = hashing.replace('i', '6g')
            hashing = hashing.replace('j', '8i')
            hashing = hashing.replace('k', 'k0')
            hashing = hashing.replace('l', 'm2')
            hashing = hashing.replace('m', 'o4')
            hashing = hashing.replace('n', 'p5')
            hashing = hashing.replace('o', 'n3')
            hashing = hashing.replace('p', 'l1')
            hashing = hashing.replace('q', '9j')
            hashing = hashing.replace('r', '7h')
            hashing = hashing.replace('s', '5f')
            hashing = hashing.replace('t', '3d')
            hashing = hashing.replace('u', '1b')
            hashing = hashing.replace('v', '89')
            hashing = hashing.replace('w', '67')
            hashing = hashing.replace('x', '45')
            hashing = hashing.replace('y', '23')
            hashing = hashing.replace('z', '01')
            break
        case 9:
            hashing = hashing.replace('a', 'h1')
            hashing = hashing.replace('b', 'j0')
            hashing = hashing.replace('c', 'i2')
            hashing = hashing.replace('d', '4p')
            hashing = hashing.replace('e', '6o')
            hashing = hashing.replace('f', '8m')
            hashing = hashing.replace('g', '9l')
            hashing = hashing.replace('h', '7h')
            hashing = hashing.replace('i', '5g')
            hashing = hashing.replace('j', '3d')
            hashing = hashing.replace('k', '1c')
            hashing = hashing.replace('l', '0a')
            hashing = hashing.replace('m', '2b')
            hashing = hashing.replace('n', '4e')
            hashing = hashing.replace('o', '6f')
            hashing = hashing.replace('p', '8i')
            hashing = hashing.replace('q', '9j')
            hashing = hashing.replace('r', '7k')
            hashing = hashing.replace('s', '5n')
            hashing = hashing.replace('t', 'g3')
            hashing = hashing.replace('u', 'e1')
            hashing = hashing.replace('v', 'c2')
            hashing = hashing.replace('w', 'a4')
            hashing = hashing.replace('x', 'b6')
            hashing = hashing.replace('y', 'd8')
            hashing = hashing.replace('z', 'f9')
            break
        case 10:
            hashing = hashing.replace('a', '7w')
            hashing = hashing.replace('b', '5v')
            hashing = hashing.replace('c', '3u')
            hashing = hashing.replace('d', '1t')
            hashing = hashing.replace('e', '03')
            hashing = hashing.replace('f', '2s')
            hashing = hashing.replace('g', '4r')
            hashing = hashing.replace('h', '6q')
            hashing = hashing.replace('i', '8p')
            hashing = hashing.replace('j', '9o')
            hashing = hashing.replace('k', '7n')
            hashing = hashing.replace('l', '51')
            hashing = hashing.replace('m', '3m')
            hashing = hashing.replace('n', '1l')
            hashing = hashing.replace('o', '0k')
            hashing = hashing.replace('p', '2j')
            hashing = hashing.replace('q', '4i')
            hashing = hashing.replace('r', '6h')
            hashing = hashing.replace('s', '8g')
            hashing = hashing.replace('t', '5f')
            hashing = hashing.replace('u', '3e')
            hashing = hashing.replace('v', '12')
            hashing = hashing.replace('w', '0d')
            hashing = hashing.replace('x', '2c')
            hashing = hashing.replace('y', '4b')
            hashing = hashing.replace('z', '6a')
            break
    }
    return hashing;
}

function numbly(key, hashing) {
    switch (key) {
        case 1:
            hashing = hashing.replace('0', '1b')
            hashing = hashing.replace('1', '8')
            hashing = hashing.replace('2', '6')
            hashing = hashing.replace('3', '4')
            hashing = hashing.replace('4', '2')
            hashing = hashing.replace('5', '0')
            hashing = hashing.replace('6', '1')
            hashing = hashing.replace('7', '3')
            hashing = hashing.replace('8', '5')
            hashing = hashing.replace('9', '7')
            break
        case 2:
            hashing = hashing.replace('0', 'a')
            hashing = hashing.replace('1', 'b')
            hashing = hashing.replace('2', 'c')
            hashing = hashing.replace('3', 'd')
            hashing = hashing.replace('4', 'e')
            hashing = hashing.replace('5', 'f')
            hashing = hashing.replace('6', 'g')
            hashing = hashing.replace('7', 'h')
            hashing = hashing.replace('8', 'i')
            hashing = hashing.replace('9', 'j')
            break
        case 3:
            hashing = hashing.replace('0', 'j')
            hashing = hashing.replace('1', 'i')
            hashing = hashing.replace('2', 'h')
            hashing = hashing.replace('3', 'g')
            hashing = hashing.replace('4', 'f')
            hashing = hashing.replace('5', 'e')
            hashing = hashing.replace('6', 'd')
            hashing = hashing.replace('7', 'c')
            hashing = hashing.replace('8', 'b')
            hashing = hashing.replace('9', 'a')
            break
        case 4:
            hashing = hashing.replace('0', 'f')
            hashing = hashing.replace('1', 'e')
            hashing = hashing.replace('2', 'd')
            hashing = hashing.replace('3', 'c')
            hashing = hashing.replace('4', 'b')
            hashing = hashing.replace('5', 'a')
            hashing = hashing.replace('6', 'g')
            hashing = hashing.replace('7', 'h')
            hashing = hashing.replace('8', 'i')
            hashing = hashing.replace('9', 'j')
            break
        case 5:
            hashing = hashing.replace('0', '9')
            hashing = hashing.replace('1', '7')
            hashing = hashing.replace('2', '5')
            hashing = hashing.replace('3', '3')
            hashing = hashing.replace('4', '1')
            hashing = hashing.replace('5', '0')
            hashing = hashing.replace('6', '2')
            hashing = hashing.replace('7', '4')
            hashing = hashing.replace('8', '6')
            hashing = hashing.replace('9', '8')
            break
        case 6:
            hashing = hashing.replace('0', '9')
            hashing = hashing.replace('1', '8')
            hashing = hashing.replace('2', '7')
            hashing = hashing.replace('3', '6')
            hashing = hashing.replace('4', '5')
            hashing = hashing.replace('5', '4')
            hashing = hashing.replace('6', '3')
            hashing = hashing.replace('7', '2')
            hashing = hashing.replace('8', '1')
            hashing = hashing.replace('9', '0')
            break
        case 7:
            hashing = hashing.replace('0', '9a')
            hashing = hashing.replace('1', '7b')
            hashing = hashing.replace('2', '5c')
            hashing = hashing.replace('3', '3d')
            hashing = hashing.replace('4', '1e')
            hashing = hashing.replace('5', '0f')
            hashing = hashing.replace('6', '2g')
            hashing = hashing.replace('7', '4h')
            hashing = hashing.replace('8', '6i')
            hashing = hashing.replace('9', '8j')
            break
        case 8:
            hashing = hashing.replace('0', 'a9')
            hashing = hashing.replace('1', 'c8')
            hashing = hashing.replace('2', 'e7')
            hashing = hashing.replace('3', 'g6')
            hashing = hashing.replace('4', 'j3')
            hashing = hashing.replace('5', 'i2')
            hashing = hashing.replace('6', 'h0')
            hashing = hashing.replace('7', 'f1')
            hashing = hashing.replace('8', 'd4')
            hashing = hashing.replace('9', 'b5')
            break
        case 9:
            hashing = hashing.replace('0', '81')
            hashing = hashing.replace('1', '73')
            hashing = hashing.replace('2', '55')
            hashing = hashing.replace('3', '47')
            hashing = hashing.replace('4', '19')
            hashing = hashing.replace('5', '08')
            hashing = hashing.replace('6', '26')
            hashing = hashing.replace('7', '34')
            hashing = hashing.replace('8', '62')
            hashing = hashing.replace('9', '90')
            break
        case 10:
            hashing = hashing.replace('0', 'o')
            hashing = hashing.replace('1', 'l')
            hashing = hashing.replace('2', 'v')
            hashing = hashing.replace('3', 'e')
            hashing = hashing.replace('4', 'a')
            hashing = hashing.replace('5', 's')
            hashing = hashing.replace('6', 'g')
            hashing = hashing.replace('7', 't')
            hashing = hashing.replace('8', 'x')
            hashing = hashing.replace('9', 'p')
            break
    }
    return hashing;
}

function in_(a) {
    var layer0 = md5(a)
    var layer1 = md5(layer0)
    var layer2 = md5(layer1)
    var layer3 = md5(layer2)
    var layer4 = md5(layer3)
    var layer5 = md5(layer4)
    var layer6 = md5(layer5)
    var layer7 = md5(layer6)
    var layer8 = md5(layer7)
    var layer9 = md5(layer8)
    var layer10 = md5(layer9)

    var key1 = 1 + Math.floor(Math.random() * 10);
    var key2 = 1 + Math.floor(Math.random() * 10);
    var level1 = alphabet(key1, layer10)
    var level2 = numbly(key2, level1)
    var sendback = {
        alphabet_key: key1,
        numbly_key: key2,
        hashedpass: level2
    }
    return sendback

}
function out(un, key1, key2) {
    //băm mã
    var layer0_ = md5(un)
    var layer1_ = md5(layer0_)
    var layer2_ = md5(layer1_)
    var layer3_ = md5(layer2_)
    var layer4_ = md5(layer3_)
    var layer5_ = md5(layer4_)
    var layer6_ = md5(layer5_)
    var layer7_ = md5(layer6_)
    var layer8_ = md5(layer7_)
    var layer9_ = md5(layer8_)
    var layer10_ = md5(layer9_)
    //key reader
    var key1_ = parseInt(key1)
    var key2_ = parseInt(key2)
    //phá mã
    var level1_ = alphabet(key1_, layer10_)
    var level2_ = numbly(key2_, level1_)

    return level2_
}

function hash_ID(a) {
    console.log(typeof(a))
    var key1 = 1 + Math.floor(Math.random() * 9);
    var key2 = 1 + Math.floor(Math.random() * 9);
    var level1 = alphabet(key1, a)
    var level2 = numbly(key2, level1)
    var sendback = {
        alphabet_key: key1,
        numbly_key: key2,
        hashedID: level2
    }
    return sendback

}

function unhash_ID(un, key1, key2) {
    //key reader
    var key1_ = parseInt(key1)
    var key2_ = parseInt(key2)
    //phá mã
    var level1_ = alphabet(key1_, un)
    var level2_ = numbly(key2_, level1_)

    return level2_
}


var end = {
    hash: in_,
    hash_ID: hash_ID,
    unhash: out,
    unhash_ID: unhash_ID
}


module.exports = end