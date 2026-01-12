// Array de platos para cada día de la semana (0 = Domingo, 1 = Lunes, ... 6 = Sábado)
const dailyPlates = [
    {
        day: "Domingo",
        name: "Pollo con Arroz",
        description: "Delicioso pollo tierno acompañado de arroz blanco esponjoso, vegetales frescos y una deliciosa salsa casera.",
        image: "../Assets/plate-sunday.jpg"
    },
    {
        day: "Lunes",
        name: "Pasta a la Bolognesa",
        description: "Pasta fresca con una deliciosa salsa bolognesa hecha con carne molida, tomate natural y especias. Acompañada de verduras y queso parmesano.",
        image: "../Assets/plate-monday.jpg"
    },
    {
        day: "Martes",
        name: "Salmón a la Mantequilla",
        description: "Filete de salmón fresco cocinado a la mantequilla con limón, acompañado de brócoli al vapor y puré de papas casero.",
        image: "../Assets/plate-tuesday.jpg"
    },
    {
        day: "Miércoles",
        name: "Tacos de Carne Molida",
        description: "Deliciosos tacos rellenos de carne molida sazonada, lechuga fresca, queso fundido y salsa casera. Acompañados de arroz y frijoles.",
        image: "../Assets/plate-wednesday.jpg"
    },
    {
        day: "Jueves",
        name: "Pechuga de Pollo Empanizada",
        description: "Pechuga de pollo crujiente empanizada, acompañada de papas al horno y ensalada fresca con aderezo casero.",
        image: "../Assets/plate-thursday.jpg"
    },
    {
        day: "Viernes",
        name: "Pizza Casera",
        description: "Pizza hecha en casa con masa crujiente, salsa de tomate fresca, queso derretido y variedad de ingredientes. Perfecta para el fin de semana.",
        image: "../Assets/plate-friday.jpg"
    },
    {
        day: "Sábado",
        name: "Hamburguesa Gourmet",
        description: "Hamburguesa jugosa con pan artesanal tostado, carne de res de primera calidad, lechuga, tomate, queso cheddar y salsa especial.",
        image: "../Assets/plate-saturday.jpg"
    }
];

// Función para obtener el plato del día actual
function getDailyPlate() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dailyPlates[dayOfWeek];
}

// Función para formatear la fecha actual
function formatCurrentDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('es-ES', options);
}

// Función para cargar el plato del día en la página
function loadDailyPlate() {
    const plate = getDailyPlate();
    
    // Actualizar imagen
    const plateImage = document.getElementById('plateDayImage');
    if (plateImage) {
        plateImage.src = plate.image;
        plateImage.alt = plate.name;
    }
    
    // Actualizar nombre del plato
    const plateName = document.getElementById('plateDayName');
    if (plateName) {
        plateName.textContent = plate.name;
    }
    
    // Actualizar descripción
    const plateDescription = document.getElementById('plateDayDescription');
    if (plateDescription) {
        plateDescription.textContent = plate.description;
    }
    
    // Actualizar fecha
    const currentDate = document.getElementById('currentDate');
    if (currentDate) {
        currentDate.textContent = formatCurrentDate();
    }
}

// Cargar el plato cuando la página carga
document.addEventListener('DOMContentLoaded', loadDailyPlate);