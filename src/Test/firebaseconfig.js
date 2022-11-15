import {
      getFirestore,
      doc,
      getDoc,
      updateDoc
} from "@firebase/firestore"

async function FirebaseUpdate(){

      const washingtonRef = doc(db, "cities", "DC");

      // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, {
      capital: true
      });

}

export default FirebaseUpdate