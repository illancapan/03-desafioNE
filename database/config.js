import pg from "pg";

const pool = new pg.Pool({
    host: "localhost",
    user: "postgres",
    password: "b00tcamp",
    database: "likeme",
    allowExitOnIdle: true,
});

pool.query("SELECT NOW()", (err, res) => {
if(err) {
    console.log('Error en conectar a base de datos😒😒, err')
} else {
  console.log('Base de datos conectada😊')}
})

export default pool;
