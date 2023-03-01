class Calculator{
    numbers: number[];
    result: number;

    constructor(){
        this.numbers = [];
        this.result = 0;
    }

    addNumbers(n:number){
        this.numbers.push(n);
    }

}
