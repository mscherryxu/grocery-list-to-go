import React, { useRef } from 'react'
import { firestore } from '../firebase'
import { addDoc, getDocs, collection, deleteDoc, doc } from "firebase/firestore"

export default function Home() {
  const itemRef = useRef()
  const quantityRef = useRef()
  const ref = collection(firestore, "grocery-list");

  const handleAdd = async(e) => {
    e.preventDefault();
    console.log(itemRef.current.value);

    const data = {
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

  const handleDelete = async(e) => {
    e.preventDefault();
    const data = {
      item: itemRef.current.value,
      quantity: quantityRef.current.value,
      id: itemRef.current.value
    }
    console.log('deleted', data);
    const docRef = doc(firestore, 'grocery-list', data.id)
      .then((snapshot) => {
        snapshot.docs.filter((doc) => {
          return doc.id !== data.id;
        })
      })
    try {
      deleteDoc(docRef);
    } catch(err) {
      console.error(err.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleAdd}>
        <div>
          <label>Enter grocery item</label>
          <input type="text" name="item" ref={itemRef} required />
        </div>
        <div>
          <label>Enter quantity</label>
          <input type="number" name="quantity" ref={quantityRef} required/>
        </div>
        <button type="submit">Add Item</button>
      </form>

      <form onSubmit={handleDelete}>
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
