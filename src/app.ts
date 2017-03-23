import CountClass from "./CountClass";
import MyClass from "./MyClass";
/**
 * Created by administrator on 22/03/2017.
 */

const classIntance: MyClass = new MyClass();
const result: number = classIntance.add(1, 2);
console.log(`add(1, 2) returns ${result}`);

const countInstance: CountClass = new CountClass();
countInstance.countUp();