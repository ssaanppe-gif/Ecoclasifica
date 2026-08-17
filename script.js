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
    },
       { 
        id: 17,
        nombre: "Vaso de plástico",
        nombreCorto: "Vaso plástico",
        categoria: "plastico",
        icono: "🥤",
        tipo: "Plástico",
        material: "Plástico",
        descripcion: "Los vasos de plástico son residuos comunes que deben gestionarse de acuerdo con las posibilidades de recuperación disponibles.",
        instrucciones: "Vacía el vaso, retira restos de bebidas y sepáralo según el sistema de clasificación disponible.",
        consejo: "Utiliza vasos reutilizables para reducir el consumo de productos descartables.",
        palabrasClave: [
            "vaso",
            "vaso plastico",
            "vaso de plastico",
            "vasito",
            "plastico"
        ]
    },

    {
        id: 18,
        nombre: "Envase de yogur",
        nombreCorto: "Yogur",
        categoria: "plastico",
        icono: "🥛",
        tipo: "Plástico",
        material: "Plástico",
        descripcion: "Los envases de yogur suelen estar fabricados con plástico y pueden gestionarse como material recuperable dependiendo del sistema local.",
        instrucciones: "Vacía el envase y retira los restos de alimento antes de separarlo.",
        consejo: "Enjuaga los envases cuando sea necesario para evitar contaminación de otros materiales.",
        palabrasClave: [
            "yogur",
            "yogurt",
            "envase yogur",
            "vasito yogur",
            "plastico"
        ]
    },

    {
        id: 19,
        nombre: "Botella de detergente",
        nombreCorto: "Envase de detergente",
        categoria: "plastico",
        icono: "🧴",
        tipo: "Plástico",
        material: "Plástico",
        descripcion: "Los envases de productos de limpieza están hechos normalmente de plástico y pueden recuperarse cuando el sistema local los acepta.",
        instrucciones: "Vacía completamente el envase y sepáralo de otros residuos.",
        consejo: "No mezcles restos de productos químicos diferentes.",
        palabrasClave: [
            "detergente",
            "botella detergente",
            "envase detergente",
            "limpieza",
            "plastico"
        ]
    },

    {
        id: 20,
        nombre: "Botella de aceite",
        nombreCorto: "Envase de aceite",
        categoria: "plastico",
        icono: "🫗",
        tipo: "Plástico",
        material: "Plástico",
        descripcion: "Los envases de aceite pueden ser de plástico y deben vaciarse antes de su separación.",
        instrucciones: "Vacía el contenido y evita dejar grandes cantidades de aceite dentro del envase.",
        consejo: "Nunca viertas aceite usado directamente al desagüe.",
        palabrasClave: [
            "aceite",
            "botella aceite",
            "envase aceite",
            "aceite cocina",
            "plastico"
        ]
    },

    {
        id: 21,
        nombre: "Caja de cereal",
        nombreCorto: "Caja de cereal",
        categoria: "papel",
        icono: "🥣",
        tipo: "Reciclable",
        material: "Cartón",
        descripcion: "Las cajas de cereal suelen estar fabricadas de cartón y pueden reciclarse cuando están limpias y secas.",
        instrucciones: "Vacía completamente la caja y aplástala antes de separarla.",
        consejo: "Aprovecha las cajas de cartón para manualidades o almacenamiento.",
        palabrasClave: [
            "cereal",
            "caja cereal",
            "carton cereal",
            "cartón",
            "caja"
        ]
    },

    {
        id: 22,
        nombre: "Cuaderno viejo",
        nombreCorto: "Cuaderno",
        categoria: "papel",
        icono: "📒",
        tipo: "Reciclable",
        material: "Papel y cartón",
        descripcion: "Los cuadernos contienen principalmente papel, aunque pueden incluir espirales, tapas y otros materiales.",
        instrucciones: "Separa los materiales diferentes cuando sea necesario y recupera las hojas de papel.",
        consejo: "Utiliza las páginas que todavía estén libres antes de desechar el cuaderno.",
        palabrasClave: [
            "cuaderno",
            "libreta",
            "hojas",
            "papel",
            "cuaderno viejo"
        ]
    },

    {
        id: 23,
        nombre: "Revista",
        nombreCorto: "Revista",
        categoria: "papel",
        icono: "📖",
        tipo: "Reciclable",
        material: "Papel",
        descripcion: "Las revistas pueden formar parte de la recuperación de papel cuando se encuentran limpias y secas.",
        instrucciones: "Mantén el material seco y sepáralo de restos de comida o líquidos.",
        consejo: "Puedes reutilizar revistas para proyectos escolares y manualidades.",
        palabrasClave: [
            "revista",
            "revistas",
            "papel",
            "lectura"
        ]
    },

    {
        id: 24,
        nombre: "Tarjeta de cartón",
        nombreCorto: "Cartulina",
        categoria: "papel",
        icono: "🗂️",
        tipo: "Reciclable",
        material: "Cartón",
        descripcion: "Las tarjetas y cartulinas hechas principalmente de papel o cartón pueden recuperarse cuando están limpias.",
        instrucciones: "Retira elementos que sean de plástico, metal u otros materiales cuando sea necesario.",
        consejo: "Reutiliza tarjetas y cartulinas para trabajos escolares.",
        palabrasClave: [
            "tarjeta",
            "cartulina",
            "carton",
            "cartón",
            "papel"
        ]
    },

    {
        id: 25,
        nombre: "Frasco de mermelada",
        nombreCorto: "Frasco de mermelada",
        categoria: "vidrio",
        icono: "🍓",
        tipo: "Reciclable",
        material: "Vidrio",
        descripcion: "Los frascos de vidrio utilizados para alimentos pueden reutilizarse o reciclarse.",
        instrucciones: "Vacía el frasco, retira los restos y sepáralo del resto de residuos.",
        consejo: "Puedes reutilizar el frasco para almacenar alimentos u objetos pequeños.",
        palabrasClave: [
            "mermelada",
            "frasco mermelada",
            "frasco",
            "vidrio",
            "tarro"
        ]
    },

    {
        id: 26,
        nombre: "Frasco de perfume",
        nombreCorto: "Perfume",
        categoria: "vidrio",
        icono: "🧴",
        tipo: "Vidrio",
        material: "Vidrio",
        descripcion: "Muchos frascos de perfume están fabricados principalmente de vidrio.",
        instrucciones: "Asegúrate de que el recipiente esté vacío y manipúlalo con cuidado.",
        consejo: "Algunos frascos pueden reutilizarse para decoración o almacenamiento.",
        palabrasClave: [
            "perfume",
            "frasco perfume",
            "vidrio",
            "frasco"
        ]
    },

    {
        id: 27,
        nombre: "Frasco de salsa",
        nombreCorto: "Frasco de alimentos",
        categoria: "vidrio",
        icono: "🍅",
        tipo: "Reciclable",
        material: "Vidrio",
        descripcion: "Los frascos de salsas pueden reutilizarse o reciclarse cuando están correctamente vacíos.",
        instrucciones: "Vacía y limpia el frasco antes de separarlo.",
        consejo: "Puedes usarlo nuevamente como recipiente para otros alimentos.",
        palabrasClave: [
            "salsa",
            "frasco salsa",
            "tomate",
            "frasco vidrio",
            "vidrio"
        ]
    },

    {
        id: 28,
        nombre: "Lata de gaseosa",
        nombreCorto: "Lata de bebida",
        categoria: "metal",
        icono: "🥤",
        tipo: "Reciclable",
        material: "Aluminio",
        descripcion: "Las latas de bebidas hechas de aluminio pueden recuperarse mediante reciclaje.",
        instrucciones: "Vacía la bebida y separa la lata del resto de residuos.",
        consejo: "Aplastar la lata puede reducir su volumen cuando el sistema de recolección lo permite.",
        palabrasClave: [
            "gaseosa",
            "lata gaseosa",
            "lata bebida",
            "aluminio",
            "lata"
        ]
    },

    {
        id: 29,
        nombre: "Lata de atún",
        nombreCorto: "Atún",
        categoria: "metal",
        icono: "🐟",
        tipo: "Reciclable",
        material: "Metal",
        descripcion: "Las latas metálicas utilizadas para conservar alimentos pueden ser recuperadas.",
        instrucciones: "Vacía los restos de comida y limpia la lata cuando sea necesario.",
        consejo: "Manipula cuidadosamente los bordes de la tapa para evitar cortes.",
        palabrasClave: [
            "atun",
            "atún",
            "lata atun",
            "lata",
            "metal"
        ]
    },

    {
        id: 30,
        nombre: "Papel aluminio",
        nombreCorto: "Aluminio",
        categoria: "metal",
        icono: "🧻",
        tipo: "Metal",
        material: "Aluminio",
        descripcion: "El papel aluminio está fabricado con aluminio y su recuperación depende del sistema local de reciclaje.",
        instrucciones: "Retira restos de comida y verifica si tu sistema local acepta este material.",
        consejo: "Reutiliza el aluminio limpio cuando sea posible.",
        palabrasClave: [
            "papel aluminio",
            "aluminio",
            "foil",
            "metal"
        ]
    },

    {
        id: 31,
        nombre: "Cáscara de huevo",
        nombreCorto: "Cáscara de huevo",
        categoria: "organico",
        icono: "🥚",
        tipo: "Orgánico",
        material: "Materia orgánica y mineral",
        descripcion: "Las cáscaras de huevo pueden formar parte de residuos orgánicos y utilizarse en procesos de compostaje apropiados.",
        instrucciones: "Sepáralas de envases y otros materiales antes de colocarlas con residuos orgánicos.",
        consejo: "Triturarlas puede facilitar su incorporación al compost.",
        palabrasClave: [
            "huevo",
            "cascara huevo",
            "cáscara huevo",
            "organico",
            "orgánico"
        ]
    },

    {
        id: 32,
        nombre: "Posos de café",
        nombreCorto: "Café usado",
        categoria: "organico",
        icono: "☕",
        tipo: "Orgánico",
        material: "Materia orgánica",
        descripcion: "Los restos de café son materia orgánica que puede aprovecharse en compostaje.",
        instrucciones: "Separa los posos de café de vasos, cucharas y otros materiales.",
        consejo: "Puedes incorporarlos al compost junto con otros residuos orgánicos adecuados.",
        palabrasClave: [
            "cafe",
            "café",
            "cafe usado",
            "posos",
            "organico"
        ]
    },

    {
        id: 33,
        nombre: "Hojas secas",
        nombreCorto: "Hojas",
        categoria: "organico",
        icono: "🍂",
        tipo: "Orgánico",
        material: "Materia vegetal",
        descripcion: "Las hojas secas son residuos vegetales que pueden aprovecharse mediante compostaje.",
        instrucciones: "Recolecta las hojas y colócalas junto con otros residuos vegetales.",
        consejo: "Las hojas secas aportan materia orgánica y carbono al compost.",
        palabrasClave: [
            "hojas",
            "hoja seca",
            "hojas secas",
            "vegetal",
            "organico"
        ]
    },

    {
        id: 34,
        nombre: "Teclado",
        nombreCorto: "Teclado de computadora",
        categoria: "electronico",
        icono: "⌨️",
        tipo: "Residuo electrónico",
        material: "Plástico, metal y componentes electrónicos",
        descripcion: "Los teclados contienen materiales que pueden recuperarse mediante procesos especializados.",
        instrucciones: "Llévalo a un punto de recolección de residuos electrónicos.",
        consejo: "Si todavía funciona, considera repararlo o donarlo.",
        palabrasClave: [
            "teclado",
            "keyboard",
            "computadora",
            "electronico",
            "electrónico"
        ]
    },

    {
        id: 35,
        nombre: "Mouse",
        nombreCorto: "Mouse de computadora",
        categoria: "electronico",
        icono: "🖱️",
        tipo: "Residuo electrónico",
        material: "Plástico, metal y componentes electrónicos",
        descripcion: "Los mouse contienen componentes electrónicos y no deberían terminar junto con los residuos comunes.",
        instrucciones: "Entrégalo en un punto de recolección de residuos electrónicos.",
        consejo: "Reutiliza o repara el dispositivo cuando todavía sea funcional.",
        palabrasClave: [
            "mouse",
            "raton",
            "ratón",
            "computadora",
            "electronico"
        ]
    },

    {
        id: 36,
        nombre: "Audífonos",
        nombreCorto: "Audífonos",
        categoria: "electronico",
        icono: "🎧",
        tipo: "Residuo electrónico",
        material: "Plástico, metal y componentes electrónicos",
        descripcion: "Los audífonos contienen cables y componentes electrónicos que requieren gestión adecuada.",
        instrucciones: "Llévalos a un sistema de recolección de residuos electrónicos cuando ya no puedan reutilizarse.",
        consejo: "Repara cables o conectores cuando sea posible.",
        palabrasClave: [
            "audifonos",
            "audífonos",
            "auriculares",
            "headphones",
            "electronico"
        ]
    },

    {
        id: 37,
        nombre: "Cargador de celular",
        nombreCorto: "Cargador",
        categoria: "electronico",
        icono: "🔌",
        tipo: "Residuo electrónico",
        material: "Plástico, cobre y componentes electrónicos",
        descripcion: "Los cargadores son aparatos eléctricos que deben gestionarse como residuos electrónicos cuando dejan de funcionar.",
        instrucciones: "No los arrojes junto con la basura común. Entrégalos en un punto de recolección adecuado.",
        consejo: "Guarda los cargadores compatibles que todavía funcionen.",
        palabrasClave: [
            "cargador",
            "cargador celular",
            "cargador telefono",
            "usb",
            "electronico"
        ]
    },

    {
        id: 38,
        nombre: "Bombilla LED",
        nombreCorto: "Foco LED",
        categoria: "otros",
        icono: "💡",
        tipo: "Residuo especial",
        material: "Vidrio, metal y componentes electrónicos",
        descripcion: "Las bombillas LED contienen diferentes materiales y componentes que pueden requerir una gestión específica.",
        instrucciones: "Evita romperla y verifica los puntos de recolección disponibles en tu localidad.",
        consejo: "Utiliza bombillas eficientes para reducir el consumo de energía.",
        palabrasClave: [
            "foco",
            "bombilla",
            "led",
            "foco led",
            "luz"
        ]
    },

    {
        id: 39,
        nombre: "Aerosol",
        nombreCorto: "Lata de aerosol",
        categoria: "peligroso",
        icono: "🧴",
        tipo: "Residuo especial",
        material: "Metal y contenido presurizado",
        descripcion: "Los envases de aerosol pueden contener sustancias y presión residual, por lo que requieren un manejo cuidadoso.",
        instrucciones: "No lo perfores ni lo quemes. Consulta el sistema local para su disposición.",
        consejo: "Nunca intentes abrir un aerosol presurizado.",
        palabrasClave: [
            "aerosol",
            "spray",
            "lata aerosol",
            "desodorante",
            "peligroso"
        ]
    },

    {
        id: 40,
        nombre: "Batería portátil",
        nombreCorto: "Power bank",
        categoria: "peligroso",
        icono: "🔋",
        tipo: "Residuo especial",
        material: "Batería de litio y componentes electrónicos",
        descripcion: "Las baterías portátiles contienen componentes que requieren sistemas de recolección especializados.",
        instrucciones: "No la arrojes a la basura común y llévala a un punto de recolección apropiado.",
        consejo: "Evita golpear, perforar o exponer una batería dañada al calor.",
        palabrasClave: [
            "power bank",
            "bateria portatil",
            "batería portátil",
            "bateria externa",
            "cargador portatil"
        ]
    },

    {
        id: 41,
        nombre: "Cartucho de tinta",
        nombreCorto: "Cartucho",
        categoria: "otros",
        icono: "🖨️",
        tipo: "Residuo especial",
        material: "Plástico, tinta y componentes electrónicos",
        descripcion: "Los cartuchos de impresora pueden contener restos de tinta y materiales que pueden recuperarse mediante programas especiales.",
        instrucciones: "Guárdalo cerrado y busca programas de recuperación de cartuchos.",
        consejo: "Utiliza cartuchos recargables cuando sean compatibles con tu impresora.",
        palabrasClave: [
            "cartucho",
            "cartucho tinta",
            "impresora",
            "tinta",
            "toner"
        ]
    },

    {
        id: 42,
        nombre: "Termómetro antiguo",
        nombreCorto: "Termómetro",
        categoria: "peligroso",
        icono: "🌡️",
        tipo: "Residuo especial",
        material: "Vidrio y componentes especiales",
        descripcion: "Algunos termómetros antiguos pueden contener sustancias que requieren un manejo especial.",
        instrucciones: "No lo rompas. Consulta un punto de recolección adecuado para este tipo de residuo.",
        consejo: "Manipúlalo con cuidado y evita que niños lo tengan al alcance.",
        palabrasClave: [
            "termometro",
            "termómetro",
            "mercurio",
            "vidrio",
            "peligroso"
        ]
    },

    {
        id: 43,
        nombre: "Zapatos viejos",
        nombreCorto: "Calzado",
        categoria: "otros",
        icono: "👟",
        tipo: "Residuo reutilizable",
        material: "Textil, caucho y otros materiales",
        descripcion: "El calzado usado puede reutilizarse, repararse o donarse antes de considerarse residuo.",
        instrucciones: "Evalúa si todavía puede repararse o donarse antes de desecharlo.",
        consejo: "Donar objetos en buen estado prolonga su vida útil.",
        palabrasClave: [
            "zapatos",
            "zapatillas",
            "calzado",
            "zapatilla",
            "ropa"
        ]
    },

    {
        id: 44,
        nombre: "Ropa vieja",
        nombreCorto: "Textiles",
        categoria: "otros",
        icono: "👕",
        tipo: "Textil",
        material: "Tela y fibras textiles",
        descripcion: "La ropa que ya no utilizas puede reutilizarse, repararse o donarse.",
        instrucciones: "Separa la ropa que aún está en buen estado y busca opciones de donación o recuperación textil.",
        consejo: "Antes de desechar una prenda, intenta repararla o darle otro uso.",
        palabrasClave: [
            "ropa",
            "camiseta",
            "polo",
            "pantalon",
            "pantalón",
            "textil"
        ]
    },

