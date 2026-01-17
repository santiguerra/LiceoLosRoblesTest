// Datos de platos del día con fechas de enero
const dailyPlates = {
    19: { name: "Milanesa de Pollo", description: "Una crujiente milanesa de pollo dorada, servida sobre una cama de pasta corta y arroz blanco graneado. Se acompaña con saludables verduras al vapor y una sopa reconfortante para comenzar.", image: "../Assets/Comidas/Almuerzos/A19.png", date: "Lunes 19" },
    20: { name: "Pechuga a la Plancha", description: "Jugosa pechuga de pollo asada a la plancha, acompañada de arroz amarillo condimentado y verduras salteadas al dente. El plato se complementa con chips de yuca crocantes y una nutritiva sopa de avena de entrada.", image: "../Assets/Comidas/Almuerzos/A20.png", date: "Martes 20" },
    21: { name: "Spaghetti con Pollo", description: "Clásica pasta tipo spaghetti mezclada con trozos de pollo y verduras frescas. Este plato ligero viene acompañado de un suave croissant y un refrescante jugo natural de frutas.", image: "../Assets/Comidas/Almuerzos/A21.png", date: "Miércoles 21" },
    22: { name: "Robles Snack", description: "Un menú divertido y artesanal que incluye nuggets de pollo hechos en casa, acompañados de papas a la francesa horneadas (más saludables) y una porción de verduras para equilibrar.", image: "../Assets/Comidas/Almuerzos/A22.png", date: "Jueves 22" },
    23: { name: "Frijolada", description: "Tradicional plato de frijoles guisados servidos con carne molida bien sazonada. Se acompaña de arroz blanco, chips dulces de plátano maduro y aguacate fresco en su punto.", image: "../Assets/Comidas/Almuerzos/A23.png", date: "Viernes 23" },
    26: { name: "Lomo BBQ", description: "Tierno corte de lomo bañado en una deliciosa salsa BBQ, servido junto a un cremoso puré de papa y arroz. Incluye una ensalada fresca y una sopa de pasta caliente como entrada.", image: "../Assets/Comidas/Almuerzos/A26.png", date: "Lunes 26" },
    27: { name: "Chuleta de Pollo", description: "Sabrosa chuleta de pollo servida con un casero guiso de lentejas y arroz blanco. El toque crocante lo aportan los chips de plátano, todo acompañado de una limonada fría.", image: "../Assets/Comidas/Almuerzos/A27.png", date: "Martes 27" },
    28: { name: "Spaghetti con Pollo", description: "Repetimos nuestro favorito de pasta: Spaghetti con pollo y vegetales, perfecto para mitad de semana, servido con un croissant mantequilloso y jugo natural.", image: "../Assets/Comidas/Almuerzos/A28.png", date: "Miércoles 28" },
    29: { name: "Robles Snack", description: "Vuelven los deliciosos nuggets de pollo artesanales, servidos con papas horneadas doraditas y verduras frescas, ideal para disfrutar un almuerzo diferente.", image: "../Assets/Comidas/Almuerzos/A29.png", date: "Jueves 29" },
    30: { name: "Pizza", description: "Para cerrar el mes con broche de oro, una deliciosa porción de pizza recién horneada, acompañada de una refrescante limonada.", image: "../Assets/Comidas/Almuerzos/A30.png", date: "Viernes 30" }
};

// Datos de loncheras del día por fecha
const dailySnacks = {
    19: { name: "Dedos de Queso", description: "Unos divertidos y crujientes dedos de queso para empezar la semana con energía. Se acompañan de un cremoso yogurt y una porción de fruta fresca.", image: "../Assets/Comidas/Loncheras/L19.png" },
    20: { name: "Salchipapa", description: "La favorita de los niños: una sabrosa mezcla de papitas y salchichas (salchipapa), perfecta para disfrutar junto a un refrescante jugo natural.", image: "../Assets/Comidas/Loncheras/L20.png" },
    21: { name: "Panqueques", description: "Esponjosos panqueques caseros para un descanso dulce, servidos con fruta picada y un delicioso vaso de Milo para recargar fuerzas.", image: "../Assets/Comidas/Loncheras/L21.png" },
    22: { name: "Quesadillas", description: "Ricas quesadillas calientitas rellenas de jamón y abundante queso derretido. El complemento ideal es una porción saludable de fruta y yogurt.", image: "../Assets/Comidas/Loncheras/L22.png" },
    23: { name: "Sánduche de Pollo", description: "Un nutritivo sánduche de pollo preparado con vegetales frescos. Esta lonchera balanceada se completa con fruta y un vaso de Milo.", image: "../Assets/Comidas/Loncheras/L23.png" },
    26: { name: "Empanada", description: "Una crujiente y tradicional empanada para arrancar la segunda semana. Se sirve acompañada de fruta mixta variada y una reconfortante bebida de chocolate.", image: "../Assets/Comidas/Loncheras/L26.png" },
    27: { name: "Mini Perro", description: "Un delicioso mini perro caliente, ideal para un snack divertido a media mañana, acompañado de un jugo natural lleno de vitaminas.", image: "../Assets/Comidas/Loncheras/L27.png" },
    28: { name: "Arepa de Choclo", description: "La infaltable arepa de choclo (maíz dulce) rellena de queso suave. Una opción típica y deliciosa que va acompañada de fruta fresca y yogurt.", image: "../Assets/Comidas/Loncheras/L28.png" },
    29: { name: "Huevos Rancheros", description: "Unos sabrosos huevos rancheros llenos de sabor para un desayuno/snack potente. Se sirven junto a fruta fresca y un vaso de Milo.", image: "../Assets/Comidas/Loncheras/L29.png" },
    30: { name: "Waffles", description: "Cerramos el mes con unos waffles doraditos y crujientes, el premio perfecto para el viernes. Se acompañan de fruta picada y yogurt.", image: "../Assets/Comidas/Loncheras/L30.png" }
};

