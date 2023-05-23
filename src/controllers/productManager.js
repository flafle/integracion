
class ProductManager {
    constructor(){
        this.products = [];
    };

    static id = 0;

    //primer metodo que transforma en objeto
    addProduct(title, description, price, image, code, stock) {
       for(let i = 0; i < this.products.length; i ++) {
        if(this.products[i].code === code){
            console.log(`El código ${code} esta repetido`);
        }
       }
       
const newProduct = {
      title,
      description, 
      price,
      image,
      code,
      stock ,
}
if(!Object.values(newProduct).includes(undefined)){

    ProductManager.id++
    this.products.push ({
    ...newProduct, 
     id: ProductManager.id});
}else {
    console.log("Todos los campos son requeridos.")
}

    };


    //segundo metodo . devuelve el array con todos los products.
    getProducts (){
        return this.products;
    };



    existe(id) {
        return this.products.find((producto)=> producto.id === id)}

    //recibe un id y si no coincide que muestre error.
    getProductsById(id) {
     !this.existe(id) ? console.log("Not Found"): console.log(this.existe(id));}

    }
//

const productos = new ProductManager();
//consulta 1
console.log(productos.getProducts());

//agregar
productos.addProduct("titulo1", "descripcion1", 2500, "imagen1", "123", 10);
productos.addProduct("titulo2", "descripcion2", 2000, "imagen2", "124", 5);

//consulta 2
console.log(productos.getProducts());

// productos.getProductsById(2);