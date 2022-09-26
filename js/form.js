document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = "528116304469";

  const cliente = document.querySelector("#cliente").value;
  const fecha = document.querySelector("#fecha").value;
  const hora = document.querySelector("#hora").value;
  const empleado = document.querySelector("#empleado").value;
  const servicio = document.querySelector("#servicio").value;
  const resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=528116304469&text=
		*_Partydise_*%0A
		*Solicitud de pedido*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A
		*Indica la fecha de tu evento*%0A
		${fecha}%0A
		*Indica la hora de tu evento*%0A
		${hora}%0A
		*Cajita de preferencia*%0A
		${empleado}%0A
		*¿Algun otro servicio que desee realizar?*%0A
		${servicio}`;

  if (cliente === "" || fecha === "" || hora === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
