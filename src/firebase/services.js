import { db } from "./config";
import {
  addDoc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  doc,
} from "firebase/firestore";

export const addDocument = async (Collection, data) => {
  try {
    const newDocument = await addDoc(collection(db, Collection), data);

    console.log("Document written with ID: ", newDocument.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const getDocumentsByLoaiXe = async (Collection, type) => {
  try {
    const q = query(collection(db, Collection), where("loaixe", "==", type));
    const querySnapshot = await getDocs(q);
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.error("Error get document: ", error);
  }
};

export const getDocumentById = async (Collection, id) => {
  try {
    const docRef = doc(collection(db, Collection), id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      console.log("Document not found!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    return null;
  }
};

export const getDocuments1 = async (Collection) => {
  try {
    const q = query(collection(db, Collection));
    const querySnapshot = await getDocs(q);
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.error("Error get document: ", error);
  }
};

// export const addDocument = (collection, data) => {
//   const query = db.collection(collection);

//   query.add({
//     ...data,
//     uid: v4(),
//     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//   });
// };

// export const DelDocument = (collection, data) => {
//   let collectionRef = db.collection(collection).where("uid", "==", data);
//   collectionRef.get().then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//       doc.ref.delete();
//     });
//   });
// };

// export const DelAllDocument = (collection) => {
//   let collectionRef = db.collection(collection);
//   collectionRef.get().then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//       doc.ref.delete();
//     });
//   });
// };

// export const generateKeywords = (data) => {
//   // liet ke tat cac hoan vi. vd: name = ["David", "Van", "Teo"]
//   // => ["David", "Van", "Teo"], ["David", "Teo", "Van"], ["Teo", "David", "Van"],...
//   const name = data
//     .toLowerCase()
//     .split(" ")
//     .filter((word) => word);

//   const length = name.length;
//   let flagArray = [];
//   let result = [];
//   let stringArray = [];

//   /**
//    * khoi tao mang flag false
//    * dung de danh dau xem gia tri
//    * tai vi tri nay da duoc su dung
//    * hay chua
//    **/
//   for (let i = 0; i < length; i++) {
//     flagArray[i] = false;
//   }

//   const createKeywords = (name) => {
//     const arrName = [];
//     let curName = "";
//     name.split("").forEach((letter) => {
//       curName += letter;
//       arrName.push(curName);
//     });
//     return arrName;
//   };

//   function findPermutation(k) {
//     for (let i = 0; i < length; i++) {
//       if (!flagArray[i]) {
//         flagArray[i] = true;
//         result[k] = name[i];

//         if (k === length - 1) {
//           stringArray.push(result.join(" "));
//         }

//         findPermutation(k + 1);
//         flagArray[i] = false;
//       }
//     }
//   }

//   findPermutation(0);

//   const keywords = stringArray.reduce((acc, cur) => {
//     const words = createKeywords(cur);
//     return [...acc, ...words];
//   }, []);

//   return keywords;
// };
