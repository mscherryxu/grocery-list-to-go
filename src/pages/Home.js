import React, { useRef, useState, useEffect } from 'react';
import { addDoc, getDocs, collection, deleteDoc } from 'firebase/firestore';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
import { TextField, Typography, Button, Container } from '@mui/material';

// commented code was for material UI
// const styles = {
//   marginTop: 2,
//   marginBottom: 2,
//   display: 'block',
// };

export default function Home(props) {
  const [deleteId, setDeleteId] = useState(null);
  const [groceryList, setGroceryList] = useState([]);
  const itemRef = useRef();
  const quantityRef = useRef();
  const collectionRef = collection(props.firestore, 'grocery-list');

  // on mount once with an empty array
  useEffect(() => {
    async function fetchData() {
      // equivalent to findAll in Sequelize
      const snapshot = await getDocs(collectionRef);
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id, ref: doc.ref });
      });
      setGroceryList(list);
    }
    fetchData();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();

    const data = {
      item: itemRef.current.value,
      quantity: quantityRef.current.value,
    };
    try {
      const newItem = await addDoc(collectionRef, data);
      let list = [...groceryList];
      list.push({ ...data, id: newItem.id, ref: newItem });
      setGroceryList(list);
      itemRef.current.value = '';
      quantityRef.current.value = '';
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDelete = async (itemId) => {
    // if deleteId is not an empty sting
    if (deleteId !== '') {
      for (let i = 0; i < groceryList.length; i++) {
        if (groceryList[i].id === itemId) {
          await deleteDoc(groceryList[i].ref);
        }
      }
      const newGroceryList = groceryList.filter((item) => {
        return item.id !== itemId;
      });
      await setGroceryList(newGroceryList);
      setDeleteId(itemId);
    }
  };

  return (
    <Container>
      <form noValidate autoComplete="off" onSubmit={handleAdd}>
        <div className="form__group">
          <label className="form__label">Enter grocery item</label>
          <input
            type="text"
            name="item"
            ref={itemRef}
            className="form__field"
            required
          />
        </div>
        {/*Attempted to use material UI to add items*/}
        {/* <div>
          <TextField
            onChange={(e) => setItem(e.target.value)}
            sx={styles}
            type="text"
            name="item"
            ref={itemRef}
            label="Enter grocery item"
            variant="outlined"
            color="primary"
            required
          />
        </div>
        <div>
          <TextField
            onChange={(e) => setQuantity(e.target.value)}
            sx={styles}
            type="number"
            name="item"
            ref={quantityRef}
            label="Enter quantity"
            variant="outlined"
            color="primary"
            required
          />
        </div> */}
        <div className="form__group">
          <label className="form__label">Enter quantity</label>
          <input
            type="number"
            name="quantity"
            ref={quantityRef}
            className="form__field"
            required
          />
        </div>
        <div className="submit-button">
          <Button type="submit" color="primary" variant="contained">
            Add Item
          </Button>
        </div>
      </form>
      <div className="grocery-list">
        {groceryList.map((row) => {
          return (
            <p key={row.id} className="grocery-list-item">
              {row.quantity} {row.item}
              <Button
                type="button"
                color="error"
                variant="outlined"
                onClick={() => handleDelete(row.id)}
              >
                Delete
              </Button>
            </p>
          );
        })}
      </div>
    </Container>
  );
}
