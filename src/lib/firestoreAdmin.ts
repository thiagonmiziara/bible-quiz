import { initFirestore } from "@auth/firebase-adapter";
import { firebaseCert } from "./firebase";

export const firestoreAdmin = initFirestore({
  credential: firebaseCert,
});
