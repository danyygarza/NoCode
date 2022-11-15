import React, { useRef, useState } from 'react'
import { Button, Row, Col } from 'antd'
import data from "../json/STKAutoComplete .json"
import test from "../json/testJson.json"
import { LogError } from 'concurrently'
//TODO: create an alert and show in which from is not completed 
function SyntaxGen() {
    //! this to call functions from Frida (child component) // 
    const regex = /[\[\]\<\>."]/gm
    function isNuber(str) {
        return /[0-9]/.test(str);
    }

    function parser(arr) {
        const tokens = [];
        const tempArr = [];
        let strike = false;
        let ahead = false;
        let temp = '';
        let open = false;
        let word = "";
        for (const element of arr) {
            if (element === "," && strike === false) {
                tempArr.push(element);
                tokens.push("word");
                strike = true;
                word = "";
            }
            else if (element === "," && strike === true) {
                break
            }
            else if (ahead === true) {
                ahead = false;
                tempArr.push(element)
                tokens.push(temp);
                word = "";
            }
            else if (element === "}") {
                open = false;
                tempArr.push(word);
                tempArr.push(element)
                tokens.push("word");
                word = "";
            }
            else if (open == true && element !== "}") {
                tempArr.push(word);
                tempArr.push(element)
                tokens.push(temp);
                word = "";
            }
            else if (element === "from" || element === "in" || element === "sheet") {
                ahead = true;
                temp = "get"
                tempArr.push(word);
                tempArr.push(element)
                tokens.push("word");
                word = "";

            }
            else if (element === "at") {
                ahead = true;
                temp = "input"
                tempArr.push(word);
                tokens.push("word");
                tempArr.push(element)
                word = "";
            }
            else if (element === "=" || element === "in" || element === "the") {
                ahead = true;
                temp = "set"
                tempArr.push(word);
                tokens.push("word");
                tempArr.push(element)
                word = "";
            }
            else if (element === "{") {
                open = true;
                temp = "text";
                tempArr.push(word);
                tempArr.push(element)
                tokens.push("word");
                word = "";
            }
            else {
                if(word !== '')
                word = word.concat(' ', element);
                // console.log(word);
            }
            if (word !== ""){
                tempArr.push(word);
            }

            // else {
            //     tempArr.push(element)
            //     tokens.push("word");
            // }

        }
        tempArr.push("end")
        tokens.push("word")
        console.log("function", tempArr);
        console.log("tokens", tokens);
        return tempArr
    }



    const handleClick = () => {
        const dataMap = new Map(Object.entries(data));
        console.log(dataMap);
        dataMap.forEach((value, key, map) => {
            if (isNuber(key)) {
                value.Function.forEach((element) => {
                    console.log(element.Name)
                    //!array of syntax detail starts
                    if (element.SyntaxDetail !== undefined) {
                        for (let index in element.SyntaxDetail) {
                            if (element.SyntaxDetail[index].Constants === undefined) {
                                const str = element.SyntaxDetail[index].Instruction.replace(regex, " ")
                                const tempArr = str.split(" ");
                                const temp = tempArr.filter((element) => {
                                    if (element !== '') {
                                        return element
                                    }
                                })
                                const gen = parser(temp);
                                console.log("SyntaxDetail", gen);
                            }

                        }
                    }
                    else {
                        console.log(element.Syntax);
                        let str = element.Syntax;
                        let tempArr = str;
                        try {
                            str = str.replace(regex, " ");
                            tempArr = str.split(" ");

                        }
                        catch (e) {
                            console.log("error");
                        }
                        const temp = tempArr.filter((element) => {
                            if (element !== '') {
                                return element
                            }
                        })
                        const gen = parser(temp);
                        console.log("Syntax", gen);
                    }
                })
            }
        })
    }

    return (
        <>
            <Button type='primary' onClick={handleClick}>
                Testing
            </Button>
        </>
    )
}


export default SyntaxGen;