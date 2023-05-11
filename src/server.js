// Importación del módulo express y la clase ProductManager
import express from "express";
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from './routes/cart.routes.js';


// creación de express
const app = express();
const port = 8080;

// Middleware para parsear el cuerpo de las solicitudes HTTP
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))

// Inicialización del servidor HTTP
app.listen(port, () => {
    console.log(`listening on localhost: ${port}`)
});
// Rutas 
app.use("/api/products", productsRouter)
app.use("/api/carts", cartsRouter)

// Manejo de errores // Si se ingresa una URL que no existe en la aplicación, se maneja a través de not found
app.get("*"), (req, res, next) => {
    res.status(404).json({status: "error", msg: "Not Found", data: {} })

}
