import { db } from "@/lib/firebase";
import { FieldValue } from "firebase-admin/firestore";

interface User {
  email: string;
  emailVerified?: boolean;
  image: string;
  name: string;
  points: number;
  level: number;
  questionAnswer: number[];
}

export async function setUser(userId: string, user: User) {
  try {
    // Referência ao documento do usuário
    const userRef = db.doc(`users/${userId}`);

    // Definir os dados do usuário
    await userRef.set(user, { merge: true });
  } catch (error) {
    console.error("Error setting user:", error);
    throw error;
  }
}

export async function addAnswerToUser(userId: string, answerId: number) {
  try {
    // Referência ao documento do usuário
    const userRef = db.doc(`users/${userId}`);

    // Atualizar o array questionAnswer
    await userRef.update({
      questionAnswer: FieldValue.arrayUnion(answerId),
    });
  } catch (error) {
    console.error("Error adding answer to user:", error);
    throw error;
  }
}

export async function updateUserPoints(userId: string, points: number) {
  try {
    const userRef = db.doc(`users/${userId}`);
    await userRef.update({ points });
  } catch (error) {
    console.error("Error updating user points:", error);
    throw error;
  }
}

export async function getUser(userId: string) {
  try {
    const userRef = db.collection("users").doc(userId);
    const userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {
      throw new Error("Usuário não encontrado");
    }

    return userSnapshot.data() as User;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    throw error;
  }
}
