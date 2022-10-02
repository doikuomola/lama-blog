import mysql from 'mysql';

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'OnLeeM!ee1234',
  database: 'blog',
});
