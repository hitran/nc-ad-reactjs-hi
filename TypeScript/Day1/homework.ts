/* Create 3 classes that implements interfaces */
interface IShapes {
    getDimension: () => number
}

interface IBox {
    id: number
    color: string
    getLabel: () => string
}
 
class Rectangle implements IShapes {
    length = 2;
    width = 1;
    height = 3;
    getDimension = () => this.length * this.width * this.height;
}

class Square extends Rectangle {
    length = 1;
    width = 1;
    height = 1;
}

class Box extends Square implements IBox {
    id = null;
    color = '';
    getLabel = () => `${this.color}-${this.id}`;
}

const box001 = new Box();
box001.id = 123;
box001.color = 'Red';
console.log(`Box ${box001.getLabel()} has a dimension of ${box001.getDimension()}`);

/* Create 3 functions with callback hell which uses interface */
const add10 = (x: number, cb: (x: number) => void): void => {
    cb(x);
}

const add = (x: number, cb: (y: number) => void): void => {
    cb(x + 10);
}

const printResult = (x: number): void => {
    console.log(x);
}

add10(15, (x) => add(x, printResult))
