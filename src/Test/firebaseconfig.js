import {
      getFirestore,
      doc,
      getDoc,
      updateDoc
} from "@firebase/firestore"

async function FirebaseUpdate(temp, array) {
      // Set the "capital" field of the city 'DC'

      temp.forEach(async element => {
            const db = doc(db, "Excel", temp);
            await updateDoc(db, {
                  capital: true
            });
      });



}

const Excel = ["Dispose", "Get Special", "Insert Column", "Load Workbook", "LoadWSheet", "New Workbook", "NewWs", "Read Cell Text", "Read Column", "Remove Columns", "Remove Duplicate", "Save", "Sort Columns", "Substring", "Write", "Write Formula", "Write Variable Value"]
const File = ["DeleteFile"];
const Mix = ["Add Value To List", "Delete", "For-ForEach", "Get Current Date", "Get process ID", "IF", "Run Script"];


FirebaseUpdate(Excel);
FirebaseUpdate(File);
FirebaseUpdate(Mix);



export default FirebaseUpdate