// Días festivos en enero (formato: día del mes)
const holidays = [1]; // 1 de enero es festivo

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

// Función para obtener el plato del día según la fecha actual
function getDailyPlateByDate() {
    const today = new Date();
    const day = today.getDate();
    const dayOfWeek = today.getDay(); // 0 = domingo, 6 = sábado
    
    // Verificar si es fin de semana o festivo
    if (dayOfWeek === 0 || dayOfWeek === 6 || holidays.includes(day)) {
        return null; // No hay servicio
    }
    
    // Buscar si hay un plato para hoy
    if (dailyPlates[day]) {
        return dailyPlates[day];
    }
    
    // Si no hay plato específico, buscar el más cercano anterior
    const availableDays = Object.keys(dailyPlates).map(Number).sort((a, b) => b - a);
    for (let availableDay of availableDays) {
        if (availableDay <= day) {
            return dailyPlates[availableDay];
        }
    }
    
    // Si no hay ninguno disponible, retornar el primero
    return dailyPlates[19] || dailyPlates[1];
}

// Función para obtener el próximo plato disponible
function getNextAvailablePlate() {
    const today = new Date();
    let nextDate = new Date(today);
    nextDate.setDate(nextDate.getDate() + 1);
    
    // Buscar el próximo día con servicio (máximo 7 días)
    for (let i = 0; i < 7; i++) {
        const day = nextDate.getDate();
        const dayOfWeek = nextDate.getDay();
        
        // Si no es fin de semana ni festivo y hay un plato disponible
        if ((dayOfWeek !== 0 && dayOfWeek !== 6 && !holidays.includes(day)) && dailyPlates[day]) {
            return { plate: dailyPlates[day], date: new Date(nextDate) };
        }
        
        nextDate.setDate(nextDate.getDate() + 1);
    }
    
    return null;
}

// Función para cargar el plato del día
function loadDailyPlate() {
    const plate = getDailyPlateByDate();
    
    if (plate === null) {
        // No hay servicio hoy
        const nextPlate = getNextAvailablePlate();
        
        document.getElementById('plateDayImage').style.display = 'none';
        document.getElementById('plateDayName').textContent = 'El día de hoy no tendremos servicio';
        document.getElementById('currentDate').textContent = formatDate(new Date());
        
        if (nextPlate) {
            document.getElementById('plateDayDescription').textContent = `Puede consultar el siguiente platillo en el menú mensual: ${nextPlate.plate.name} - ${formatDate(nextPlate.date)}`;
        } else {
            document.getElementById('plateDayDescription').textContent = 'Puede consultar el menú mensual para más información.';
        }
    } else {
        document.getElementById('plateDayImage').style.display = 'block';
        document.getElementById('plateDayImage').src = plate.image;
        document.getElementById('plateDayName').textContent = plate.name;
        document.getElementById('plateDayDescription').textContent = plate.description;
        document.getElementById('currentDate').textContent = plate.date || formatDate(new Date());
    }
}

// Función para obtener la lonchera del día según la fecha actual
function getDailySnackByDate() {
    const today = new Date();
    const day = today.getDate();
    const dayOfWeek = today.getDay(); // 0 = domingo, 6 = sábado
    
    // Verificar si es fin de semana o festivo
    if (dayOfWeek === 0 || dayOfWeek === 6 || holidays.includes(day)) {
        return null; // No hay servicio
    }
    
    // Buscar si hay una lonchera para hoy
    if (dailySnacks[day]) {
        return dailySnacks[day];
    }
    
    // Si no hay lonchera específica, buscar la más cercana anterior
    const availableDays = Object.keys(dailySnacks).map(Number).sort((a, b) => b - a);
    for (let availableDay of availableDays) {
        if (availableDay <= day) {
            return dailySnacks[availableDay];
        }
    }
    
    // Si no hay ninguna disponible, retornar la primera
    return dailySnacks[19] || dailySnacks[1];
}

// Función para cargar la lonchera del día
function loadDailySnack() {
    const snack = getDailySnackByDate();
    
    if (snack === null) {
        // No hay servicio hoy
        document.getElementById('snackDayImage').style.display = 'none';
        document.getElementById('snackDayName').textContent = 'El día de hoy no tendremos servicio';
        document.getElementById('snackDayDescription').textContent = 'Puede consultar el menú mensual para más información.';
    } else {
        document.getElementById('snackDayImage').style.display = 'block';
        document.getElementById('snackDayImage').src = snack.image;
        document.getElementById('snackDayName').textContent = snack.name;
        document.getElementById('snackDayDescription').textContent = snack.description;
        // Mostrar la fecha de la lonchera
        const today = new Date();
        const dayOfWeek = today.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6 && !holidays.includes(today.getDate())) {
            document.getElementById('snackCurrentDate').textContent = formatDate(today);
        }
    }
}

// Cargar datos al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    loadDailyPlate();
    loadDailySnack();
    loadMonthlyMenuLabel();
});

// Función para cargar la etiqueta del menú mensual
function loadMonthlyMenuLabel() {
    const monthlyMenuSection = document.getElementById('monthlyMenuSection');
    if (monthlyMenuSection && !document.getElementById('monthlyMenuLabel')) {
        const label = document.createElement('h2');
        label.id = 'monthlyMenuLabel';
        label.textContent = 'Almuerzos enero';
        label.style.textAlign = 'center';
        label.style.marginBottom = '20px';
        monthlyMenuSection.insertBefore(label, monthlyMenuSection.firstChild);
    }
}