{
    id: 45,
    nombre: "Papel de regalo",
    nombreCorto: "Papel de regalo",
    categoria: "papel",
    icono: "🎁",
    tipo: "Reciclable",
    material: "Papel",
    descripcion: "El papel de regalo limpio puede reutilizarse o recuperarse dependiendo de su composición.",
    instrucciones: "Retira cintas, adornos y materiales que no sean papel antes de separarlo.",
    consejo: "Guárdalo para reutilizarlo en otra ocasión.",
    palabrasClave: ["papel regalo", "papel de regalo", "regalo", "papel"]
},

{
    id: 46,
    nombre: "Sobre de papel",
    nombreCorto: "Sobre",
    categoria: "papel",
    icono: "✉️",
    tipo: "Reciclable",
    material: "Papel",
    descripcion: "Los sobres de papel limpios pueden recuperarse como papel.",
    instrucciones: "Retira elementos que no sean de papel cuando sea necesario.",
    consejo: "Puedes reutilizar los sobres para guardar documentos.",
    palabrasClave: ["sobre", "sobre papel", "carta", "papel"]
},

{
    id: 47,
    nombre: "Caja de zapatos",
    nombreCorto: "Caja de zapatos",
    categoria: "papel",
    icono: "👟",
    tipo: "Reciclable",
    material: "Cartón",
    descripcion: "Las cajas de zapatos están fabricadas principalmente de cartón.",
    instrucciones: "Aplasta la caja y mantenla limpia y seca.",
    consejo: "Reutilízala para guardar objetos antes de reciclarla.",
    palabrasClave: ["caja zapatos", "caja de zapatos", "carton", "cartón"]
},

{
    id: 48,
    nombre: "Cartón corrugado",
    nombreCorto: "Cartón corrugado",
    categoria: "papel",
    icono: "📦",
    tipo: "Reciclable",
    material: "Cartón",
    descripcion: "El cartón corrugado se utiliza principalmente en cajas y embalajes.",
    instrucciones: "Aplástalo y retira restos de comida, plástico o cinta innecesaria.",
    consejo: "Puede reutilizarse para proyectos escolares.",
    palabrasClave: ["carton corrugado", "cartón corrugado", "embalaje", "caja"]
},

{
    id: 49,
    nombre: "Revista",
    nombreCorto: "Revista",
    categoria: "papel",
    icono: "📖",
    tipo: "Reciclable",
    material: "Papel",
    descripcion: "Las revistas limpias y secas pueden recuperarse como papel.",
    instrucciones: "Sepáralas de restos de comida y líquidos.",
    consejo: "Puedes reutilizarlas para manualidades.",
    palabrasClave: ["revista", "revistas", "magazine", "papel"]
},

{
    id: 50,
    nombre: "Bolsa de papel",
    nombreCorto: "Bolsa de papel",
    categoria: "papel",
    icono: "🛍️",
    tipo: "Reciclable",
    material: "Papel",
    descripcion: "Las bolsas de papel pueden reutilizarse y, cuando están limpias, recuperarse.",
    instrucciones: "Mantenla seca y retira elementos que no sean papel.",
    consejo: "Reutilízala varias veces antes de reciclarla.",
    palabrasClave: ["bolsa papel", "bolsa de papel", "papel"]
},

