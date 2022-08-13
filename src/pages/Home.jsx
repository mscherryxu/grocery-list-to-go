import React, { useRef } from 'react'
import { firestore } from '../firebase'
import { addDoc, getDocs, collection } from "firebase/firestore"

export default function Home() {
  const itemRef = useRef()
  const quantityRef = useRef()
  const ref = collection(firestore, "grocery-list");

  const handleSave = async(e) => {
    e.preventDefault();
    console.log(itemRef.current.value);

    let data = {
      item: itemRef.current.value,
      quantity: quantityRef.current.value
    }
    try {
      addDoc(ref, data);
      getDocs(ref)
        .then((snapshot) => {
          console.log(snapshot.docs);
        })
    } catch(err) {
      console.error(err);
    }
  }
  return (
    <div>
      <form onSubmit={handleSave}>
        <div>
          <label>Enter grocery item</label>
          <input type="text" ref={itemRef} />
        </div>
        <div>
          <label>Enter quantity</label>
          <input type="number" ref={quantityRef} />
        </div>
        <button type="submit">Save</button>
      </form>
      <div>
      <div>
      </div>
      </div>
    </div>
  )
}
