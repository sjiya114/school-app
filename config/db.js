import mysql from 'mysql2/promise'
//you may use createConnection for development but for production mode createpool is recommended
export const db=mysql.createPool({
host:process.env.NEXT_HOST,
user:process.env.NEXT_USER,
port:process.env.NEXT_PORT,
password:process.env.NEXT_PASSWORD,
database:process.env.NEXT_DB

})
try{
const connection=await db.getConnection();
console.log("connection creted successfully");
connection.release();
}
catch(err)
{
console.log("database connection failed");
process.exit(-1);
}
// async function initDB() {
//    try {
//      const createTableQuery = `
//        CREATE TABLE IF NOT EXISTS schooldata (
//          id INT AUTO_INCREMENT PRIMARY KEY,
//          name VARCHAR(20),
//          address VARCHAR(20),
//          city VARCHAR(20),
//          state VARCHAR(20),
//          contact INT,
//          image VARCHAR(60),
//          email VARCHAR(30)
//        )
//      `;
//      await db.query(createTableQuery);
//      console.log("✅ schooldata table is ready");
//    } catch (err) {
//      console.error("❌ Error creating table:", err.message);
//    }
//  }
//  initDB();