{
    id: 51,
    nombre: "Envase de yogur",
    nombreCorto: "Yogur",
    categoria: "plastico",
    icono: "🥛",
    tipo: "Plástico",
    material: "Plástico",
    descripcion: "Los envases de yogur suelen estar hechos de plástico.",
    instrucciones: "Vacía el contenido y limpia el envase cuando sea necesario.",
    consejo: "Reduce el uso de envases descartables cuando puedas.",
    palabrasClave: ["yogur", "yogurt", "envase yogur", "vasito"]
},

{
    id: 52,
    nombre: "Botella de detergente",
    nombreCorto: "Detergente",
    categoria: "plastico",
    icono: "🧴",
    tipo: "Plástico",
    material: "Plástico",
    descripcion: "Los envases de productos de limpieza suelen ser de plástico.",
    instrucciones: "Vacía completamente el recipiente antes de separarlo.",
    consejo: "No mezcles restos de productos químicos diferentes.",
    palabrasClave: ["detergente", "envase detergente", "limpieza", "plastico"]
},

{
    id: 53,
    nombre: "Envase de champú",
    nombreCorto: "Champú",
    categoria: "plastico",
    icono: "🧴",
    tipo: "Plástico",
    material: "Plástico",
    descripcion: "Los envases de champú suelen ser de plástico.",
    instrucciones: "Vacía el recipiente y separa el envase según las normas locales.",
    consejo: "Aprovecha todo el producto antes de desechar el envase.",
    palabrasClave: ["champu", "champú", "shampoo", "envase champu"]
},

{
    id: 54,
    nombre: "Envase de margarina",
    nombreCorto: "Margarina",
    categoria: "plastico",
    icono: "🧈",
    tipo: "Plástico",
    material: "Plástico",
    descripcion: "Los recipientes de margarina suelen fabricarse con plástico.",
    instrucciones: "Retira los restos de comida y limpia el recipiente cuando sea necesario.",
    consejo: "Puedes reutilizarlo para almacenar objetos pequeños.",
    palabrasClave: ["margarina", "envase margarina", "recipiente", "plastico"]
},

{
    id: 55,
    nombre: "Envase de mayonesa",
    nombreCorto: "Mayonesa",
    categoria: "plastico",
    icono: "🥫",
    tipo: "Plástico",
    material: "Plástico",
    descripcion: "Los envases de mayonesa pueden ser de plástico y deben vaciarse antes de separarlos.",
    instrucciones: "Retira la mayor cantidad posible de restos de alimento.",
    consejo: "Evita desperdiciar el producto que todavía puedas utilizar.",
    palabrasClave: ["mayonesa", "envase mayonesa", "salsa", "plastico"]
},

{
    id: 56,
    nombre: "Envase de helado",
    nombreCorto: "Helado",
    categoria: "plastico",
    icono: "🍦",
    tipo: "Plástico",
    material: "Plástico",
    descripcion: "Los recipientes de helado pueden reutilizarse o gestionarse según su material.",
    instrucciones: "Vacía y limpia el recipiente antes de separarlo.",
    consejo: "Reutiliza el envase para guardar pequeños objetos.",
    palabrasClave: ["helado", "envase helado", "tarro helado", "plastico"]
},

{
    id: 57,
    nombre: "Botella de agua",
    nombreCorto: "Botella de agua",
    categoria: "plastico",
    icono: "💧",
    tipo: "Reciclable",
    material: "PET",
    descripcion: "Las botellas de agua de PET pueden recuperarse mediante sistemas de reciclaje.",
    instrucciones: "Vacía la botella y sepárala correctamente.",
    consejo: "Utiliza una botella reutilizable para reducir residuos.",
    palabrasClave: ["agua", "botella agua", "botella de agua", "pet"]
},

{
    id: 58,
    nombre: "Tapa de botella",
    nombreCorto: "Tapa plástica",
    categoria: "plastico",
    icono: "🔵",
    tipo: "Plástico",
    material: "Plástico",
    descripcion: "Las tapas de botellas suelen estar fabricadas de plástico.",
    instrucciones: "Sepárala o mantenla con la botella según las reglas locales.",
    consejo: "Puedes reutilizar tapas para proyectos escolares.",
    palabrasClave: ["tapa", "tapa botella", "tapa plastica", "tapa plástica"]
},

{
    id: 59,
    nombre: "Envase de crema",
    nombreCorto: "Crema cosmética",
    categoria: "plastico",
    icono: "🧴",
    tipo: "Plástico",
    material: "Plástico",
    descripcion: "Muchos envases de productos cosméticos están hechos de plástico.",
    instrucciones: "Vacía el contenido y separa el recipiente según su material.",
    consejo: "Evita comprar productos con envases innecesarios.",
    palabrasClave: ["crema", "cosmetico", "cosmético", "envase crema"]
},

{
    id: 60,
    nombre: "Envase de comida para llevar",
    nombreCorto: "Envase para llevar",
    categoria: "plastico",
    icono: "🥡",
    tipo: "Residuo mixto",
    material: "Plástico u otros materiales",
    descripcion: "Los envases para comida pueden fabricarse con distintos materiales.",
    instrucciones: "Identifica el material y elimina los restos de comida.",
    consejo: "Usa recipientes reutilizables para reducir descartables.",
    palabrasClave: ["comida llevar", "delivery", "envase comida", "envase delivery"]
},

{
    id: 61,
    nombre: "Espejo",
    nombreCorto: "Espejo",
    categoria: "vidrio",
    icono: "🪞",
    tipo: "Residuo especial",
    material: "Vidrio tratado",
    descripcion: "Los espejos contienen vidrio tratado y pueden gestionarse de forma distinta al vidrio de envases.",
    instrucciones: "Manipúlalo con cuidado y consulta las reglas locales.",
    consejo: "Reutiliza el espejo si todavía está en buen estado.",
    palabrasClave: ["espejo", "vidrio espejo", "cristal"]
},

{
    id: 62,
    nombre: "Frasco de especias",
    nombreCorto: "Frasco de especias",
    categoria: "vidrio",
    icono: "🧂",
    tipo: "Reciclable",
    material: "Vidrio",
    descripcion: "Los frascos de especias pueden reutilizarse o reciclarse cuando están vacíos.",
    instrucciones: "Vacía y limpia el frasco antes de separarlo.",
    consejo: "Puedes volver a utilizarlo para guardar otras especias.",
    palabrasClave: ["especias", "frasco especias", "frasco vidrio", "vidrio"]
},

{
    id: 63,
    nombre: "Frasco de miel",
    nombreCorto: "Frasco de miel",
    categoria: "vidrio",
    icono: "🍯",
    tipo: "Reciclable",
    material: "Vidrio",
    descripcion: "Los frascos de miel suelen ser de vidrio y pueden reutilizarse.",
    instrucciones: "Vacía y limpia el frasco antes de separarlo.",
    consejo: "Puedes utilizarlo nuevamente como recipiente.",
    palabrasClave: ["miel", "frasco miel", "tarro", "vidrio"]
},

{
    id: 64,
    nombre: "Copa de vidrio",
    nombreCorto: "Copa",
    categoria: "vidrio",
    icono: "🥂",
    tipo: "Vidrio",
    material: "Vidrio",
    descripcion: "Las copas están hechas de vidrio, aunque su gestión puede depender del sistema local.",
    instrucciones: "Manipúlala con cuidado y revisa las reglas locales.",
    consejo: "Reutilízala mientras esté en buen estado.",
    palabrasClave: ["copa", "copa vidrio", "vaso vidrio"]
},

{
    id: 65,
    nombre: "Alambre metálico",
    nombreCorto: "Alambre",
    categoria: "metal",
    icono: "🧵",
    tipo: "Metal",
    material: "Metal",
    descripcion: "El alambre puede recuperarse como metal cuando el sistema local acepta este material.",
    instrucciones: "Manipúlalo con cuidado para evitar cortes.",
    consejo: "Reutilízalo para reparaciones o proyectos.",
    palabrasClave: ["alambre", "metal", "alambre metalico", "alambre metálico"]
},

{
    id: 66,
    nombre: "Tornillos usados",
    nombreCorto: "Tornillos",
    categoria: "metal",
    icono: "🔩",
    tipo: "Metal",
    material: "Acero",
    descripcion: "Los tornillos están fabricados principalmente de metal y pueden recuperarse.",
    instrucciones: "Sepáralos de materiales que no sean metálicos.",
    consejo: "Guarda los tornillos que todavía puedan reutilizarse.",
    palabrasClave: ["tornillo", "tornillos", "acero", "metal"]
},

{
    id: 67,
    nombre: "Llave metálica",
    nombreCorto: "Llave",
    categoria: "metal",
    icono: "🔑",
    tipo: "Metal",
    material: "Metal",
    descripcion: "Las llaves metálicas pueden recuperarse como metal.",
    instrucciones: "Sepáralas de otros materiales cuando sea necesario.",
    consejo: "Reutiliza las llaves que todavía puedan servir.",
    palabrasClave: ["llave", "llave metal", "metal"]
},

{
    id: 68,
    nombre: "Cubiertos metálicos viejos",
    nombreCorto: "Cubiertos",
    categoria: "metal",
    icono: "🍴",
    tipo: "Metal",
    material: "Acero inoxidable",
    descripcion: "Los cubiertos metálicos pueden reutilizarse o recuperarse como metal.",
    instrucciones: "Verifica las opciones locales de recuperación de metales.",
    consejo: "Dónalos o reutilízalos si están en buen estado.",
    palabrasClave: ["cubiertos", "tenedor", "cuchara", "metal"]
},

{
    id: 69,
    nombre: "Lata de café",
    nombreCorto: "Lata de café",
    categoria: "metal",
    icono: "☕",
    tipo: "Metal",
    material: "Metal",
    descripcion: "Las latas metálicas de café pueden reutilizarse o recuperarse.",
    instrucciones: "Vacía y limpia el recipiente antes de separarlo.",
    consejo: "Reutiliza la lata para guardar pequeños objetos.",
    palabrasClave: ["lata cafe", "lata café", "cafe lata", "metal"]
},

{
    id: 70,
    nombre: "Lata de leche evaporada",
    nombreCorto: "Lata de leche",
    categoria: "metal",
    icono: "🥫",
    tipo: "Reciclable",
    material: "Metal",
    descripcion: "Las latas metálicas de alimentos pueden recuperarse mediante reciclaje.",
    instrucciones: "Vacía el contenido y limpia la lata cuando sea necesario.",
    consejo: "Manipula con cuidado los bordes de la tapa.",
    palabrasClave: ["leche evaporada", "lata leche", "lata", "metal"]
},

