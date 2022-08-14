import React, { useRef, useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { addDoc, getDocs, collection, deleteDoc } from 'firebase/firestore';

export default function Home() {
  const [deleteId, setDeleteId] = useState(null);
  const [groceryList, setGroceryList] = useState([]);
  const itemRef = useRef();
  const quantityRef = useRef();
  const collectionRef = collection(firestore, 'grocery-list');

  useEffect(() => {
    async function fetchData() {
      const snapshot = await getDocs(collectionRef);
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id, ref: doc.ref });
      });
      setGroceryList(list);
    }
    fetchData();
  });

  const handleAdd = async (e) => {
    e.preventDefault();
    console.log(itemRef.current.value);

    const data = {
      item: itemRef.current.value,
      quantity: quantityRef.current.value,
    };
    try {
      const newItem = await addDoc(collectionRef, data);
      /*const snapshot = await getDocs(ref);
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });*/
      let list = [...groceryList];
      list.push({ ...data, id: newItem.id, ref: newItem.ref });
      setGroceryList(list);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      if (deleteId !== '') {
        //const snapshot = await getDocs(ref);
        /* snapshot.docs.forEach(async (item) => {
          if (item.id === deleteId) {
            console.info('deleting', item.id);
            await deleteDoc(item.ref);
          }
        });
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });*/
        for (let i = 0; i < groceryList.length; i++) {
          if (groceryList[i].id === deleteId) {
            await deleteDoc(groceryList[i].ref);
          }
        }

        let list = [...groceryList];
        list.filter((item) => {
          return item.id !== deleteId;
        });
        setGroceryList(list);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <div>
          <label>Enter grocery item</label>
          <input type="text" name="item" ref={itemRef} required />
        </div>
        <div>
          <label>Enter quantity</label>
          <input type="number" name="quantity" ref={quantityRef} required />
        </div>
        <button type="submit">Add Item</button>
      </form>

      <form onSubmit={handleDelete} className="delete">
        <label>Item ID</label>
        <input
          type="text"
          name="id"
          required
          onChange={(e) => {
            setDeleteId(e.currentTarget.value);
          }}
        />
        <button>Delete Item</button>
      </form>
      <div>
        {groceryList.map((row) => {
          return (
            <p key={row.id}>
              {row.quantity} {row.item} ID: {row.id}
            </p>
          );
        })}
      </div>
    </div>
  );
}
