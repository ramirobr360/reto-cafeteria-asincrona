const menu = ["espresso", "cappuccino", "latte", "americano"];

function recibirPedido(producto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (menu.includes(producto)) {
        resolve(`Pedido recibido: ${producto}`);
      } else {
        reject(`No tenemos ${producto} en el menú`);
      }
    }, 3000);
  });
}

function prepararCafe(mensajePrevio) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const falla = Math.random() < 0.2;
      if (falla) {
        reject("La máquina está rota, no se pudo preparar el café");
        return;
      }
      const producto = mensajePrevio.replace("Pedido recibido: ", "");
      resolve(`☕ Café listo: ${producto}`);
    }, 3000);
  });
}

async function procesarPedido(producto) {
  try {
    const mensaje = await recibirPedido(producto);
    const resultado2 = await prepararCafe(mensaje);
    console.log("✅ Entregado: " + resultado2);
  } catch (error) {
    console.log("❌ Error: " + error);
  }
}

procesarPedido("americano");
procesarPedido("mocha");