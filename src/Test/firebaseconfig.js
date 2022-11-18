import { getFirestore, doc, getDoc, updateDoc } from "@firebase/firestore";
import { async } from "@firebase/util";
const db = getFirestore();

async function FirebaseUpdate() {
  let colRef = doc(db, "Excel", "Write ");

  // Set the "capital" field of the city 'DC'
  try {
    await updateDoc(colRef, {
      forms: {
        1: {
          0: {
            PlaceHolder: 'Excel Write "',
            title: 'Excel Write "',
            type: "word",
          },
          1: {
            PlaceHolder: "<something>",
            title: "<something>",
            type: "get",
          },
          2: {
            PlaceHolder: "in",
            title: "in",
            type: "word",
          },
          3: {
            PlaceHolder: "<worksheetKey>",
            title: "<worksheetKey>",
            type: "get",
          },
          4: {
            PlaceHolder: "cell",
            title: "cell",
            type: "word",
          },
          5: {
            PlaceHolder: "<ColRow>",
            title: "<ColRow>",
            type: "set",
          },
        },
        2: {
          0: {
            PlaceHolder: 'Excel Write "',
            title: "write",
            type: "word",
          },
          1: {
            PlaceHolder: "<something>",
            title: "<something>",
            type: "set",
          },
          2: {
            PlaceHolder: "in",
            title: "in",
            type: "word",
          },
          3: {
            PlaceHolder: "<ColRow>",
            title: "<ColRow>",
            type: "set",
          },
          4: {
            PlaceHolder: "with format",
            title: "with format",
            type: "word",
          },
          5: {
            PlaceHolder: "<format>",
            title: "<format>",
            type: "set",
          },
        },
      },
    });
  } catch (error) { console.log('error',error)}

  colRef = doc(db, "Excel", "Apply Filter");

  // Set the "capital" field of the city 'DC'
  await updateDoc(colRef, {
    forms: {
      1: {
        0: {
          PlaceHolder: "Excel ApplyFilter to the worksheet ",
          title: "write",
          type: "word",
        },
        1: {
          PlaceHolder: " in table {",
          title: " in table {",
          type: "word",
        },
        2: {
          PlaceHolder: "<tableName>",
          title: "<tableName>",
          type: "get",
        },
        3: {
          PlaceHolder: "<worksheetKey>",
          title: "<worksheetKey>",
          type: "get",
        },
        4: {
          PlaceHolder: "cell",
          title: "cell",
          type: "word",
        },
        5: {
          PlaceHolder: "<ColRow>",
          title: "<ColRow>",
          type: "set",
        },
      },
      2: {
        0: {
          PlaceHolder: "Excel ApplyFilter to the worksheet",
          title: "Excel ApplyFilter to the worksheet",
          type: "word",
        },
        1: {
          PlaceHolder: "<worksheetKey>",
          title: "<worksheetKey>",
          type: "get",
        },
        2: {
          PlaceHolder: " to the column with the index {",
          title: " to the column with the index {",
          type: "word",
        },
        3: {
          PlaceHolder: "<columnIndex>",
          title: "<worksheetKey>",
          type: "get",
        },
        4: {
          PlaceHolder: '} with the criteria "',
          title: '} with the criteria "',
          type: "word",
        },
        5: {
          PlaceHolder: "<criteria>",
          title: "<criteria>",
          type: "set",
        },
        6: {
          PlaceHolder: '" and copy their value on "',
          title: '" and copy their value on "',
          type: "word",
        },
        7: {
          PlaceHolder: '<saveVariable> "',
          title: '<saveVariable> "',
          type: "get",
        },
      },
    },
  });

  colRef = doc(db, "Excel", "Define Variable");

  // Set the "capital" field of the city 'DC'
  await updateDoc(colRef, {
    forms: {
      1: {
        0: {
          PlaceHolder: 'DefineVariable as "',
          title: "write",
          type: "word",
        },
        1: {
          PlaceHolder: " <variableName>",
          title: " <variableName>",
          type: "set",
        },
        2: {
          PlaceHolder: '"',
          title: '"',
          type: "word",
        },
      },
      2: {
        0: {
          PlaceHolder: 'DefineVariable as "',
          title: 'DefineVariable as "',
          type: "word",
        },
        1: {
          PlaceHolder: " <variableName>",
          title: " <variableName>",
          type: "set",
        },
        2: {
          PlaceHolder: '"',
          title: '"',
          type: "word",
        },
        3: {
          PlaceHolder: 'with the value "',
          title: 'with the value "',
          type: "word",
        },
        4: {
          PlaceHolder: "<value>",
          title: "<value>",
          type: "get",
        },
        5: {
          PlaceHolder: '"',
          title: '"',
          type: "word",
        },
      },
    },
  });

  colRef = doc(db, "Excel", "Dispose");

  // Set the "capital" field of the city 'DC'
  await updateDoc(colRef, {
    forms: {
      1: {
        0: {
          PlaceHolder: "Excel Dispose ",
          title: "Excel Dispose ",
          type: "word",
        },
        1: {
          PlaceHolder: " <variableName>",
          title: " <variableName> ",
          type: "get",
        },
      },
    },
  });

  colRef = doc(db, "Excel", "Copy Column");

  // Set the "capital" field of the city 'DC'
  await updateDoc(colRef, {
    forms: {
      1: {
        0: {
          PlaceHolder: "<columnIndexOrig> ",
          title: "<columnIndexOrig>",
          type: "get",
        },
        1: {
          PlaceHolder: "from",
          title: "from",
          type: "word",
        },
        2: {
          PlaceHolder: "<worksheetKeyOrig>",
          title: "<worksheetKeyOrig>",
          type: "get",
        },
        3: {
          PlaceHolder: "<rowOffsetOrig>",
          title: "<rowOffsetOrig>",
          type: "get",
        },
        4: {
          PlaceHolder: " to the sheet",
          title: " to the sheet",
          type: "word",
        },
        5: {
          PlaceHolder: "<worksheetKeyDest>",
          title: "<worksheetKeyDest>",
          type: "get",
        },
        6: {
          PlaceHolder: " in column ",
          title: " in column ",
          type: "word",
        },
        7: {
          PlaceHolder: " <columnIndexDest> ",
          title: " <columnIndexDest> ",
          type: "get",
        },
        8: {
          PlaceHolder: " start_at ",
          title: " start_at ",
          type: "word",
        },
        9: {
          PlaceHolder: "<rowOffsetDest>",
          title: "<rowOffsetDest>",
          type: "get",
        },
      },
      2: {
        0: {
          PlaceHolder: " CopyColumn ",
          title: " CopyColumn ",
          type: "word",
        },
        1: {
          PlaceHolder: "<columnIndexOrig>",
          title: "<columnIndexOrig>",
          type: "get",
        },
        2: {
          PlaceHolder: "from",
          title: " from",
          type: "word",
        },
        3: {
          PlaceHolder: " <worksheetKeyDest>",
          title: " <worksheetKeyDest> ",
          type: "get",
        },
        4: {
          PlaceHolder: " in column ",
          title: " in column ",
          type: "word",
        },
        5: {
          PlaceHolder: "<columnIndexDest>",
          title: "<columnIndexDest>",
          type: "get",
        },
        6: {
          PlaceHolder: "start_at",
          title: "start_at",
          type: "word",
        },
        7: {
          PlaceHolder: "<rowOffsetDest>",
          title: '<saveVariable> "',
          type: "get",
        },
        8: {
          PlaceHolder: "--visible",
          title: "--visible",
          type: "word",
        },
      },
    },
  });

  colRef = doc(db, "Excel", "Insert Column");

  // Set the "capital" field of the city 'DC'
  await updateDoc(colRef, {
    forms: {
      1: {
        0: {
          PlaceHolder: "Excel InsertCol ",
          title: "Excel InsertCol",
          type: "word",
        },
        1: {
          PlaceHolder: "<worksheetKey>",
          title: "<worksheetKey>",
          type: "get",
        },
        2: {
          PlaceHolder: "at",
          title: "at",
          type: "word",
        },
        3: {
          PlaceHolder: "<colIndex>",
          title: "<colIndex>",
          type: "get",
        },
      },
    },
  });

  colRef = doc(db, "Excel", "LoadWSheet");

  // Set the "capital" field of the city 'DC'
  await updateDoc(colRef, {
    forms: {
      1: {
        0: {
          PlaceHolder: "<workbookKey>",
          title: "<workbookKey>",
          type: "get",
        },
        1: {
          PlaceHolder: 'sheet "',
          title: 'sheet "',
          type: "word",
        },
        2: {
          PlaceHolder: "<sheetName>",
          title: "<sheetName>",
          type: "get",
        },
        3: {
          PlaceHolder: '" as ',
          title: '" as ',
          type: "word",
        },
        4: {
          PlaceHolder: "<worksheetKey>",
          title: "<worksheetKey>",
          type: "get",
        },
      },
    },
  });

  colRef = doc(db, "Excel", "New Workbook");

  // Set the "capital" field of the city 'DC'
  await updateDoc(colRef, {
    forms: {
      1: {
        0: {
          PlaceHolder: 'NewWB in "',
          title: 'NewWB in "',
          type: "word",
        },
        1: {
          PlaceHolder: "<path>",
          title: "<path>",
          type: "get",
        },
        2: {
          PlaceHolder: '" as',
          title: '" as',
          type: "word",
        },
        3: {
          PlaceHolder: '" as ',
          title: '" as ',
          type: "word",
        },
        4: {
          PlaceHolder: "<workbookName>",
          title: "<workbookName>",
          type: "get",
        },
      },
      2: {
        0: {
          PlaceHolder: "NewWB in {",
          title: "NewWB in {",
          type: "word",
        },
        1: {
          PlaceHolder: "<path>",
          title: "<path>",
          type: "get",
        },
        2: {
          PlaceHolder: "} as {",
          title: "} as {",
          type: "word",
        },
        3: {
          PlaceHolder: "<workbookName>",
          title: "<workbookName>",
          type: "get",
        },
        4: {
          PlaceHolder: "}",
          title: "}",
          type: "word",
        },
      },
    },
  });

  colRef = doc(db, "Excel", "NewWs");

  // Set the "capital" field of the city 'DC'
  await updateDoc(colRef, {
    forms: {
      1: {
        0: {
          PlaceHolder: "NewWs in",
          title: "NewWs in",
          type: "word",
        },
        1: {
          PlaceHolder: "<workbookKey>",
          title: " <workbookKey> ",
          type: "get",
        },
        2: {
          PlaceHolder: '" as ',
          title: '" as ',
          type: "word",
        },
        3: {
          PlaceHolder: "<worksheetKey> ",
          title: "<worksheetKey>",
          type: "get",
        },
      },
      2: {
        0: {
          PlaceHolder: "NewWs in_Wb",
          title: "NewWs in_Wb",
          type: "as",
        },
        1: {
          PlaceHolder: "<workbookKey>",
          title: "<workbookKey>",
          type: "get",
        },
        2: {
          PlaceHolder: " as",
          title: " as",
          type: "word",
        },
        3: {
          PlaceHolder: "<worksheetKey>",
          title: "<worksheetKey>",
          type: "get",
        },
        4: {
          PlaceHolder: "after ",
          title: "after ",
          type: "word",
        },
        5: {
          PlaceHolder: "<wsName> ",
          title: "<wsName> ",
          type: "get",
        },
      },
    },
  });

  colRef = doc(db, "Excel", "Read Cell Text");

  // Set the "capital" field of the city 'DC'
  await updateDoc(colRef, {
    forms: {
      1: {
        0: {
          PlaceHolder: "ReadCellText from the worksheet {",
          title: "ReadCellText from the worksheet {",
          type: "word",
        },
        1: {
          PlaceHolder: "<worksheetKey>",
          title: " <worksheetKey>",
          type: "get",
        },
        2: {
          PlaceHolder: '} from the cell {',
          title: '} from the cell {',
          type: "word",
        },
        3: {
          PlaceHolder: "<Row>",
          title: "<Row>",
          type: "get",
        },
        4: {
          PlaceHolder: ',',
          title: ",",
          type: "word",
        },
        5: {
          PlaceHolder: "<Column>",
          title: "<Column>",
          type: "get",
        },
        6: {
          PlaceHolder: '} and save its value as {',
          title: "} and save its value as {",
          type: "word",
        },
        7: {
          PlaceHolder: '<varName>',
          title: "<varName>",
          type: "get",
        },
        8: {
          PlaceHolder: '}',
          title: "}",
          type: "word",
        },
      },
      2: {
        0: {
          PlaceHolder: "ReadCellText from the worksheet {",
          title: "ReadCellText from the worksheet {",
          type: "word",
        },
        1: {
          PlaceHolder: "<worksheetKey>",
          title: " <worksheetKey>",
          type: "get",
        },
        2: {
          PlaceHolder: '} from the cell {LastRow,',
          title: '} from the cell {LastRow,',
          type: "word",
        },
        3: {
          PlaceHolder: "<Column>",
          title: "<Column>",
          type: "get",
        },
        4: {
          PlaceHolder: '} and save its value as {',
          title: "} and save its value as {",
          type: "word",
        },
        5: {
          PlaceHolder: "<varName>",
          title: "<varName>",
          type: "get",
        },
        6: {
          PlaceHolder: '}',
          title: "}",
          type: "word",
        },
      },
    },
  });

  colRef = doc(db, "Excel", "Read Column");

  // Set the "capital" field of the city 'DC'
  await updateDoc(colRef, {
    forms: {
      1: {
        0: {
          PlaceHolder: " Excel ReadCellText from the worksheet {",
          title: "ReadCellText from the worksheet {",
          type: "word",
        },
        1: {
          PlaceHolder: "<worksheetKey>",
          title: " <worksheetKey>",
          type: "get",
        },
        2: {
          PlaceHolder: ' with the column index {',
          title: ' with the column index {',
          type: "word",
        },
        3: {
          PlaceHolder: "<columnIndex>",
          title: "<columnIndex>",
          type: "get",
        },
        4: {
          PlaceHolder: '} and save its value as {',
          title: "} and save its value as {",
          type: "word",
        },
        5: {
          PlaceHolder: "<varName>",
          title: "<varName>",
          type: "} with nulls",
        },
      },
      2: {
        0: {
          PlaceHolder: "Excel ReadColumn from the worksheet",
          title: "ReadCellText from the worksheet {",
          type: "word",
        },
        1: {
          PlaceHolder: "<worksheetKey>",
          title: " <worksheetKey>",
          type: "get",
        },
        2: {
          PlaceHolder: 'with the column index {',
          title: 'with the column index {',
          type: "word",
        },
        3: {
          PlaceHolder: "<columnIndex>",
          title: "<columnIndex>",
          type: "get",
        },
        4: {
          PlaceHolder: '} and save its value as {',
          title: "} and save its value as {",
          type: "word",
        },
        5: {
          PlaceHolder: "<varName>",
          title: "<varName>",
          type: "get",
        },
        6: {
          PlaceHolder: '} with nulls',
          title: "} with nulls",
          type: "word",
        },
      },
    },
  });

  colRef = doc(db, "Excel", "Remove Columns");

  // Set the "capital" field of the city 'DC'
  await updateDoc(colRef, {
    forms: {
      1: {
        0: {
          PlaceHolder: "RemoveCols from",
          title: "RemoveCols from",
          type: "word",
        },
        1: {
          PlaceHolder: "at [",
          title: " at [ ",
          type: "word",
        },
        2: {
          PlaceHolder: '<index1> ',
          title: '<index1>',
          type: "get",
        },
        3: {
          PlaceHolder: "] ",
          title: "]",
          type: "word",
        },
      }
    },
  });

  colRef = doc(db, "Excel", "Remove Duplicate");

  // Set the "capital" field of the city 'DC'
  await updateDoc(colRef, {
    forms: {
      1: {
        0: {
          PlaceHolder: "RemoveDuplicates from",
          title: "RemoveDuplicates from",
          type: "word",
        },
        1: {
          PlaceHolder: "<worksheetKey>",
          title: " <worksheetKey>",
          type: "get",
        },
      },
      2: {
        0: {
          PlaceHolder: "RemoveDuplicates from",
          title: "RemoveDuplicates from",
          type: "word",
        },
        1: {
          PlaceHolder: "<worksheetKey>",
          title: " <worksheetKey>",
          type: "get",
        },
        3: {
          PlaceHolder: "with_header",
          title: "with_header",
          type: "word",
        },
        4: {
          PlaceHolder: "<hasHeader>",
          title: " <hasHeader>",
          type: "get",
        },
      }
    },
  });

  colRef = doc(db, "Excel", "Save");

  // Set the "capital" field of the city 'DC'
  await updateDoc(colRef, {
    forms: {
      1: {
        0: {
          PlaceHolder: "Save",
          title: "Save",
          type: "word",
        },
        1: {
          PlaceHolder: "<worksheetKey>",
          title: " <worksheetKey>",
          type: "get",
        },
      },
      2: {
        0: {
          PlaceHolder: "Save",
          title: "Save",
          type: "word",
        },
        1: {
          PlaceHolder: "<worksheetKey>",
          title: " <worksheetKey>",
          type: "get",
        },
        3: {
          PlaceHolder: "and close",
          title: "and close",
          type: "word",
        },
      }
    },
  });

  colRef = doc(db, "Excel", "Sort Columns");

  // Set the "capital" field of the city 'DC'
  await updateDoc(colRef, {
    forms: {
      1: {
        0: {
          PlaceHolder: "SortColumns in d",
          title: "SortColumns in",
          type: "word",
        },
        1: {
          PlaceHolder: "<worksheetKey>",
          title: " <worksheetKey>",
          type: "get",
        },
        2: {
          PlaceHolder: 'by column { ',
          title: 'by column { ',
          type: "word",
        },
        3: {
          PlaceHolder: "<colindex> ",
          title: "<colindex>",
          type: "set",
        },
        4: {
          PlaceHolder: "} ",
          title: "} ",
          type: "word",
        },
        5: {
          PlaceHolder: "<order>",
          title: "<order>",
          type: "set",
        },
        6: {
          PlaceHolder: "header ",
          title: " header ",
          type: "word",
        },
        7: {
          PlaceHolder: "<isHeader>",
          title: "<isHeader>",
          type: "set",
        },
      },
      2: {
        0: {
          PlaceHolder: "SortColumns in",
          title: "SortColumns in",
          type: "word",
        },
        1: {
          PlaceHolder: "<worksheetKey>",
          title: " <worksheetKey>",
          type: "get",
        },
        2: {
          PlaceHolder: 'in UsedRange by columns {',
          title: 'in UsedRange by columns {',
          type: "word",
        },
        3: {
          PlaceHolder: "<colindex1|order1> ",
          title: "<colindex1|order1>",
          type: "set",
        },
        4: {
          PlaceHolder: ", ",
          title: ",",
          type: "word",
        },
        5: {
          PlaceHolder: "<colindex2|order2> ",
          title: "<colindex2|order2>",
          type: "set",
        },
        6: {
          PlaceHolder: ", ",
          title: " , ",
          type: "word",
        },
        7: {
          PlaceHolder: "<colindex3|order3> ",
          title: "<colindex3|order3>",
          type: "set",
        },
        8: {
          PlaceHolder: "} header",
          title: "} header",
          type: "set",
        },
        9: {
          PlaceHolder: "<isHeader>",
          title: "<isHeader>",
          type: "set",
        },
        10: {
          PlaceHolder: "  --Function still under development ",
          title: "   --Function still under development ",
          type: "word",
        },
      },
    },
  });

  colRef = doc(db, "Excel", "Write Formula");

  // Set the "capital" field of the city 'DC'
  await updateDoc(colRef, {
    forms: {
      1: {
        0: {
          PlaceHolder: 'Excel WriteFormula',
          title: 'Excel WriteFormula',
          type: "word",
        },
        1: {
          PlaceHolder: '<worksheetKey> ',
          title: '<worksheetKey> ',
          type: "get",
        },
        2: {
          PlaceHolder: "in",
          title: " in",
          type: "word",
        },
        3: {
          PlaceHolder: '<rangeKey> ',
          title: '<rangeKey>',
          type: "set",
        },
        4: {
          PlaceHolder: ' formula "',
          title: ' formula "',
          type: "word",
        },
        5: {
          PlaceHolder: '<formula>',
          title: ' <formula>',
          type: "set",
        },
        6: {
          PlaceHolder: '"',
          title: '"',
          type: "word",
        },
      },
      2: {
        0: {
          PlaceHolder: 'Excel WriteFormula',
          title: 'Excel WriteFormula',
          type: "word",
        },
        1: {
          PlaceHolder: '<worksheetKey> ',
          title: '<worksheetKey> ',
          type: "get",
        },
        2: {
          PlaceHolder: "in",
          title: " in",
          type: "word",
        },
        3: {
          PlaceHolder: '<rangeKey> ',
          title: '<rangeKey>',
          type: "set",
        },
        4: {
          PlaceHolder: '<formula>',
          title: ' <formula>',
          type: "set",
        },

      }
    },
  });

  colRef = doc(db, "Excel", "Write Variable Value");

  // Set the "capital" field of the city 'DC'
  await updateDoc(colRef, {
    forms: {
      1: {
        0: {
          PlaceHolder: 'Excel WriteVariableValue { ',
          title: 'Excel WriteVariableValue {',
          type: "word",
        },
        1: {
          PlaceHolder: "<variableName>",
          title: " <variableName>",
          type: "get",
        },
        3: {
          PlaceHolder: '} in { ',
          title: '} in {',
          type: "word",
        },
        4: {
          PlaceHolder: ' <worksheetKey>',
          title: ' <worksheetKey>',
          type: "get",
        },
        5: {
          PlaceHolder: '} start_at_row {',
          title: ' } start_at_row {',
          type: "wrod",
        },
        6: {
          PlaceHolder: '<rowIndex>',
          title: '<rowIndex>',
          type: "set",
        },
        7: {
          PlaceHolder: ' } start_at_column {',
          title: ' } start_at_column {',
          type: "word",
        },
        8: {
          PlaceHolder: '<columnIndex>',
          title: ' <columnIndex>',
          type: "set",
        },
        9: {
          PlaceHolder: '<rowIndex>',
          title: '<rowIndex>',
          type: "set",
        },
        10: {
          PlaceHolder: '}',
          title: '}',
          type: "word",
        },
      },
    },
  });
}

export default FirebaseUpdate;
