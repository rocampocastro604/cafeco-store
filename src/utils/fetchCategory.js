import { collection, getDocs } from "firebase/firestore";
import db from './firebaseConfig';

const fetchCategory = async (categoryId) => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const dataFromFirestore = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  const dataFiltered = dataFromFirestore.filter(item => item.process.toLowerCase() === categoryId)
  return dataFiltered;
}

export default fetchCategory;