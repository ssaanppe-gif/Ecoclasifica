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

}/* =========================================================
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

}
