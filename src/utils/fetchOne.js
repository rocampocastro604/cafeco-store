import { doc, getDoc } from "firebase/firestore";
import db from './firebaseConfig';

const fetchOne = async (itemId) => {
  const docRef = doc(db, "products", itemId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let result = {
      id: itemId,
      ...docSnap.data()
    }
    return(result);
  } else {
    console.log("No such document!");
  }
}

export default fetchOne;