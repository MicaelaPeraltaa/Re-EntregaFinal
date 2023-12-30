import ItemList from '../../components/ItemList/ItemList';
import { ThemeContext } from '../../context/ThemeContext';
import './ItemListContainer.css'
import { useContext, useEffect, useState } from 'react';
//firebase//
import { collection, getDocs, query, where } from 'firebase/firestore';
import {db} from "../../firebase/config"
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const colortheme = useContext(ThemeContext);

const [products, setProductos] = useState([]);

const categoria = useParams().category;

  useEffect(() =>{

    const productosRef =collection(db, "products");

   const q = categoria ? query(productosRef, where('category', '==', categoria)): productosRef;

    getDocs(q)
    .then((resp) =>{

      setProductos(
        resp.docs.map((doc)=>{
          return { ...doc.data(), id: doc.id}
        })
      )
    })

  }, [categoria]);

  return (
      <div style={{
        backgroundColor: colortheme.theme === 'light' ? '#a3b8ff' : '#a4a3ff',
      }}>
          
          <ItemList products={products} />
          </div>
      );
  };

export default ItemListContainer;




