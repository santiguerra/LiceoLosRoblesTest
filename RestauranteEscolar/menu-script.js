// Datos de platos del día por día de la semana
const dailyPlates = {
    1: { name: "Pasta a la Bolognesa", description: "Deliciosa pasta con salsa de carne casera, queso parmesano y ensalada fresca", image: "../Assets/plato-lunes.png" },
    2: { name: "Pollo Asado", description: "Pollo tierno asado con papas al horno y verduras de temporada", image: "../Assets/plato-martes.png" },
    3: { name: "Arroz con Pollo", description: "Arroz amarillo con pollo jugoso, zanahoria, guisantes y caldo casero", image: "../Assets/plato-miercoles.png" },
    4: { name: "Carne Guisada", description: "Carne tierna guisada con papas, zanahoria y salsa deliciosa", image: "../Assets/plato-jueves.png" },
    5: { name: "Pescado a la Mantequilla", description: "Pescado fresco a la mantequilla con limón, arroz blanco y ensalada", image: "../Assets/plato-viernes.png" }
};

// Datos de loncheras del día por día de la semana
const dailySnacks = {
    1: { name: "Sandwich de Jamón y Queso", description: "Pan integral con jamón de pavo, queso fresco, tomate y lechuga", image: "../Assets/lonchera-lunes.png" },
    2: { name: "Frutas Variadas", description: "Manzana, plátano, uva y naranja fresca picada", image: "../Assets/lonchera-martes.png" },
    3: { name: "Yogurt con Granola", description: "Yogurt natural con granola casera y frutos secos", image: "../Assets/lonchera-miercoles.png" },
    4: { name: "Quesadillas", description: "Tortillas de maíz rellenas de queso fundido y jamón", image: "../Assets/lonchera-jueves.png" },
    5: { name: "Galletas Integrales y Leche", description: "Galletas caseras integrales con vaso de leche fría", image: "../Assets/lonchera-viernes.png" }
};

// Función para obtener el día de la semana (1-5, lunes-viernes)
function getWeekday() {
    const day = new Date().getDay();
    return day === 0 ? 5 : day; // Domingo = 5 (viernes), lunes-viernes = 1-5
}

// Función para formatear la fecha
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
}

// Función para cargar el plato del día
function loadDailyPlate() {
    const weekday = getWeekday();
    const plate = dailyPlates[weekday] || dailyPlates[1];
    
    document.getElementById('plateDayImage').src = plate.image;
    document.getElementById('plateDayName').textContent = plate.name;
    document.getElementById('plateDayDescription').textContent = plate.description;
    document.getElementById('currentDate').textContent = formatDate(new Date());
}

// Función para cargar la lonchera del día
function loadDailySnack() {
    const weekday = getWeekday();
    const snack = dailySnacks[weekday] || dailySnacks[1];
    
    document.getElementById('snackDayImage').src = snack.image;
    document.getElementById('snackDayName').textContent = snack.name;
    document.getElementById('snackDayDescription').textContent = snack.description;
}

// Cargar datos al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    loadDailyPlate();
    loadDailySnack();
});