import { productos } from "./productos.js";
const conNuevo = [...productos, { id: 13, nombre: "Bufanda", categoria: "accesorios", precio:
11, stock: 9, rating: 4.1 }];
const conOferta = productos.map((p) => (p.id === 3 ? { ...p, precio: 6 } : p));
const sinSandalias = productos.filter((p) => p.id !== 8);
console.log("Original:", productos.length, "| gorra a $" + productos[2].precio);
console.log("Copias:", conNuevo.length, "| gorra a $" + conOferta[2].precio, "|",
sinSandalias.length);