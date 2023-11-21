let inventory = [
    { code: "2356", name: 'Acetaminofen', quantity: 10 },
    { code: "0034", name: 'Diclofenalco', quantity: 20 }
];

let currentUser = null;


function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function showInventory() {
    const productList = document.getElementById('product-list');
    const edit = document.getElementById("edit")
    productList.innerHTML = '';

    inventory.forEach(product => {
        const li = document.createElement('li');
        const div = document.createElement("div")
        const button1 = document.createElement("button")
        const button2 = document.createElement("button")
        button1.innerHTML= "Editar";
        button1.addEventListener("click", (e)=>{
            const codeProduct = document.getElementById('edit-code');
            const productName = document.getElementById('edit-name');
            const productQuantity = parseInt(document.getElementById('edit-quantity'), 10);
            inventory.forEach(product => {
                if(product.code == e.target.className){ 
                    codeProduct.value = product.code
                    productName.value = product.name
                    productQuantity.valueOf = product.quantity
                }
            })
            edit.style.display = "block"
        })
        button2.innerHTML = "Eliminar";
        button2.addEventListener("click", (e)=>{
            inventory.forEach(product => {
                if(product.code == e.target.className){
                    productList.childNodes.forEach(li =>{
                        if(li.className == product.code){
                            console.log(li)
                            productList.removeChild(li)
                            inventory.splice(product.code == e.target.className)
                            showMessage('Producto eliminado del inventario.');
                        }
                    })
                }
            })
        })
        li.innerHTML = `<div><p>Código: ${product.code}</p>  <p>Nombre: ${product.name}</p>  <p>Cantidad: ${product.quantity}</p></div`;
        li.className = `${product.code}`
        button1.className = `${product.code}`
        button2.className = `${product.code}`
        div.appendChild(button1)
        div.appendChild(button2)
        li.appendChild(div)
        productList.appendChild(li);
    });
}


function showAddProductForm() {
}

function hideAddProductForm() {
    showMessage('');
}

function addProduct() {
    const codeProduct = document.getElementById('product-code').value;
    const productName = document.getElementById('product-name').value;
    const productQuantity = parseInt(document.getElementById('product-quantity').value, 10);

    if (productName && !isNaN(productQuantity) && productQuantity > 0 && codeProduct.length == 4) {
        inventory.push({code: codeProduct, name: productName, quantity: productQuantity });
        showInventory();
        showMessage('Producto agregado al inventario.');
    } else {
        showMessage('Por favor, ingrese un nombre de producto válido y una cantidad válida.');
    }
}

function edit(){
    const codeProduct = document.getElementById('edit-code').value;
    const productName = document.getElementById('edit-name').value;
    const productQuantity = parseInt(document.getElementById('edit-quantity').value, 10);
    const edit = document.getElementById("edit")
    const productList = document.getElementById('product-list');
    const div = document.createElement("div")
    const button1 = document.createElement("button")
    const button2 = document.createElement("button")
    button1.innerHTML= "Editar";
    button1.addEventListener("click", (e)=>{
        const codeProduct = document.getElementById('edit-code');
        const productName = document.getElementById('edit-name');
        const productQuantity = parseInt(document.getElementById('edit-quantity'), 10);
        inventory.forEach(product => {
            if(product.code == e.target.className){ 
                codeProduct.value = product.code
                productName.value = product.name
                productQuantity.valueOf = product.quantity
            }
        })
        edit.style.display = "block"
    })
    inventory.forEach(product => {
        if(product.code == codeProduct){ 
            productList.childNodes.forEach(li =>{
                if(li.className == product.code){
                    product.code = codeProduct;
                    product.name = productName;
                    product.quantity = productQuantity;
                    li.innerHTML = `<div><p>Código: ${product.code}</p>  <p>Nombre: ${product.name}</p>  <p>Cantidad: ${product.quantity}</p></div`;
                    li.className = `${product.code}`
                    button1.className = `${product.code}`
                    button2.className = `${product.code}`
                    button2.innerHTML = "Eliminar";
                    button2.addEventListener("click", (e)=>{
                        inventory.forEach(product => {
                            if(product.code == e.target.className){
                                productList.childNodes.forEach(li =>{
                                    if(li.className == product.code){
                                        console.log(li)
                                        productList.removeChild(li)
                                        inventory.splice(product.code == e.target.className)
                                        showMessage('Producto eliminado del inventario.');
                                    }
                                })
                            }
                        })
                    })
                    div.appendChild(button1)
                    div.appendChild(button2)
                    li.appendChild(div)
                    productList.appendChild(li);
                    edit.style.display = "none"
                    showMessage('Producto editado con exito.');
                }
            })
        }
    })
    
}

function cancelar(){
    const edit = document.getElementById("edit")
    edit.style.display = "none";
}

showInventory()

