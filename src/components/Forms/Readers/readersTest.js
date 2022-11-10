import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase'
import {collection, getDocs} from "firebase/firestore"


function readersTest() {
    
    const [data, setData] = useState([]);
    
    useEffect(() => {
        async function TableFunc(){
            var arr = [];
            var i = 0;
            const querySnapshot = await getDocs(collection(db, "Excel"));
            querySnapshot.forEach((doc) => {
                arr[i] = [];
                console.log(doc.id, " => ", doc.data());
                arr[i] = doc.data();
                i++;
            });
            console.log(arr);
            setData("set data", arr);
        }
        TableFunc()
    }, [])

    return (
        <>
            <div>readersTest</div>
            <div>{data}</div>
        </>
    )
}

export default readersTest