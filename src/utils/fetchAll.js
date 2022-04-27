import { collection, getDocs } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const fetchAll = async () => {

  const querySnapshot = await getDocs(collection(db, "products"));
  const dataFromFirestore = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  return dataFromFirestore;
}

export default fetchAll;