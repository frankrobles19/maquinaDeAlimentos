let productos = {'A': 270, 'B': 340, 'C': 390};

let monedas = [100, 50, 10];

let producto_elegido = prompt("Elija un producto (A, B, C): ");

if (producto_elegido in productos) {
    let monto = 0;
    while (monto < productos[producto_elegido]) {
        let moneda = parseInt(prompt("Ingrese una moneda (10, 50, 100): "));
        if (monedas.includes(moneda)) {
            monto += moneda;
        } else {
            alert("Moneda no aceptada, Intente de nuevo");
        }
    }
    let cambio = monto - productos[producto_elegido];
    if (cambio > 0) {
        alert("Su cambio es: ");

        for (let i = 0; i < monedas.length; i++) {
            while (cambio >= monedas[i]) {
                alert(monedas[i]);
                cambio -= monedas[i];
            }
        }
    }
} else {
    alert("Producto no disponible");
}