interface iCalculator{

    params: number[];
    addParams(): void;
    add(): number;
    subtract(): number;
    multiply(): number;
    split(): number;
    showResult(): void;

}


class Calculator implements iCalculator{
    params: number[];



    addParams(): void {
        throw new Error("Method not implemented.");
    }

    add(): number {
        throw new Error("Method not implemented.");
    }
    subtract(): number {
        throw new Error("Method not implemented.");
    }
    multiply(): number {
        throw new Error("Method not implemented.");
    }
    split(): number {
        throw new Error("Method not implemented.");
    }
    showResult(): void {
        throw new Error("Method not implemented.");
    }

}