{
    id: 71,
    nombre: "Aluminio en bandeja",
    nombreCorto: "Bandeja de aluminio",
    categoria: "metal",
    icono: "🍱",
    tipo: "Metal",
    material: "Aluminio",
    descripcion: "Las bandejas de aluminio pueden recuperarse cuando están limpias y el sistema local las acepta.",
    instrucciones: "Retira los restos de comida antes de separarla.",
    consejo: "Evita desechar bandejas con grandes cantidades de comida.",
    palabrasClave: ["bandeja aluminio", "aluminio", "bandeja", "metal"]
},

{
    id: 72,
    nombre: "Cáscara de naranja",
    nombreCorto: "Cáscara de naranja",
    categoria: "organico",
    icono: "🍊",
    tipo: "Orgánico",
    material: "Materia orgánica",
    descripcion: "Las cáscaras de frutas forman parte de los residuos orgánicos.",
    instrucciones: "Sepárala de bolsas y otros envases.",
    consejo: "Puede aprovecharse en compostaje cuando sea apropiado.",
    palabrasClave: ["naranja", "cascara naranja", "cáscara naranja", "fruta"]
},

{
    id: 73,
    nombre: "Cáscara de papa",
    nombreCorto: "Cáscara de papa",
    categoria: "organico",
    icono: "🥔",
    tipo: "Orgánico",
    material: "Materia vegetal",
    descripcion: "La cáscara de papa es un residuo de origen vegetal.",
    instrucciones: "Sepárala de envases y otros residuos.",
    consejo: "Puede aprovecharse en compostaje adecuado.",
    palabrasClave: ["papa", "cascara papa", "cáscara papa", "vegetal"]
},

{
    id: 74,
    nombre: "Cáscara de limón",
    nombreCorto: "Cáscara de limón",
    categoria: "organico",
    icono: "🍋",
    tipo: "Orgánico",
    material: "Materia orgánica",
    descripcion: "La cáscara de limón es un residuo orgánico.",
    instrucciones: "Sepárala de envases y materiales no orgánicos.",
    consejo: "Puedes incorporarla al compostaje cuando sea apropiado.",
    palabrasClave: ["limon", "limón", "cascara limon", "cáscara limón"]
},

{
    id: 75,
    nombre: "Restos de arroz",
    nombreCorto: "Arroz",
    categoria: "organico",
    icono: "🍚",
    tipo: "Orgánico",
    material: "Materia orgánica",
    descripcion: "Los restos de arroz forman parte de los residuos orgánicos.",
    instrucciones: "Sepáralos de platos, recipientes y otros materiales.",
    consejo: "Planifica las porciones para reducir desperdicios.",
    palabrasClave: ["arroz", "restos arroz", "comida", "organico"]
},

{
    id: 76,
    nombre: "Restos de pasta",
    nombreCorto: "Pasta",
    categoria: "organico",
    icono: "🍝",
    tipo: "Orgánico",
    material: "Materia orgánica",
    descripcion: "Los restos de pasta son residuos de origen orgánico.",
    instrucciones: "Sepáralos de envases y cubiertos.",
    consejo: "Aprovecha las porciones para evitar desperdicios.",
    palabrasClave: ["pasta", "fideos", "restos pasta", "comida"]
},

{
    id: 77,
    nombre: "Semillas de frutas",
    nombreCorto: "Semillas",
    categoria: "organico",
    icono: "🌱",
    tipo: "Orgánico",
    material: "Materia vegetal",
    descripcion: "Las semillas de frutas forman parte de la materia orgánica.",
    instrucciones: "Sepáralas de envases y materiales no orgánicos.",
    consejo: "Algunas semillas pueden utilizarse para cultivar plantas.",
    palabrasClave: ["semillas", "semilla", "fruta", "organico"]
},

{
    id: 78,
    nombre: "Hojas de lechuga",
    nombreCorto: "Lechuga",
    categoria: "organico",
    icono: "🥬",
    tipo: "Orgánico",
    material: "Materia vegetal",
    descripcion: "Los restos de vegetales pertenecen a la fracción orgánica.",
    instrucciones: "Sepáralos de bolsas, envases y cubiertos.",
    consejo: "Pueden aprovecharse para compostaje.",
    palabrasClave: ["lechuga", "vegetal", "hojas", "organico"]
},

{
    id: 79,
    nombre: "Router antiguo",
    nombreCorto: "Router",
    categoria: "electronico",
    icono: "📡",
    tipo: "Residuo electrónico",
    material: "Plástico, metal y componentes electrónicos",
    descripcion: "Los routers contienen componentes electrónicos y deben gestionarse adecuadamente.",
    instrucciones: "Entrégalo en un punto de recolección de residuos electrónicos.",
    consejo: "Reutilízalo si todavía funciona.",
    palabrasClave: ["router", "wifi", "router wifi", "electronico"]
},

{
    id: 80,
    nombre: "Control remoto",
    nombreCorto: "Control remoto",
    categoria: "electronico",
    icono: "📺",
    tipo: "Residuo electrónico",
    material: "Plástico, metal y componentes electrónicos",
    descripcion: "Los controles remotos contienen componentes electrónicos.",
    instrucciones: "Retira las pilas cuando corresponda y llévalo a un sistema de recolección electrónica.",
    consejo: "Reutiliza el dispositivo mientras funcione.",
    palabrasClave: ["control remoto", "mando", "control tv", "electronico"]
},

{
    id: 81,
    nombre: "Cámara digital antigua",
    nombreCorto: "Cámara",
    categoria: "electronico",
    icono: "📷",
    tipo: "Residuo electrónico",
    material: "Plástico, metal y componentes electrónicos",
    descripcion: "Las cámaras digitales contienen componentes electrónicos que requieren gestión especializada.",
    instrucciones: "Llévala a un punto de recolección de residuos electrónicos.",
    consejo: "Borra tus datos antes de entregarla.",
    palabrasClave: ["camara", "cámara", "camara digital", "fotografia"]
},

{
    id: 82,
    nombre: "Extensión eléctrica",
    nombreCorto: "Extensión",
    categoria: "electronico",
    icono: "🔌",
    tipo: "Residuo electrónico",
    material: "Plástico, cobre y componentes eléctricos",
    descripcion: "Las extensiones eléctricas contienen cables y componentes que pueden gestionarse como residuos electrónicos.",
    instrucciones: "No la mezcles automáticamente con los residuos comunes.",
    consejo: "Revisa si puede repararse antes de desecharla.",
    palabrasClave: ["extension", "extensión", "cable extension", "electrico"]
},

{
    id: 83,
    nombre: "Impresora antigua",
    nombreCorto: "Impresora",
    categoria: "electronico",
    icono: "🖨️",
    tipo: "Residuo electrónico",
    material: "Plástico, metal y componentes electrónicos",
    descripcion: "Las impresoras contienen diferentes materiales y deben gestionarse como aparatos electrónicos.",
    instrucciones: "Llévala a un punto de recolección de residuos electrónicos.",
    consejo: "Repara o dona la impresora si todavía funciona.",
    palabrasClave: ["impresora", "printer", "electronico"]
},

{
    id: 84,
    nombre: "Monitor antiguo",
    nombreCorto: "Monitor",
    categoria: "electronico",
    icono: "🖥️",
    tipo: "Residuo electrónico",
    material: "Vidrio, plástico y componentes electrónicos",
    descripcion: "Los monitores deben gestionarse como residuos electrónicos.",
    instrucciones: "Llévalo a un punto de recolección adecuado.",
    consejo: "Reutiliza o dona el monitor si todavía funciona.",
    palabrasClave: ["monitor", "pantalla", "computadora", "electronico"]
},

{
    id: 85,
    nombre: "Adaptador de corriente",
    nombreCorto: "Adaptador",
    categoria: "electronico",
    icono: "🔌",
    tipo: "Residuo electrónico",
    material: "Plástico, metal y componentes electrónicos",
    descripcion: "Los adaptadores de corriente contienen componentes eléctricos y electrónicos.",
    instrucciones: "Entrégalo en un punto de recolección de residuos electrónicos.",
    consejo: "Guarda adaptadores compatibles que todavía funcionen.",
    palabrasClave: ["adaptador", "cargador", "corriente", "electronico"]
},

{
    id: 86,
    nombre: "Batería de celular",
    nombreCorto: "Batería de celular",
    categoria: "peligroso",
    icono: "🔋",
    tipo: "Residuo especial",
    material: "Batería de litio",
    descripcion: "Las baterías de celulares requieren una gestión especializada.",
    instrucciones: "No la perfores ni la arrojes a la basura común.",
    consejo: "Mantén las baterías dañadas lejos del calor.",
    palabrasClave: ["bateria celular", "batería celular", "litio", "bateria"]
},

{
    id: 87,
    nombre: "Pila AA",
    nombreCorto: "Pila AA",
    categoria: "peligroso",
    icono: "🔋",
    tipo: "Residuo especial",
    material: "Metal y compuestos químicos",
    descripcion: "Las pilas AA usadas requieren una disposición adecuada.",
    instrucciones: "Guárdalas secas y llévalas a un punto de recolección.",
    consejo: "Nunca las quemes ni las arrojes al agua.",
    palabrasClave: ["pila aa", "pila", "bateria", "batería"]
},

{
    id: 88,
    nombre: "Pintura sobrante",
    nombreCorto: "Pintura",
    categoria: "peligroso",
    icono: "🎨",
    tipo: "Residuo especial",
    material: "Pintura y químicos",
    descripcion: "Los restos de pintura pueden contener sustancias que requieren una disposición responsable.",
    instrucciones: "No viertas pintura en el desagüe y consulta un punto de recepción adecuado.",
    consejo: "Compra solo la cantidad de pintura que realmente necesites.",
    palabrasClave: ["pintura", "pintura sobrante", "quimico", "químico"]
},

{
    id: 89,
    nombre: "Medicamento vencido",
    nombreCorto: "Medicamento",
    categoria: "peligroso",
    icono: "💊",
    tipo: "Residuo especial",
    material: "Sustancias farmacéuticas",
    descripcion: "Los medicamentos vencidos requieren una gestión adecuada.",
    instrucciones: "Entrégalos a programas o puntos de recolección disponibles.",
    consejo: "No tires medicamentos por el inodoro.",
    palabrasClave: ["medicamento", "medicina", "pastilla", "vencido"]
},

{
    id: 90,
    nombre: "Barniz sobrante",
    nombreCorto: "Barniz",
    categoria: "peligroso",
    icono: "🪵",
    tipo: "Residuo especial",
    material: "Barniz y sustancias químicas",
    descripcion: "Los restos de barniz pueden contener sustancias que necesitan un manejo especial.",
    instrucciones: "No lo viertas en desagües. Consulta cómo entregarlo correctamente.",
    consejo: "Compra solo la cantidad necesaria para evitar sobrantes.",
    palabrasClave: ["barniz", "pintura", "quimico", "química"]
},

