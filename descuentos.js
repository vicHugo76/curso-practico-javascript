// const precioOriginal = 120;
// const descuento = 18;

const coupons = [
  {
    name: "JuanDC_es_Batman",
    discount: 15
  },
  {
    name: "pero_no_le_digas_a_nadie",
    discount: 30
  },
  {
    name: "es_un_secreto",
    discount: 25
  }
];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100; 
  return precioConDescuento;
}

function onClickPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("inputDiscount");
  var discountValue = inputDiscount.value;
  const inputCoupon = document.getElementById("inputDiscountCoupon");
  const couponValue = inputCoupon.value;
  const resultPC = document.getElementById("resultPC");
  const isCouponValueValid = function(coupon) {
    return coupon.name === couponValue;
  }
  const userCoupon = coupons.find(isCouponValueValid);
  if (!userCoupon) {
    resultPC.innerText = "No aplicaste cupon o el cupon " + couponValue + " no es valido";
  } else {
    discountValue = Number(discountValue) + userCoupon.discount; 
    resultPC.innerText = "El valor del cupon es de: " + userCoupon.discount;
  }
  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  // Forma de como agregar algun parrafo desde JavaScript a la pagina web
  const resultPD = document.getElementById("resultPD");
  resultPD.innerText = "El precio con los descuentos son $" + precioConDescuento;
}

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento
// });