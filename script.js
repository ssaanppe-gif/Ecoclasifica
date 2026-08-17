/* =========================================================
   ECOCLASIFICA
   Sistema de clasificación de residuos
========================================================= */


/* =========================================================
   BASE DE DATOS DE RESIDUOS
========================================================= */

const residuos = [

    {
        id: 1,
        nombre: "Botella de plástico",
        nombreCorto: "Botella PET",
        categoria: "plastico",
        icono: "🧴",
        tipo: "Reciclable",
        material: "Plástico PET",
        descripcion:
            "Las botellas de plástico PET pueden reciclarse cuando se encuentran vacías, limpias y separadas correctamente.",
        instrucciones:
            "Vacía la botella, enjuágala si es necesario, aplástala para reducir su volumen y deposítala en el contenedor correspondiente.",
        consejo:
            "Siempre que sea posible, reutiliza tu botella antes de desecharla.",
        palabrasClave: [
            "botella",
            "botella plastico",
            "botella de plastico",
            "pet",
            "botella pet",
            "envase plastico"
        ]
    },

    {
        id: 2,
        nombre: "Caja de cartón",
        nombreCorto: "Cartón",
        categoria: "papel",
        icono: "📦",
        tipo: "Reciclable",
        material: "Cartón",
        descripcion:
            "El cartón es un material reciclable que puede convertirse en nuevos productos de papel y cartón.",
        instrucciones:
            "Retira restos de comida, cinta adhesiva excesiva y otros materiales que no sean cartón. Luego aplástalo y sepáralo.",
        consejo:
            "Reutiliza las cajas para almacenar objetos antes de reciclarlas.",
        palabrasClave: [
            "caja",
            "caja carton",
            "carton",
            "cartón",
            "caja de carton"
        ]
    },

    {
        id: 3,
        nombre: "Hoja de papel",
        nombreCorto: "Papel",
        categoria: "papel",
        icono: "📄",
        tipo: "Reciclable",
        material: "Papel",
        descripcion:
            "El papel limpio y seco puede reciclarse y convertirse en nuevos productos de papel.",
        instrucciones:
            "Separa las hojas limpias y secas de otros residuos. Evita mezclar papel con restos de comida o líquidos.",
        consejo:
            "Utiliza ambas caras de las hojas antes de enviarlas al reciclaje.",
        palabrasClave: [
            "papel",
            "hoja",
            "hoja de papel",
            "cuaderno",
            "hojas"
        ]
    },

    {
        id: 4,
        nombre: "Botella de vidrio",
        nombreCorto: "Vidrio",
        categoria: "vidrio",
        icono: "🍾",
        tipo: "Reciclable",
        material: "Vidrio",
        descripcion:
            "Los envases de vidrio pueden reciclarse muchas veces sin perder sus principales propiedades.",
        instrucciones:
            "Vacía el envase y sepáralo de otros residuos. Manipúlalo con cuidado para evitar cortes.",
        consejo:
            "No mezcles vidrio roto con residuos que puedan ser manipulados directamente.",
        palabrasClave: [
            "vidrio",
            "botella vidrio",
            "botella de vidrio",
            "frasco",
            "frasco vidrio"
        ]
    },

    {
        id: 5,
        nombre: "Lata de aluminio",
        nombreCorto: "Lata",
        categoria: "metal",
        icono: "🥫",
        tipo: "Reciclable",
        material: "Aluminio",
        descripcion:
            "Las latas de aluminio pueden recuperarse y utilizarse para fabricar nuevos productos.",
        instrucciones:
            "Vacía la lata y, si es posible, enjuágala. Deposítala separada de residuos orgánicos.",
        consejo:
            "Evita dejar restos de bebidas o alimentos dentro de la lata.",
        palabrasClave: [
            "lata",
            "lata aluminio",
            "aluminio",
            "lata de aluminio",
            "conserva"
        ]
    },

    {
        id: 6,
        nombre: "Restos de comida",
        nombreCorto: "Residuos orgánicos",
        categoria: "organico",
        icono: "🍎",
        tipo: "Orgánico",
        material: "Materia orgánica",
        descripcion:
            "Los restos de frutas, verduras y otros alimentos son residuos orgánicos y pueden aprovecharse mediante compostaje.",
        instrucciones:
            "Separa los restos de comida de los materiales reciclables y deposítalos en el recipiente destinado a residuos orgánicos.",
        consejo:
            "El compostaje permite transformar muchos residuos orgánicos en un recurso útil para las plantas.",
        palabrasClave: [
            "comida",
            "restos comida",
            "restos de comida",
            "fruta",
            "verdura",
            "organico",
            "orgánico",
            "residuos organicos"
        ]
    },

    {
        id: 7,
        nombre: "Celular antiguo",
        nombreCorto: "Celular",
        categoria: "electronico",
        icono: "📱",
        tipo: "Residuo electrónico",
        material: "Componentes electrónicos",
        descripcion:
            "Los celulares contienen componentes y materiales que pueden recuperarse, pero no deben desecharse junto con la basura común.",
        instrucciones:
            "Guarda el dispositivo y llévalo a un punto de recolección de residuos de aparatos eléctricos y electrónicos.",
        consejo:
            "Antes de entregar un dispositivo, elimina tus datos personales y restablece el equipo cuando corresponda.",
        palabrasClave: [
            "celular",
            "telefono",
            "teléfono",
            "smartphone",
            "movil",
            "móvil",
            "iphone",
            "android"
        ]
    },

    {
        id: 8,
        nombre: "Cable USB",
        nombreCorto: "Cable",
        categoria: "electronico",
        icono: "🔌",
        tipo: "Residuo electrónico",
        material: "Metal, plástico y componentes electrónicos",
        descripcion:
            "Los cables contienen diferentes materiales que pueden recuperarse mediante procesos especializados.",
        instrucciones:
            "No los mezcles con residuos orgánicos. Llévalos a un punto de recolección de residuos electrónicos cuando sea posible.",
        consejo:
            "Guarda y reutiliza los cables que todavía funcionen.",
        palabrasClave: [
            "cable",
            "cable usb",
            "usb",
            "cargador",
            "cargador celular"
        ]
    },

    {
        id: 9,
        nombre: "Pila",
        nombreCorto: "Pilas",
        categoria: "peligroso",
        icono: "🔋",
        tipo: "Residuo especial",
        material: "Componentes químicos y metales",
        descripcion:
            "Las pilas contienen sustancias y materiales que requieren una gestión especial y no deben mezclarse con la basura común.",
        instrucciones:
            "Guárdalas en un lugar seguro y llévalas a un punto de recolección específico para pilas y baterías.",
        consejo:
            "Nunca arrojes pilas usadas al suelo, al agua o a un contenedor de basura común.",
        palabrasClave: [
            "pila",
            "pilas",
            "bateria",
            "batería",
            "baterias",
            "baterías"
        ]
    },

    {
        id: 10,
        nombre: "Bolsa de plástico",
        nombreCorto: "Bolsa",
        categoria: "plastico",
        icono: "🛍️",
        tipo: "Plástico",
        material: "Plástico",
        descripcion:
            "Las bolsas de plástico son residuos que pueden generar impactos ambientales cuando se utilizan y desechan de forma excesiva.",
        instrucciones:
            "Reutilízala cuando sea posible. Si existe un programa local de recuperación de bolsas, entrégala allí.",
        consejo:
            "Lleva una bolsa reutilizable para reducir el consumo de bolsas desechables.",
        palabrasClave: [
            "bolsa",
            "bolsa plastico",
            "bolsa de plastico",
            "bolsa plástico"
        ]
    },

    {
        id: 11,
        nombre: "Frasco de vidrio",
        nombreCorto: "Frasco",
        categoria: "vidrio",
        icono: "🫙",
        tipo: "Reciclable",
        material: "Vidrio",
        descripcion:
            "Los frascos de vidrio pueden reutilizarse o reciclarse cuando ya no son útiles.",
        instrucciones:
            "Vacía el frasco, retira los residuos que pueda contener y sepáralo correctamente.",
        consejo:
            "Puedes reutilizar los frascos para almacenar alimentos u objetos pequeños.",
        palabrasClave: [
            "frasco",
            "frasco vidrio",
            "frasco de vidrio",
            "tarro",
            "tarro vidrio"
        ]
    },

    {
        id: 12,
        nombre: "Periódico",
        nombreCorto: "Periódico",
        categoria: "papel",
        icono: "📰",
        tipo: "Reciclable",
        material: "Papel",
        descripcion:
            "Los periódicos limpios y secos pueden formar parte de la recuperación de papel.",
        instrucciones:
            "Mantén el periódico seco y sepáralo de residuos orgánicos y líquidos.",
        consejo:
            "Puedes reutilizar periódicos para manualidades o embalaje antes de reciclarlos.",
        palabrasClave: [
            "periodico",
            "periódico",
            "diario",
            "papel periodico"
        ]
    },

    {
        id: 13,
        nombre: "Lata de conserva",
        nombreCorto: "Conserva",
        categoria: "metal",
        icono: "🥫",
        tipo: "Reciclable",
        material: "Metal",
        descripcion:
            "Las latas metálicas utilizadas para alimentos pueden recuperarse mediante reciclaje.",
        instrucciones:
            "Vacía la lata y elimina los restos de comida antes de separarla.",
        consejo:
            "Ten cuidado con los bordes metálicos para evitar cortes.",
        palabrasClave: [
            "conserva",
            "lata conserva",
            "lata de conserva",
            "metal"
        ]
    },

    {
        id: 14,
        nombre: "Cáscara de plátano",
        nombreCorto: "Cáscara de fruta",
        categoria: "organico",
        icono: "🍌",
        tipo: "Orgánico",
        material: "Materia orgánica",
        descripcion:
            "Las cáscaras de frutas son residuos orgánicos que pueden aprovecharse mediante compostaje.",
        instrucciones:
            "Separa la cáscara de otros materiales y deposítala con los residuos orgánicos.",
        consejo:
            "Los residuos de frutas pueden aportar materia orgánica al compost.",
        palabrasClave: [
            "platano",
            "plátano",
            "cascara",
            "cáscara",
            "cascara platano",
            "fruta"
        ]
    },

    {
        id: 15,
        nombre: "Computadora antigua",
        nombreCorto: "Computadora",
        categoria: "electronico",
        icono: "💻",
        tipo: "Residuo electrónico",
        material: "Componentes electrónicos",
        descripcion:
            "Las computadoras contienen diversos materiales que requieren procesos especializados para su recuperación.",
        instrucciones:
            "No la arrojes a la basura común. Busca un programa o punto de recolección de aparatos electrónicos.",
        consejo:
            "Antes de entregar una computadora, realiza una copia de seguridad y elimina tus datos personales.",
        palabrasClave: [
            "computadora",
            "ordenador",
            "laptop",
            "portatil",
            "portátil",
            "pc"
        ]
    },

    {
        id: 16,
        nombre: "Envase de cartón para bebidas",
        nombreCorto: "Envase de bebidas",
        categoria: "otros",
        icono: "🧃",
        tipo: "Envase multicapa",
        material: "Materiales combinados",
        descripcion:
            "Algunos envases para bebidas están fabricados con varias capas de materiales y requieren sistemas específicos de recuperación.",
        instrucciones:
            "Vacía el envase y verifica las indicaciones del sistema de reciclaje disponible en tu localidad.",
        consejo:
            "Aplasta el envase después de vaciarlo para reducir su volumen.",
        palabrasClave: [
            "jugo",
            "zumo",
            "tetra",
            "tetrapak",
            "envase jugo",
            "caja leche",
            "leche"
        ]
    }

];


