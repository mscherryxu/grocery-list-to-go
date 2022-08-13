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
          let list = [];
          snapshot.docs.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id })
          })
          console.log(list);
        })
    } catch(err) {
      console.error(err.message);
    }
  }
  return (
    <div>
      <form onSubmit={handleSave}>
        <div>
          <label>Enter grocery item</label>
          <input type="text" name="item" ref={itemRef} required />
        </div>
        <div>
          <label>Enter quantity</label>
          <input type="number" name="quantity" ref={quantityRef} required/>
        </div>
        <button type="submit">Save</button>
      </form>

      <form>
        <label>Delete</label>
        <input type="text" name="id" required />
        <button>Delete Item</button>
      </form>
      <div>
      <div>
      </div>
      </div>
    </div>
  )
}
