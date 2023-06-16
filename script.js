function agregarContacto() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var celular = document.getElementById("celular").value;

  if (nombre === "" || email === "" || celular === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }

  var contactosExistentes = document.getElementsByClassName("contacto");
  for (var i = 0; i < contactosExistentes.length; i++) {
    var contacto = contactosExistentes[i];
    var infoExistente = contacto.getElementsByTagName("p")[0].innerText;

    if (
      infoExistente.toLowerCase() ===
      (nombre + " - " + email + " - " + celular).toLowerCase()
    ) {
      alert("El contacto ya existe.");
      return;
    }
  }

  var listaContactos = document.getElementById("listaContactos");

  var nuevoContacto = document.createElement("div");
  nuevoContacto.classList.add("contacto");

  var info = document.createElement("p");
  info.textContent = nombre + " - " + email + " - " + celular;
  nuevoContacto.appendChild(info);

  var borrarBoton = document.createElement("button");
  borrarBoton.textContent = "Borrar";
  borrarBoton.classList.add("borrar-button");
  borrarBoton.onclick = function () {
    nuevoContacto.remove();
  };
  nuevoContacto.appendChild(borrarBoton);

  listaContactos.appendChild(nuevoContacto);

  document.getElementById("nombre").value = "";
  document.getElementById("email").value = "";
  document.getElementById("celular").value = "";
}