{
    id: 91,
    nombre: "Manguera vieja",
    nombreCorto: "Manguera",
    categoria: "otros",
    icono: "🪴",
    tipo: "Reutilizable",
    material: "Plástico y caucho",
    descripcion: "Una manguera puede repararse, reutilizarse o gestionarse según su material.",
    instrucciones: "Comprueba primero si puede repararse o reutilizarse.",
    consejo: "Dale un segundo uso antes de desecharla.",
    palabrasClave: ["manguera", "caucho", "plastico"]
},

{
    id: 92,
    nombre: "Mochila vieja",
    nombreCorto: "Mochila",
    categoria: "otros",
    icono: "🎒",
    tipo: "Reutilizable",
    material: "Tela, plástico y otros materiales",
    descripcion: "Las mochilas pueden repararse, reutilizarse o donarse.",
    instrucciones: "Comprueba si todavía puede utilizarse o repararse.",
    consejo: "Dónala si está en buenas condiciones.",
    palabrasClave: ["mochila", "bolso", "textil"]
},

{
    id: 93,
    nombre: "Juguete de plástico",
    nombreCorto: "Juguete",
    categoria: "otros",
    icono: "🧸",
    tipo: "Reutilizable",
    material: "Plástico",
    descripcion: "Los juguetes pueden repararse, reutilizarse o donarse antes de desecharse.",
    instrucciones: "Comprueba si todavía puede utilizarse.",
    consejo: "Donar juguetes prolonga su vida útil.",
    palabrasClave: ["juguete", "muñeco", "juguete plastico", "plastico"]
},

{
    id: 94,
    nombre: "Pelota vieja",
    nombreCorto: "Pelota",
    categoria: "otros",
    icono: "⚽",
    tipo: "Reutilizable",
    material: "Caucho o plástico",
    descripcion: "Una pelota vieja puede reutilizarse o repararse antes de convertirse en residuo.",
    instrucciones: "Comprueba si puede repararse o donarse.",
    consejo: "Busca otros usos antes de desecharla.",
    palabrasClave: ["pelota", "balon", "balón", "caucho"]
},

{
    id: 95,
    nombre: "Cinturón viejo",
    nombreCorto: "Cinturón",
    categoria: "otros",
    icono: "👔",
    tipo: "Textil",
    material: "Cuero, tela o materiales sintéticos",
    descripcion: "Los cinturones pueden reutilizarse o repararse dependiendo de su material.",
    instrucciones: "Evalúa si puede reutilizarse o donarse.",
    consejo: "Repara hebillas o partes dañadas cuando sea posible.",
    palabrasClave: ["cinturon", "cinturón", "correa", "textil"]
},

{
    id: 96,
    nombre: "Cortina vieja",
    nombreCorto: "Cortina",
    categoria: "otros",
    icono: "🪟",
    tipo: "Textil",
    material: "Tela",
    descripcion: "Las cortinas viejas pueden reutilizarse como tela o donarse.",
    instrucciones: "Sepáralas de accesorios y elementos diferentes.",
    consejo: "Puedes convertirlas en bolsas o paños reutilizables.",
    palabrasClave: ["cortina", "tela", "textil"]
},

{
    id: 97,
    nombre: "Toalla vieja",
    nombreCorto: "Toalla",
    categoria: "otros",
    icono: "🧻",
    tipo: "Textil",
    material: "Algodón u otras fibras",
    descripcion: "Las toallas pueden reutilizarse como paños de limpieza.",
    instrucciones: "Reutilízala o busca opciones de recuperación textil.",
    consejo: "Córtala en trozos para crear paños reutilizables.",
    palabrasClave: ["toalla", "tela", "textil", "algodon"]
},

{
    id: 98,
    nombre: "Cinta adhesiva usada",
    nombreCorto: "Cinta adhesiva",
    categoria: "otros",
    icono: "📏",
    tipo: "Residuo mixto",
    material: "Plástico y adhesivo",
    descripcion: "La cinta adhesiva combina materiales y normalmente no se recupera como papel convencional.",
    instrucciones: "Retírala de cajas y cartón cuando sea posible.",
    consejo: "Utiliza solamente la cantidad necesaria.",
    palabrasClave: ["cinta", "cinta adhesiva", "scotch", "adhesivo"]
},

{
    id: 99,
    nombre: "Esponja de cocina usada",
    nombreCorto: "Esponja",
    categoria: "otros",
    icono: "🧽",
    tipo: "Residuo mixto",
    material: "Espuma sintética",
    descripcion: "Las esponjas de cocina suelen estar fabricadas con materiales sintéticos difíciles de recuperar.",
    instrucciones: "Consulta las opciones locales y evita mezclarlas con materiales reciclables.",
    consejo: "Utiliza la esponja durante toda su vida útil.",
    palabrasClave: ["esponja", "esponja cocina", "limpieza"]
},

{
    id: 100,
    nombre: "Cepillo de dientes usado",
    nombreCorto: "Cepillo dental",
    categoria: "otros",
    icono: "🪥",
    tipo: "Residuo mixto",
    material: "Plástico y nylon",
    descripcion: "Los cepillos de dientes combinan diferentes materiales y normalmente no se recuperan junto con el plástico convencional.",
    instrucciones: "Consulta programas especiales de recuperación si existen en tu localidad.",
    consejo: "No deseches el cepillo hasta que haya terminado su vida útil.",
    palabrasClave: ["cepillo dientes", "cepillo dental", "cepillo", "dientes"]
}
];


/* =========================================================
   VARIABLES
========================================================= */

const buscador = document.getElementById("buscadorResiduo");
const resultadoBusqueda = document.getElementById("resultadoBusqueda");
const listaResiduos = document.getElementById("listaResiduos");
const cantidadResiduos = document.getElementById("cantidadResiduos");
let residuoActual = null;

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
residuoActual = residuo;
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

actualizarBotonFavorito();
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

});/* =========================================================
   NAVEGACIÓN
========================================================= */

function irAlBuscador() {

    const seccion = document.getElementById("buscador");

    seccion.scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {
        buscador.focus();
    }, 500);

}


