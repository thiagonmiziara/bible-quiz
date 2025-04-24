import { cert } from "firebase-admin/app";

const decodedKey = Buffer.from(
  process.env.FIREBASE_PRIVATE_KEY_BASE64 as string,
  "base64"
).toString("utf-8");

export const firebaseCert = cert({
  projectId: process.env.FIREBASE_PROJECT_ID as string,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string,
  privateKey: decodedKey,
});
