let x: number= 123;
let y: string = '123';
let z: boolean = true;

let y1: string[] = ["a", "b"];

let a: Date = new Date();
let b: string[];

b = "Hello" as any;
/* This is the way to get rid of error instead of define type of b */
b=5 as any;
