import ExcelWrite from "./ExcelWrite";
import { Form } from 'antd'
import React from "react";


export class ExcelWriteModel {
    constructor() {
        this.component = <ExcelWrite/>
        this.code = ``
    }

    getCode() {
        return this.code;
    }

    setcode(Text, In, Cell) {
        this.code = "write " + Text + " in " + In + " cell " + Cell;
    }

}