function irACategorias() {

    const seccion = document.getElementById("categorias");

    seccion.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   FILTRAR POR CATEGORÍA
========================================================= */

function filtrarCategoria(categoria) {

    const residuosFiltrados = residuos.filter(
        residuo => residuo.categoria === categoria
    );

    listaResiduos.innerHTML = "";

    const nombreCategoria =
        obtenerNombreCategoria(categoria);

    const contador =
        document.createElement("div");

    contador.className = "resultado-filtro";

    contador.innerHTML = `
        <strong>${nombreCategoria}</strong>
        <span>${residuosFiltrados.length} residuos encontrados</span>
    `;

    listaResiduos.parentElement.insertBefore(
        contador,
        listaResiduos
    );


    if (residuosFiltrados.length === 0) {

        listaResiduos.innerHTML = `

            <div class="empty-search">

                <div class="empty-icon">
                    🔍
                </div>

                <h3>
                    No encontramos residuos
                </h3>

                <p>
                    Todavía no tienes residuos
                    registrados en esta categoría.
                </p>

            </div>

        `;

        document
            .getElementById("residuos")
            .scrollIntoView({
                behavior: "smooth"
            });

        return;
    }


    residuosFiltrados.forEach(residuo => {

        crearTarjetaResiduo(residuo);

    });


    document
        .getElementById("residuos")
        .scrollIntoView({
            behavior: "smooth"
        });

}function crearTarjetaResiduo(residuo) {

    const tarjeta =
        document.createElement("article");

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
            ${obtenerNombreCategoria(
                residuo.categoria
            )}
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


    tarjeta.addEventListener(
        "click",
        () => abrirModal(residuo)
    );


    listaResiduos.appendChild(tarjeta);

}

/* =========================================================
   SISTEMA DE FAVORITOS
========================================================= */

function obtenerFavoritos() {

    return JSON.parse(
        localStorage.getItem("ecoclasificaFavoritos") || "[]"
    );

}


function toggleFavorito() {

    if (!residuoActual) return;

    let favoritos = obtenerFavoritos();

    const yaEstaGuardado =
        favoritos.includes(residuoActual.id);


    if (yaEstaGuardado) {

        favoritos = favoritos.filter(
            id => id !== residuoActual.id
        );

    } else {

        favoritos.push(residuoActual.id);

    }


    localStorage.setItem(
        "ecoclasificaFavoritos",
        JSON.stringify(favoritos)
    );


    actualizarBotonFavorito();

    actualizarEstadisticas();

    mostrarMisGuardados();

}function eliminarFavorito(id) {

    let favoritos = obtenerFavoritos();

    favoritos = favoritos.filter(
        favoritoId => favoritoId !== id
    );

    localStorage.setItem(
        "ecoclasificaFavoritos",
        JSON.stringify(favoritos)
    );

    mostrarMisGuardados();

    actualizarEstadisticas();

}




function actualizarBotonFavorito() {

    const boton =
        document.getElementById("btnFavorito");

    if (!boton || !residuoActual) return;


    const favoritos =
        obtenerFavoritos();


    if (
        favoritos.includes(
            residuoActual.id
        )
    ) {

        boton.textContent =
            "❤️ Guardado";

    } else {

        boton.textContent =
            "⭐ Guardar residuo";

    }

}/* =========================================================
   CLASIFICADOR RÁPIDO
========================================================= */

function clasificarResiduo() {

    const entrada =
        document.getElementById("entradaClasificador");

    const resultado =
        document.getElementById("resultadoClasificador");

    const texto =
        entrada.value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();


    if (!texto) {

        resultado.innerHTML = `
            <div class="clasificador-error">
                ⚠️ Escribe primero qué residuo tienes.
            </div>
        `;

        return;
    }


    const encontrado = residuos.find(residuo => {

        const nombre =
            residuo.nombre
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");


        const palabras =
            residuo.palabrasClave || [];


        return (
            nombre.includes(texto) ||
            palabras.some(palabra =>
                palabra
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .includes(texto)
            )
        );

    });


    if (!encontrado) {

        resultado.innerHTML = `
            <div class="clasificador-error">

                🤔 No encontramos
                <strong>${entrada.value}</strong>.

                <br><br>

                Prueba con:
                botella, lata, papel,
                teclado, café o batería.

            </div>
        `;

        return;
    }


    resultado.innerHTML = `

        <div class="clasificador-exito">

            <div class="clasificador-residuo-icono">
                ${encontrado.icono}
            </div>

            <h3>
                ${encontrado.nombre}
            </h3>

            <p>
                <strong>Categoría:</strong>
                ${obtenerNombreCategoria(
                    encontrado.categoria
                )}
            </p>

            <p>
                ${encontrado.descripcion}
            </p>

            <button
                type="button"
                onclick='abrirModal(${JSON.stringify(encontrado)})'
            >
                📋 Ver instrucciones
            </button>

        </div>

    `;

}/* =========================================================
   BOTONES QUE FALTABAN
========================================================= */

function irAlBuscador() {

    const seccion = document.getElementById("buscador");

    if (!seccion) return;

    seccion.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    const entrada = document.getElementById("buscadorResiduo");

    if (entrada) {
        setTimeout(() => {
            entrada.focus();
        }, 500);
    }

}


function irACategorias() {

    const seccion = document.getElementById("categorias");

    if (!seccion) return;

    seccion.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


function filtrarCategoria(categoria) {

    const resultados = residuos.filter(
        residuo => residuo.categoria === categoria
    );

    /*
     * Mostramos los resultados utilizando
     * el mismo sistema que ya tiene tu página.
     */

    if (resultados.length === 0) {

        mostrarMensajeBusqueda(
            "😕",
            "No hay residuos en esta categoría",
            "Todavía no tenemos residuos registrados aquí."
        );

        document.getElementById("residuos").scrollIntoView({
            behavior: "smooth"
        });

        return;
    }


    listaResiduos.innerHTML = "";


    resultados.forEach(residuo => {

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


    document.getElementById("residuos").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}/* =========================================================
   RETO ECOCLASIFICA
========================================================= */

const preguntasQuiz = [

    {
        pregunta: "¿Dónde corresponde una cáscara de plátano?",
        icono: "🍌",
        opciones: [
            "Plástico",
            "Vidrio",
            "Orgánico",
            "Metal"
        ],
        correcta: 2,
        explicacion: "La cáscara de plátano es un residuo orgánico."
    },

    {
        pregunta: "¿Qué debes hacer con una botella de plástico antes de separarla?",
        icono: "🧴",
        opciones: [
            "Quemarla",
            "Vaciarla y separarla correctamente",
            "Enterrarla",
            "Mezclarla con comida"
        ],
        correcta: 1,
        explicacion: "Conviene vaciarla y separarla según el sistema disponible."
    },

    {
        pregunta: "¿Dónde debe gestionarse una batería usada?",
        icono: "🔋",
        opciones: [
            "Con residuos orgánicos",
            "Con papel",
            "En un punto de recolección adecuado",
            "Con vidrio"
        ],
        correcta: 2,
        explicacion: "Las baterías requieren una gestión especial."
    },

    {
        pregunta: "¿De qué material suele estar hecha una lata de bebida?",
        icono: "🥤",
        opciones: [
            "Aluminio",
            "Cartón",
            "Madera",
            "Tela"
        ],
        correcta: 0,
        explicacion: "Muchas latas de bebidas están fabricadas de aluminio."
    },

    {
        pregunta: "¿Qué debes evitar hacer con una batería dañada?",
        icono: "⚠️",
        opciones: [
            "Mantenerla alejada del calor",
            "Llevarla a un punto adecuado",
            "Perforarla",
            "Manipularla con cuidado"
        ],
        correcta: 2,
        explicacion: "Una batería dañada no debe perforarse ni exponerse al calor."
    },

    {
        pregunta: "¿Qué puedes hacer con ropa que todavía está en buen estado?",
        icono: "👕",
        opciones: [
            "Quemarla",
            "Donarla o reutilizarla",
            "Tirarla al agua",
            "Mezclarla con comida"
        ],
        correcta: 1,
        explicacion: "Donarla o reutilizarla prolonga su vida útil."
    },

    {
        pregunta: "¿Qué material corresponde principalmente a un frasco?",
        icono: "🫙",
        opciones: [
            "Vidrio",
            "Papel",
            "Tela",
            "Caucho"
        ],
        correcta: 0,
        explicacion: "Muchos frascos para alimentos están hechos de vidrio."
    },

    {
        pregunta: "¿Qué debes hacer antes de separar una lata de comida?",
        icono: "🥫",
        opciones: [
            "Llenarla de agua",
            "Quemarla",
            "Vaciarla y retirar restos",
            "Enterrarla"
        ],
        correcta: 2,
        explicacion: "Es recomendable retirar los restos de comida."
    },

    {
        pregunta: "¿Cuál de estos es un residuo electrónico?",
        icono: "⌨️",
        opciones: [
            "Cáscara de huevo",
            "Teclado",
            "Revista",
            "Cáscara de naranja"
        ],
        correcta: 1,
        explicacion: "Un teclado contiene componentes electrónicos."
    },

    {
        pregunta: "¿Cuál es una buena forma de reducir residuos?",
        icono: "🌎",
        opciones: [
            "Usar más productos descartables",
            "Quemar residuos",
            "Reutilizar objetos",
            "Mezclar todos los residuos"
        ],
        correcta: 2,
        explicacion: "Reutilizar ayuda a prolongar la vida útil de los objetos."
    },

    {
        pregunta: "¿Dónde va una cáscara de naranja?",
        icono: "🍊",
        opciones: [
            "Metal",
            "Orgánico",
            "Electrónico",
            "Vidrio"
        ],
        correcta: 1,
        explicacion: "Las cáscaras de frutas pertenecen a la fracción orgánica."
    },

    {
        pregunta: "¿Qué debes hacer con una caja de cartón limpia?",
        icono: "📦",
        opciones: [
            "Mojarla",
            "Mezclarla con restos de comida",
            "Aplastarla y separarla",
            "Quemarla"
        ],
        correcta: 2,
        explicacion: "El cartón limpio y seco puede separarse para recuperación."
    },

    {
        pregunta: "¿Dónde corresponde un teclado viejo?",
        icono: "⌨️",
        opciones: [
            "Papel",
            "Orgánico",
            "Electrónico",
            "Vidrio"
        ],
        correcta: 2,
        explicacion: "Los teclados son aparatos electrónicos."
    },

    {
        pregunta: "¿Qué debes hacer con un celular viejo?",
        icono: "📱",
        opciones: [
            "Tirarlo con comida",
            "Llevarlo a un sistema de residuos electrónicos",
            "Quemarlo",
            "Enterrarlo"
        ],
        correcta: 1,
        explicacion: "Los celulares deben gestionarse como residuos electrónicos."
    },

    {
        pregunta: "¿Qué conviene hacer con una mochila vieja que todavía sirve?",
        icono: "🎒",
        opciones: [
            "Quemarla",
            "Donarla o reutilizarla",
            "Tirarla al agua",
            "Romperla"
        ],
        correcta: 1,
        explicacion: "Reutilizar o donar prolonga la vida útil de la mochila."
    },

    {
        pregunta: "¿Qué material tiene un frasco de miel convencional?",
        icono: "🍯",
        opciones: [
            "Vidrio",
            "Tela",
            "Madera",
            "Caucho"
        ],
        correcta: 0,
        explicacion: "Muchos frascos de miel están hechos de vidrio."
    },

    {
        pregunta: "¿Dónde debería gestionarse una impresora antigua?",
        icono: "🖨️",
        opciones: [
            "Orgánico",
            "Papel",
            "Residuos electrónicos",
            "Vidrio"
        ],
        correcta: 2,
        explicacion: "Las impresoras son aparatos electrónicos."
    },

    {
        pregunta: "¿Qué puedes hacer con una caja de zapatos?",
        icono: "👟",
        opciones: [
            "Reutilizarla",
            "Quemarla",
            "Tirarla al agua",
            "Llenarla de aceite"
        ],
        correcta: 0,
        explicacion: "Las cajas pueden reutilizarse antes de reciclarlas."
    },

    {
        pregunta: "¿Qué debes hacer con un envase de yogur?",
        icono: "🥛",
        opciones: [
            "Dejarle restos de comida",
            "Vaciarlo y gestionarlo según su material",
            "Quemarlo",
            "Enterrarlo"
        ],
        correcta: 1,
        explicacion: "Conviene vaciarlo y gestionarlo según las reglas locales."
    },

    {
        pregunta: "¿Cuál de estos residuos es orgánico?",
        icono: "🥬",
        opciones: [
            "Hojas de lechuga",
            "Cargador",
            "Lata",
            "Espejo"
        ],
        correcta: 0,
        explicacion: "Las hojas de vegetales son materia orgánica."
    },

    {
        pregunta: "¿Qué debes hacer con restos de arroz?",
        icono: "🍚",
        opciones: [
            "Separarlos como orgánicos",
            "Ponerlos con vidrio",
            "Ponerlos con electrónicos",
            "Quemarlos"
        ],
        correcta: 0,
        explicacion: "Los restos de alimentos pertenecen a los residuos orgánicos."
    },

    {
        pregunta: "¿Qué puedes hacer con una toalla vieja?",
        icono: "🧻",
        opciones: [
            "Reutilizarla como paño",
            "Quemarla",
            "Tirarla al río",
            "Mezclarla con comida"
        ],
        correcta: 0,
        explicacion: "Una toalla puede reutilizarse como paño de limpieza."
    },

    {
        pregunta: "¿Qué debes hacer con una pila AA usada?",
        icono: "🔋",
        opciones: [
            "Tirarla con comida",
            "Llevarla a un punto de recolección",
            "Quemarla",
            "Tirarla al agua"
        ],
        correcta: 1,
        explicacion: "Las pilas requieren una gestión adecuada."
    },

    {
        pregunta: "¿Qué es mejor hacer con un juguete que todavía funciona?",
        icono: "🧸",
        opciones: [
            "Quemarlo",
            "Donarlo o reutilizarlo",
            "Romperlo",
            "Tirarlo inmediatamente"
        ],
        correcta: 1,
        explicacion: "Donarlo o reutilizarlo evita generar un residuo innecesariamente."
    },

    {
        pregunta: "¿Qué debes hacer con un cargador viejo?",
        icono: "🔌",
        opciones: [
            "Tirarlo como orgánico",
            "Gestionarlo como electrónico",
            "Quemarlo",
            "Mezclarlo con papel"
        ],
        correcta: 1,
        explicacion: "Los cargadores son residuos eléctricos o electrónicos."
    },

    {
        pregunta: "¿Qué puedes hacer antes de desechar ropa?",
        icono: "👕",
        opciones: [
            "Revisar si puede repararse o donarse",
            "Mojarla",
            "Quemarla",
            "Tirarla con comida"
        ],
        correcta: 0,
        explicacion: "Reparar, reutilizar o donar puede prolongar la vida de la ropa."
    },

    {
        pregunta: "¿Dónde corresponde un mouse viejo?",
        icono: "🖱️",
        opciones: [
            "Electrónico",
            "Orgánico",
            "Papel",
            "Vidrio"
        ],
        correcta: 0,
        explicacion: "Los mouse contienen componentes electrónicos."
    },

    {
        pregunta: "¿Qué puedes hacer con una revista vieja?",
        icono: "📖",
        opciones: [
            "Reutilizarla o reciclarla según el sistema",
            "Quemarla",
            "Mezclarla con aceite",
            "Tirarla al río"
        ],
        correcta: 0,
        explicacion: "Las revistas pueden reutilizarse o gestionarse como papel cuando corresponda."
    },

    {
        pregunta: "¿Qué debes hacer con un frasco de especias vacío?",
        icono: "🧂",
        opciones: [
            "Dejarlo lleno de comida",
            "Limpiarlo y separarlo correctamente",
            "Quemarlo",
            "Enterrarlo"
        ],
        correcta: 1,
        explicacion: "Los frascos de vidrio pueden reutilizarse o gestionarse correctamente."
    },

    {
        pregunta: "¿Qué tipo de residuo es una cámara digital antigua?",
        icono: "📷",
        opciones: [
            "Orgánico",
            "Electrónico",
            "Papel",
            "Metal doméstico común"
        ],
        correcta: 1,
        explicacion: "Una cámara digital contiene componentes electrónicos."
    },

    {
        pregunta: "¿Qué puedes hacer con una manguera vieja?",
        icono: "🪴",
        opciones: [
            "Repararla o reutilizarla",
            "Quemarla",
            "Tirarla al agua",
            "Mezclarla con comida"
        ],
        correcta: 0,
        explicacion: "Antes de desecharla, conviene revisar si puede reutilizarse."
    },

    {
        pregunta: "¿Qué deberías hacer con medicamentos vencidos?",
        icono: "💊",
        opciones: [
            "Tirarlos por el inodoro",
            "Llevarlos a un sistema de recolección adecuado",
            "Quemarlos",
            "Mezclarlos con comida"
        ],
        correcta: 1,
        explicacion: "Los medicamentos vencidos necesitan una gestión responsable."
    },

    {
        pregunta: "¿Qué debes evitar con pintura sobrante?",
        icono: "🎨",
        opciones: [
            "Consultar cómo desecharla",
            "Guardarla correctamente",
            "Verterla por el desagüe",
            "Mantenerla cerrada"
        ],
        correcta: 2,
        explicacion: "La pintura no debe verterse directamente al desagüe."
    },

    {
        pregunta: "¿Qué material predomina en un tornillo?",
        icono: "🔩",
        opciones: [
            "Metal",
            "Papel",
            "Tela",
            "Materia orgánica"
        ],
        correcta: 0,
        explicacion: "Los tornillos son principalmente metálicos."
    },

    {
        pregunta: "¿Qué puedes hacer con una llave metálica vieja?",
        icono: "🔑",
        opciones: [
            "Reutilizarla o recuperarla como metal",
            "Quemarla",
            "Tirarla con restos de comida",
            "Enterrarla"
        ],
        correcta: 0,
        explicacion: "Una llave metálica puede reutilizarse o recuperarse."
    },

    {
        pregunta: "¿Qué haces con una extensión eléctrica dañada?",
        icono: "🔌",
        opciones: [
            "Quemarla",
            "Gestionarla como residuo eléctrico/electrónico",
            "Tirarla con orgánicos",
            "Tirarla al agua"
        ],
        correcta: 1,
        explicacion: "Las extensiones contienen cables y componentes eléctricos."
    },

    {
        pregunta: "¿Qué puede hacerse con papel de regalo en buen estado?",
        icono: "🎁",
        opciones: [
            "Reutilizarlo",
            "Quemarlo",
            "Mojarlo",
            "Tirarlo inmediatamente"
        ],
        correcta: 0,
        explicacion: "Reutilizar el papel reduce la cantidad de residuos generados."
    },

    {
        pregunta: "¿Qué haces con una bolsa de papel limpia?",
        icono: "🛍️",
        opciones: [
            "Reutilizarla antes de reciclarla",
            "Quemarla",
            "Llenarla de aceite",
            "Tirarla al agua"
        ],
        correcta: 0,
        explicacion: "Reutilizarla varias veces ayuda a reducir residuos."
    },

    {
        pregunta: "¿Qué material corresponde a una botella de agua PET?",
        icono: "💧",
        opciones: [
            "Plástico",
            "Vidrio",
            "Metal",
            "Tela"
        ],
        correcta: 0,
        explicacion: "Las botellas PET son de plástico."
    },

    {
        pregunta: "¿Qué debes hacer con una tapa de botella?",
        icono: "🔵",
        opciones: [
            "Gestionarla según las reglas del sistema local",
            "Quemarla",
            "Tirarla al agua",
            "Mezclarla con comida"
        ],
        correcta: 0,
        explicacion: "Las reglas para las tapas pueden variar según el sistema de reciclaje."
    },

    {
        pregunta: "¿Qué puedes hacer con una mochila vieja?",
        icono: "🎒",
        opciones: [
            "Donarla o repararla",
            "Quemarla",
            "Tirarla inmediatamente",
            "Tirarla al río"
        ],
        correcta: 0,
        explicacion: "Reparar o donar prolonga la vida útil de la mochila."
    },

    {
        pregunta: "¿Qué haces con restos de pasta?",
        icono: "🍝",
        opciones: [
            "Separarlos como orgánicos",
            "Ponerlos con vidrio",
            "Ponerlos con electrónicos",
            "Ponerlos con metal"
        ],
        correcta: 0,
        explicacion: "Los restos de alimentos son residuos orgánicos."
    },

    {
        pregunta: "¿Qué debes hacer con un router viejo?",
        icono: "📡",
        opciones: [
            "Gestionarlo como electrónico",
            "Quemarlo",
            "Ponerlo con papel",
            "Ponerlo con orgánicos"
        ],
        correcta: 0,
        explicacion: "Los routers son aparatos electrónicos."
    },

    {
        pregunta: "¿Qué puedes hacer con una pelota vieja que aún puede repararse?",
        icono: "⚽",
        opciones: [
            "Repararla o reutilizarla",
            "Quemarla",
            "Tirarla al agua",
            "Mezclarla con comida"
        ],
        correcta: 0,
        explicacion: "Reparar y reutilizar es preferible a desecharla inmediatamente."
    },

    {
        pregunta: "¿Qué haces con un cepillo de dientes usado?",
        icono: "🪥",
        opciones: [
            "Consultar si existe un programa de recuperación",
            "Quemarlo",
            "Tirarlo al agua",
            "Mezclarlo con comida"
        ],
        correcta: 0,
        explicacion: "Los cepillos combinan distintos materiales y pueden requerir una gestión específica."
    },

    {
        pregunta: "¿Qué debes hacer con una esponja de cocina usada?",
        icono: "🧽",
        opciones: [
            "Revisar las opciones locales de disposición",
            "Quemarla",
            "Tirarla al agua",
            "Mezclarla con papel reciclable"
        ],
        correcta: 0,
        explicacion: "Las esponjas suelen estar hechas de materiales difíciles de recuperar."
    },

    {
        pregunta: "¿Qué haces con un envase de champú vacío?",
        icono: "🧴",
        opciones: [
            "Vaciarlo y gestionarlo según su material",
            "Quemarlo",
            "Enterrarlo",
            "Tirarlo con comida"
        ],
        correcta: 0,
        explicacion: "Los envases deben vaciarse y clasificarse según el sistema disponible."
    },

    {
        pregunta: "¿Qué puedes hacer con una copa que todavía está en buen estado?",
        icono: "🥂",
        opciones: [
            "Reutilizarla",
            "Romperla",
            "Quemarla",
            "Tirarla al agua"
        ],
        correcta: 0,
        explicacion: "Reutilizar un objeto en buen estado evita generar residuos innecesarios."
    },

    {
        pregunta: "¿Qué debes hacer con un monitor que todavía funciona?",
        icono: "🖥️",
        opciones: [
            "Reutilizarlo o donarlo",
            "Romperlo",
            "Quemarlo",
            "Tirarlo al agua"
        ],
        correcta: 0,
        explicacion: "Reutilizar o donar un equipo funcional prolonga su vida útil."
    },

    {
        pregunta: "¿Qué haces con una caja de cartón mojada?",
        icono: "📦",
        opciones: [
            "Revisar si todavía puede recuperarse",
            "Mezclarla con papel seco sin revisar",
            "Quemarla",
            "Tirarla al agua"
        ],
        correcta: 0,
        explicacion: "La humedad puede afectar la recuperación del cartón."
    },

    {
        pregunta: "¿Qué debes priorizar antes de reciclar un objeto?",
        icono: "♻️",
        opciones: [
            "Reutilizarlo si todavía sirve",
            "Romperlo",
            "Quemarlo",
            "Tirarlo inmediatamente"
        ],
        correcta: 0,
        explicacion: "Reutilizar ayuda a alargar la vida útil del producto."
    },

    {
        pregunta: "¿Qué ayuda a reducir la cantidad de residuos?",
        icono: "🌎",
        opciones: [
            "Comprar solo lo necesario",
            "Usar más descartables",
            "Mezclar residuos",
            "Quemar basura"
        ],
        correcta: 0,
        explicacion: "Consumir de manera responsable evita generar residuos innecesarios."
    },

    {
        pregunta: "¿Qué debes hacer cuando no estás seguro de cómo gestionar un residuo?",
        icono: "🤔",
        opciones: [
            "Investigar las reglas locales",
            "Quemarlo",
            "Tirarlo a cualquier contenedor",
            "Tirarlo al agua"
        ],
        correcta: 0,
        explicacion: "Las reglas pueden variar, así que conviene revisar la normativa o sistema local."
    }

];



let quizPreguntaActual = 0;
let quizPuntajeActual = 0;
let quizRespondido = false;

let preguntasPartida = [];

function iniciarQuiz() {

    preguntasPartida =
        [...preguntasQuiz]
            .sort(() => Math.random() - 0.5)
            .slice(0, 10);


    quizPreguntaActual = 0;

    quizPuntajeActual = 0;

    quizRespondido = false;

    mostrarPreguntaQuiz();

}

function mostrarPreguntaQuiz() {

    const pregunta =
        preguntasPartida[quizPreguntaActual];

    document.getElementById(
        "quizProgreso"
    ).textContent =
        `Pregunta ${quizPreguntaActual + 1} de ${preguntasPartida.length}`;

    document.getElementById(
        "quizPuntos"
    ).textContent =
        quizPuntajeActual;

    document.getElementById(
        "quizIcono"
    ).textContent =
        pregunta.icono;

    document.getElementById(
        "quizPregunta"
    ).textContent =
        pregunta.pregunta;

    document.getElementById(
        "quizResultado"
    ).innerHTML = "";

    const contenedor =
        document.getElementById(
            "quizOpciones"
        );

    contenedor.innerHTML = "";

    quizRespondido = false;


    const opcionesMezcladas =
        pregunta.opciones
            .map((opcion, indice) => ({
                texto: opcion,
                esCorrecta:
                    indice === pregunta.correcta
            }))
            .sort(
                () => Math.random() - 0.5
            );


    opcionesMezcladas.forEach(opcion => {

        const boton =
            document.createElement(
                "button"
            );

        boton.type = "button";

        boton.className =
            "quiz-opcion";

        boton.textContent =
            opcion.texto;

        boton.addEventListener(
            "click",
            () =>
                responderQuiz(
                    opcion.esCorrecta
                )
        );

        contenedor.appendChild(
            boton
        );

    });


    const botonPrincipal =
        document.getElementById(
            "quizBoton"
        );

    botonPrincipal.disabled = true;

    botonPrincipal.textContent =
        quizPreguntaActual ===
        preguntasPartida.length - 1
            ? "🏁 Ver resultado"
            : "➡️ Siguiente pregunta";

}


function responderQuiz(esCorrecta) {

    if (quizRespondido)
        return;


    quizRespondido =
        true;


    const pregunta =
        preguntasPartida[
            quizPreguntaActual
        ];


    const botones =
        document.querySelectorAll(
            ".quiz-opcion"
        );


    botones.forEach(
        boton =>
            boton.disabled =
                true
    );


    if (esCorrecta) {

        quizPuntajeActual +=
            10;


        quizAciertosTotales++;


        botones.forEach(
            boton => {

                if (
                    boton.textContent ===
                    pregunta.opciones[
                        pregunta.correcta
                    ]
                ) {

                    boton.classList.add(
                        "quiz-correcto"
                    );

                }

            }
        );


        document.getElementById(
            "quizResultado"
        ).innerHTML = `

            <div class="quiz-success">
                ✅ ¡Correcto!
                +10 puntos
            </div>

            <p>
                ${pregunta.explicacion}
            </p>

        `;

    } else {

        botones.forEach(
            boton => {

                if (
                    boton.textContent ===
                    pregunta.opciones[
                        pregunta.correcta
                    ]
                ) {

                    boton.classList.add(
                        "quiz-correcto"
                    );

                }

            }
        );


        document.getElementById(
            "quizResultado"
        ).innerHTML = `

            <div class="quiz-error">
                ❌ Incorrecto
            </div>

            <p>
                ${pregunta.explicacion}
            </p>

        `;

    }


    document.getElementById(
        "quizPuntos"
    ).textContent =
        quizPuntajeActual;


    actualizarEstadisticas();


    const botonPrincipal =
        document.getElementById(
            "quizBoton"
        );


    botonPrincipal.disabled =
        false;


    botonPrincipal.onclick =
        siguientePreguntaQuiz;

}



    function siguientePreguntaQuiz() {

    if (!quizRespondido) {
        return;
    }


    if (
        quizPreguntaActual >=
        preguntasPartida.length - 1
    ) {

        finalizarQuiz();

        return;

    }


    quizPreguntaActual++;

    mostrarPreguntaQuiz();

}function finalizarQuiz() {

    const total =
        preguntasPartida.length;


    const aciertos =
        quizPuntajeActual / 10;


    let mensaje;


    if (aciertos === 10) {

        mensaje =
            "🏆 ¡Perfecto! Dominas la clasificación de residuos.";

    } else if (aciertos >= 8) {

        mensaje =
            "🌎 ¡Excelente trabajo!";

    } else if (aciertos >= 5) {

        mensaje =
            "♻️ ¡Muy bien! Sigue aprendiendo.";

    } else {

        mensaje =
            "🌱 Sigue practicando. Cada intento ayuda.";

    }


    document.getElementById(
        "quizProgreso"
    ).textContent =
        "Reto terminado";


    document.getElementById(
        "quizIcono"
    ).textContent =
        aciertos >= 8
            ? "🏆"
            : "🌱";


    document.getElementById(
        "quizPregunta"
    ).innerHTML = `

        Obtuviste

        <strong>
            ${aciertos} / ${total}
        </strong>

        respuestas correctas

    `;


    document.getElementById(
        "quizOpciones"
    ).innerHTML = "";


    document.getElementById(
        "quizResultado"
    ).innerHTML = `

        <div class="quiz-final">

            <strong>
                ⭐ ${quizPuntajeActual} puntos
            </strong>

            <p>
                ${mensaje}
            </p>

        </div>

    `;


    const boton =
        document.getElementById(
            "quizBoton"
        );


    boton.disabled = false;

    boton.textContent =
        "🔄 Jugar otra vez";


    boton.onclick =
        iniciarQuiz;

}




/* =========================================================
   ESTADÍSTICAS
========================================================= */

let quizAciertosTotales = 0;


/* -----------------------------------------
   ACTUALIZAR ESTADÍSTICAS
----------------------------------------- */

function actualizarEstadisticas() {

    const residuosElemento =
        document.getElementById(
            "estadisticaResiduos"
        );

    const favoritosElemento =
        document.getElementById(
            "estadisticaFavoritos"
        );

    const puntosElemento =
        document.getElementById(
            "estadisticaPuntos"
        );

    const aciertosElemento =
        document.getElementById(
            "estadisticaAciertos"
        );


    if (residuosElemento) {

        residuosElemento.textContent =
            residuos.length;

    }


    if (favoritosElemento) {

        favoritosElemento.textContent =
            obtenerFavoritos().length;

    }


    if (puntosElemento) {

        puntosElemento.textContent =
            quizPuntajeActual || 0;

    }


    if (aciertosElemento) {

        aciertosElemento.textContent =
            quizAciertosTotales;

    }

}/* =========================================================
   MOSTRAR MIS RESIDUOS GUARDADOS
========================================================= */

function mostrarMisGuardados() {

    const contenedor =
        document.getElementById(
            "listaGuardados"
        );

    if (!contenedor) return;


    const favoritos =
        obtenerFavoritos();


    contenedor.innerHTML = "";


    if (favoritos.length === 0) {

        contenedor.innerHTML = `

            <div class="guardado-vacio">

                <div class="guardado-vacio-icono">
                    ⭐
                </div>

                <h3>
                    Todavía no tienes residuos guardados
                </h3>

                <p>
                    Abre un residuo y pulsa
                    "⭐ Guardar residuo"
                    para verlo aquí.
                </p>

            </div>

        `;

        return;

    }


    const residuosGuardados =
        residuos.filter(
            residuo =>
                favoritos.includes(
                    residuo.id
                )
        );


    residuosGuardados.forEach(
        residuo => {

            const tarjeta =
                document.createElement(
                    "article"
                );


            tarjeta.className =
                "guardado-card";


            tarjeta.innerHTML = `

                <div class="guardado-icono">
                    ${residuo.icono}
                </div>

                <span class="guardado-categoria">
                    ${obtenerNombreCategoria(
                        residuo.categoria
                    )}
                </span>

                <h3>
                    ${residuo.nombre}
                </h3>

                <p>
                    ${residuo.descripcion}
                </p>

                <div class="guardado-acciones">

                    <button
                        class="guardado-ver"
                        type="button"
                    >
                        📋 Ver información
                    </button>

                    <button
                        class="guardado-eliminar"
                        type="button"
                    >
                        🗑️ Quitar
                    </button>

                </div>

            `;


            const botonVer =
                tarjeta.querySelector(
                    ".guardado-ver"
                );


            const botonEliminar =
                tarjeta.querySelector(
                    ".guardado-eliminar"
                );


            botonVer.addEventListener(
                "click",
                () => {

                    abrirModal(residuo);

                }
            );


            botonEliminar.addEventListener(
                "click",
                () => {

                    eliminarFavorito(
                        residuo.id
                    );

                }
            );


            contenedor.appendChild(
                tarjeta
            );

        }
    );

}

document.addEventListener("DOMContentLoaded", () => {

    mostrarTodosLosResiduos();

    actualizarEstadisticas();

    mostrarMisGuardados();

});

/* =========================================================
   MODO OSCURO
========================================================= */

function cambiarTema() {

    document.body.classList.toggle(
        "modo-oscuro"
    );

    const modoOscuro =
        document.body.classList.contains(
            "modo-oscuro"
        );

    localStorage.setItem(
        "ecoclasificaTema",
        modoOscuro
            ? "oscuro"
            : "claro"
    );

    actualizarBotonTema();
}


function actualizarBotonTema() {

    const boton =
        document.getElementById(
            "botonTema"
        );

    if (!boton) return;

    const modoOscuro =
        document.body.classList.contains(
            "modo-oscuro"
        );

    boton.textContent =
        modoOscuro
            ? "☀️"
            : "🌙";

    boton.setAttribute(
        "aria-label",
        modoOscuro
            ? "Cambiar a modo claro"
            : "Cambiar a modo oscuro"
    );
}


/* Cargar el tema guardado */

const temaGuardado =
    localStorage.getItem(
        "ecoclasificaTema"
    );

if (temaGuardado === "oscuro") {

    document.body.classList.add(
        "modo-oscuro"
    );

}

actualizarBotonTema();
/* =========================================================
   MENSAJES FLOTANTES
========================================================= */

function mostrarMensajeFlotante(
    icono,
    titulo,
    texto
) {

    const anterior =
        document.querySelector(
            ".mensaje-flotante"
        );

    if (anterior) {
        anterior.remove();
    }


    const mensaje =
        document.createElement(
            "div"
        );


    mensaje.className =
        "mensaje-flotante";


    mensaje.innerHTML = `

        <div class="mensaje-flotante-icono">
            ${icono}
        </div>

        <div class="mensaje-flotante-contenido">

            <strong>
                ${titulo}
            </strong>

            <span>
                ${texto}
            </span>

        </div>

        <button
            type="button"
            class="mensaje-flotante-cerrar"
            aria-label="Cerrar mensaje"
        >
            ×
        </button>

    `;


    document.body.appendChild(
        mensaje
    );


    const cerrar =
        mensaje.querySelector(
            ".mensaje-flotante-cerrar"
        );


    cerrar.addEventListener(
        "click",
        () => {
            mensaje.remove();
        }
    );


    requestAnimationFrame(() => {

        mensaje.classList.add(
            "mensaje-visible"
        );

    });


    setTimeout(() => {

        mensaje.classList.remove(
            "mensaje-visible"
        );


        setTimeout(() => {

            if (mensaje.parentElement) {
                mensaje.remove();
            }

        }, 350);

    }, 3500);

}
mostrarMensajeFlotante(
    "✅",
    "ECOCLASIFICA",
    "¡Mensaje flotante funcionando!"
);
