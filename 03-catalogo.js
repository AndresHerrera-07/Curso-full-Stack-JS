import { productos } from "./productos.js";
// map: transformar
const conIva = productos.map((p) => ({ ...p, precioConIva: Math.round(p.precio * 1.13 * 100) /
100 }));
console.log("Con IVA:", conIva[0].precioConIva);
// filter: seleccionar
const disponibles = productos.filter((p) => p.stock > 0);
const entre20y40 = productos.filter((p) => p.precio >= 20 && p.precio <= 40);
console.log("Disponibles:", disponibles.length, "| Entre $20 y $40:", entre20y40.map((p) =>
p.nombre));
// find, some, every: preguntar
const noExiste = productos.find((p) => p.id === 99);
console.log("Producto 99:", noExiste?.nombre ?? "No encontrado");
console.log("¿Hay agotados?", productos.some((p) => p.stock === 0));
// toSorted: ordenar sin mutar
const masBaratos = productos.toSorted((a, b) => a.precio - b.precio).slice(0, 3);
console.log("3 más baratos:", masBaratos.map((p) => p.nombre));
// reduce: resumir
const valorInventario = productos.reduce((total, p) => total + p.precio * p.stock, 0);
const porCategoria = productos.reduce((conteo, p) => {
 conteo[p.categoria] = (conteo[p.categoria] ?? 0) + 1;
 return conteo;
}, {});
console.log("Inventario: $" + valorInventario.toFixed(2), porCategoria);
// Encadenar: los 3 más caros disponibles
const top3 = productos
 .filter((p) => p.stock > 0)
 .toSorted((a, b) => b.precio - a.precio)
 .slice(0, 3)
 .map((p) => p.nombre);
console.log("Top 3:", top3);