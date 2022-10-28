import React from "react";
import ExcelWrite from "./ExcelWrite";

// simple model with 2 methods 
// just need to pass the reference to bind the submit function 
export class ExcelWriteModel {
    constructor(ref) {
        this.component = <ExcelWrite ref={ref} />
        this.code = ``
    }

    getCode() {
        return this.code;
    }

    setcode(Text, In, Cell) {
        this.code = "write " + Text + " in " + In + " cell " + Cell;
    }

}

