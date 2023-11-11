import pg from "pg";

export const pool = new pg.Pool({
  port: 5432,
  host: "localhost",
  user: "postgres",
  password: "password",
  database: "tecnohouse",
});

pool.on("connect", () => {
  console.log("database connect");
});
