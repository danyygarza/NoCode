import {
      getFirestore,
      doc,
      getDoc,
      updateDoc
} from "@firebase/firestore"
const db = getFirestore();
async function FirebaseGroupUpdate(){

      let colref = doc(db, "Excel", "Write");

      await updateDoc(colref, {
      category: 'READ & WRITE ' 
      });


      colref = doc(db, "Excel", "Write Formula");

      await updateDoc(colref, {
      category: 'READ & WRITE'
      });

      colref = doc(db, "Excel", "Write Variable Value");

      await updateDoc(colref, {
      category: 'READ & WRITE'
      });

      colref = doc(db, "Excel", "Read Cell Text");

      await updateDoc(colref, {
      category: 'READ & WRITE'
      });

      colref = doc(db, "Excel", "Substring");

      await updateDoc(colref, {
      category: 'READ & WRITE'
      });

      colref = doc(db, "Excel", "Read Column");

      await updateDoc(colref, {
      category: 'READ & WRITE'
      });

      colref = doc(db, "Excel", "Copy Column");

      await updateDoc(colref, {
      category: 'MANIPULATE COLUMNS'
      });

      colref = doc(db, "Excel", "Insert Column");

      await updateDoc(colref, {
      category: 'MANIPULATE COLUMNS'
      });

      colref = doc(db, "Excel", "Inset Column");

      await updateDoc(colref, {
      category: 'MANIPULATE COLUMNS'
      });

      colref = doc(db, "Excel", "Sort Columns");

      await updateDoc(colref, {
      category: 'MANIPULATE COLUMNS'
      });


      colref = doc(db, "Excel", "LoadWSheet");

      await updateDoc(colref, {
      category: 'CRUD Files'
      });

      colref = doc(db, "Excel", "NewWs");

      await updateDoc(colref, {
      category: 'CRUD Files'
      });

      colref = doc(db, "Excel", "Load Workbook");

      await updateDoc(colref, {
      category: 'CRUD Files'
      });


      colref = doc(db, "Excel", "Save");

      await updateDoc(colref, {
      category: 'CRUD Files'
      });

      colref = doc(db, "Excel", "Dispose");

      await updateDoc(colref, {
      category: 'CRUD Files'
      });

      colref = doc(db, "Excel", "New Workbook");

      await updateDoc(colref, {
      category: 'CRUD Files'
      });

      colref = doc(db, "Excel", "NewWs");

      await updateDoc(colref, {
      category: 'CRUD Files'
      });

      colref = doc(db, "Excel", 'ConvertTo2007');

      await updateDoc(colref, {
      category: 'CRUD Files'
      });


      colref = doc(db, "Excel", 'Apply Filter');

      await updateDoc(colref, {
      category: 'Sort Filter and Count'
      });



      colref = doc(db, "Excel", "Count Elements");

      await updateDoc(colref, {
      category: 'Sort Filter and Count' 
      });
      

      colref = doc(db, "Excel", "Remove Duplicate");

      await updateDoc(colref, {
      category: 'Sort Filter and Count'
      });


}

export default FirebaseGroupUpdate