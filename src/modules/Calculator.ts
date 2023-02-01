
interface iCalculator{

    numbers: number[];
    operations: string[];
    result: number;
    addParams(): void;
    add(): void;
    subtract(): void;
    multiply(): void;
    split(): void;
    showResult(): number;

}


class Calculator implements iCalculator{
    params: number[];
    operations: string[];
    result: number;

    constructor(){
        this.params = [];
        this.operations = [];
        this.result = 0;
    }

    addParams(): void {
        
    }

    add(): void {
        this.operations.push("+");
    }
    subtract(): void {
        this.operations.push("-");
    }
    multiply(): void {
        this.operations.push("x");
    }
    split(): void {
        this.operations.push("/");
    }
    showResult(): number {
        console.log(this.result);
        return -1;
    }

}

let a: Calculator = new Calculator();

a.showResult();