/* =========================================================
   VARIABLES
========================================================= */

const buscador = document.getElementById("buscadorResiduo");
const resultadoBusqueda = document.getElementById("resultadoBusqueda");
const listaResiduos = document.getElementById("listaResiduos");
const cantidadResiduos = document.getElementById("cantidadResiduos");


/* =========================================================
   MOSTRAR CANTIDAD DE RESIDUOS
========================================================= */

if (cantidadResiduos) {
    cantidadResiduos.textContent = residuos.length;
}


/* =========================================================
   NORMALIZAR TEXTO
   Sirve para que la búsqueda funcione aunque
   el usuario escriba mayúsculas o tildes.
========================================================= */

function normalizarTexto(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


/* =========================================================
   BUSCAR RESIDUO
========================================================= */

function buscarResiduo() {

    const texto = normalizarTexto(buscador.value);

    if (texto === "") {

        mostrarMensajeBusqueda(
            "🔎",
            "Escribe un residuo",
            "Introduce el nombre de un residuo para comenzar la búsqueda."
        );

        return;
    }


    const resultados = residuos.filter(residuo => {

        const nombre = normalizarTexto(residuo.nombre);
        const nombreCorto = normalizarTexto(residuo.nombreCorto);
        const categoria = normalizarTexto(residuo.categoria);

        const coincideNombre =
            nombre.includes(texto);

        const coincideNombreCorto =
            nombreCorto.includes(texto);

        const coincideCategoria =
            categoria.includes(texto);

        const coincidePalabraClave =
            residuo.palabrasClave.some(palabra =>
                normalizarTexto(palabra).includes(texto)
            );

        return (
            coincideNombre ||
            coincideNombreCorto ||
            coincideCategoria ||
            coincidePalabraClave
        );

    });


    if (resultados.length === 0) {

        mostrarMensajeBusqueda(
            "😕",
            "No encontramos ese residuo",
            "Prueba escribiendo otro nombre, como botella, papel, lata, pila o celular."
        );

        return;
    }


    mostrarResultados(resultados);

}


/* =========================================================
   MOSTRAR RESULTADOS
========================================================= */

function mostrarResultados(resultados) {

    resultadoBusqueda.innerHTML = "";

    resultados.forEach(residuo => {

        const tarjeta = crearTarjetaResultado(residuo);

        resultadoBusqueda.appendChild(tarjeta);

    });

}


/* =========================================================
   CREAR TARJETA DE RESULTADO
========================================================= */

function crearTarjetaResultado(residuo) {

    const tarjeta = document.createElement("article");

    tarjeta.className = "result-card";

    tarjeta.innerHTML = `

        <div class="result-icon">
            ${residuo.icono}
        </div>

        <div class="result-main">

            <div class="result-header">

                <div>

                    <span class="result-label">
                        RESIDUO IDENTIFICADO
                    </span>

                    <h3>
                        ${residuo.nombre}
                    </h3>

                </div>

                <span class="result-category">
                    ${obtenerNombreCategoria(residuo.categoria)}
                </span>

            </div>


            <p class="result-description">
                ${residuo.descripcion}
            </p>


            <div class="result-details">

                <div class="detail-item">

                    <span class="detail-icon">
                        🧱
                    </span>

                    <div>

                        <small>
                            Material
                        </small>

                        <strong>
                            ${residuo.material}
                        </strong>

                    </div>

                </div>


                <div class="detail-item">

                    <span class="detail-icon">
                        ♻️
                    </span>

                    <div>

                        <small>
                            Tipo
                        </small>

                        <strong>
                            ${residuo.tipo}
                        </strong>

                    </div>

                </div>

            </div>


            <div class="result-instructions">

                <h4>
                    📋 ¿Qué debes hacer?
                </h4>

                <p>
                    ${residuo.instrucciones}
                </p>

            </div>


            <div class="result-tip">

                <strong>
                    💡 Consejo
                </strong>

                <p>
                    ${residuo.consejo}
                </p>

            </div>

        </div>

    `;

    return tarjeta;

}


/* =========================================================
   MENSAJE DE BÚSQUEDA
========================================================= */

function mostrarMensajeBusqueda(icono, titulo, descripcion) {

    resultadoBusqueda.innerHTML = `

        <div class="empty-search">

            <div class="empty-icon">
                ${icono}
            </div>

            <h3>
                ${titulo}
            </h3>

            <p>
                ${descripcion}
            </p>

        </div>

    `;

}


/* =========================================================
   NOMBRE DE CATEGORÍAS
========================================================= */

function obtenerNombreCategoria(categoria) {

    const nombres = {

        papel: "Papel y cartón",

        plastico: "Plásticos",

        vidrio: "Vidrio",

        metal: "Metales",

        organico: "Orgánicos",

        electronico: "Electrónicos",

        peligroso: "Peligrosos",

        otros: "Otros"

    };

    return nombres[categoria] || "Otros";

}


/* =========================================================
   MOSTRAR TODOS LOS RESIDUOS
========================================================= */

function mostrarTodosLosResiduos() {

    listaResiduos.innerHTML = "";

    residuos.forEach(residuo => {

        const tarjeta = document.createElement("article");

        tarjeta.className = "waste-card";

        tarjeta.innerHTML = `

            <div class="waste-card-top">

                <div class="waste-card-icon">
                    ${residuo.icono}
                </div>

                <span class="waste-arrow">
                    →
                </span>

            </div>

            <span class="waste-category">
                ${obtenerNombreCategoria(residuo.categoria)}
            </span>

            <h3>
                ${residuo.nombre}
            </h3>

            <p>
                ${residuo.descripcion}
            </p>

            <div class="waste-card-footer">

                <span>
                    Ver información
                </span>

                <span>
                    🔎
                </span>

            </div>

        `;
tarjeta.addEventListener("click", () => {

    abrirModal(residuo);

});
        listaResiduos.appendChild(tarjeta);

    });

}/* =========================================================
   ABRIR MODAL DE RESIDUO
========================================================= */

function abrirModal(residuo) {

    const modal = document.getElementById("modalResiduo");

    const modalIcono = document.getElementById("modalIcono");

    const modalTitulo = document.getElementById("modalTitulo");

    const modalCategoria = document.getElementById("modalCategoria");

    const modalDescripcion = document.getElementById("modalDescripcion");

    const modalMaterial = document.getElementById("modalMaterial");

    const modalTipo = document.getElementById("modalTipo");

    const modalInstrucciones = document.getElementById("modalInstrucciones");

    const modalConsejo = document.getElementById("modalConsejo");


    modalIcono.textContent = residuo.icono;

    modalTitulo.textContent = residuo.nombre;

    modalCategoria.textContent =
        obtenerNombreCategoria(residuo.categoria);

    modalDescripcion.textContent =
        residuo.descripcion;

    modalMaterial.textContent =
        residuo.material;

    modalTipo.textContent =
        residuo.tipo;

    modalInstrucciones.textContent =
        residuo.instrucciones;

    modalConsejo.textContent =
        residuo.consejo;


    modal.classList.add("activo");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CERRAR MODAL
========================================================= */

function cerrarModal() {

    const modal = document.getElementById("modalResiduo");

    modal.classList.remove("activo");

    document.body.style.overflow = "";

}


/* =========================================================
   CERRAR MODAL AL HACER CLIC FUERA
========================================================= */

const modalResiduo =
    document.getElementById("modalResiduo");

if (modalResiduo) {

    modalResiduo.addEventListener("click", function(event) {

        if (event.target === modalResiduo) {

            cerrarModal();

        }

    });

}


/* =========================================================
   CERRAR MODAL CON ESCAPE
========================================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        cerrarModal();

    }

});