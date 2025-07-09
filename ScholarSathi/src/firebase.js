import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAMHOaatrXtU6Htxp9d5Jz_MUtEo8OvVs0",
  authDomain: "scholarsathi-9b9de.firebaseapp.com",
  databaseURL: "https://scholarsathi-9b9de-default-rtdb.firebaseio.com",
  projectId: "scholarsathi-9b9de",
  storageBucket: "scholarsathi-9b9de.firebasestorage.app",
  messagingSenderId: "730933630746",
  appId: "1:730933630746:web:ccd0656b047b93bd1dbea3",
  measurementId: "G-GT0143W47B"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
8