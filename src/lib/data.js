import db from "../data/db.json";
export const getData = async () => {
    return db;
};
export const postData = async (newUser) => {
    newUser.id = db.length + 1; // Assign a unique ID based on the current length of the database
    db.push(newUser);
  return { ok: true, message: 'Data received successfully' };
};