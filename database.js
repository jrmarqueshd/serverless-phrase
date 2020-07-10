const { Client } = require("pg");

module.exports = async () => {
  const client = new Client();

  try {
    await client.connect();

    const query_res = await client.query("SELECT * FROM phrases ORDER BY RANDOM() LIMIT 1;");

    await client.end();

    return query_res.rows[0];

  } catch (error) {
    console.log(error);
    throw "Não foi possível buscar os dados.";
  }
}