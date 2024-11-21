import AppDataSource from "../database/data-source";

const tables = [
  "DELETE FROM products_suppliers;",
  "DELETE FROM products;",
  "DELETE FROM address;",
  "DELETE FROM suppliers;",
  "DELETE FROM users;",
];

export async function dropDatabase() {
  const command = tables.join("\n");

  await AppDataSource.query(command);
}
