function randomWord(){
    var words = ["Conversión CA a CC", "Proporcionan 3,3V, 5V, 12V en vatios", "Deben ser compatibles con la placa base", "Selección compatible con CPU, RAM, adaptador de video", "Ranuras PCI en bus paralelo transmiten datos", "Tamaño del bus afecta transmisión de datos", "Nueva RAM ante bloqueos o errores", "Chip de control gestiona gran cantidad de RAM", "Lectura directa de bancos, más rápida que memoria en buffer", "Verificar energía para componentes", "Ventiladores mueven aire frío, sacan calor", "Dirección del flujo de aire es clave", "Botón encendido y luces en carcasa", "Orientación correcta de cables esencial", "Carcasa tiene botón de encendido y luces de actividad", "Tipo de conector", "Capacidad de lectura", "Capacidad de escritura", "Tipo de medio óptico", "Capas dobles en DVD y BD", "Capacidades de DVD y Blu-ray (BD)", "Buscar compartimiento vacío en el estuche", "Uso de bandejas o adaptadores para unidades más pequeñas", "Espacio entre unidades para el flujo de aire", "Montaje con lado metálico hacia arriba para disipar calor", "Consejo de instalación: Apriete ligeramente todos los tornillos antes de ajustar con destornillador", "Bahías para unidades de 5,25 pulgadas", "Retirar cubierta de plástico en instalaciones nuevas", "Instalación desde el frente de la caja", "Recomendación de apretar manualmente tornillos de montaje", "Interfaz SATA para conectar HDD, SSD y unidades ópticas", "Compatibilidad CPU-placa base: Verificar antes de comprar", "Factores velocidad CPU: Retardo y calor son limitantes", "Procesadores 64 bits: Más instrucciones y memoria", "Indicadores fallo almacenamiento interno: Ruidos, mensajes, datos corruptos", "Compatibilidad placa base: Evitar incompatibilidad", "Factores adquirir disco duro: Tipo, capacidad, calor, ruido, energía", "Dispositivos digitales: Varios tipos tarjetas", "Formatos tarjetas: SD, MicroSD, CompactFlash, etc", "Portabilidad almacenamiento externo: Facilita transferencia", "Factores clave compra: Puerto, capacidad, velocidad, energía", "Selección adecuada almacenamiento: Unidad flash o disco duro", "Tarjeta de Interfaz de Red (NIC)", "Conexión inalámbrica", "Ranuras PCI o PCIe", "Tarjetas de gráficos", "Tarjetas controladoras de almacenamiento", "Tipo de RAID", "VRAM", "Tarjetas de expansión", "Conectividad Wi-Fi", "Investigar longitud", "Instalación adecuada", "Tarjeta de interfaz de red inalámbrica (NIC)", "Tipo de socket de la CPU", "Tamaño de la caja del ordenador", "Necesidades actuales y futuras", "Soporte para múltiples formatos de tarjetas", "Leer y escribir en formatos de tarjetas", "Compatibilidad con tipos de tarjetas"];
    return words[Math.floor(Math.random() * words.length)];
}

function rain(){
    let cloud = document.querySelector('.cloud');
    let elem = document.createElement('div');
    let left = Math.floor(Math.random() * 280);
    let duration = 4 + Math.random() * 4; // Aumentar la duración
    let size = Math.random() * 1.4;
    elem.classList.add("text");
    cloud.appendChild(elem);
    elem.innerText = randomWord();
    elem.style.left = 10 + left + 'px';
    elem.style.fontSize = 0.5 + size + 'em';
    elem.style.animationDuration = duration + 's';

    setTimeout(function(){
        cloud.removeChild(elem);
    }, duration * 1000);  // Ajustar el tiempo de espera para eliminar el elemento
}

setInterval(function(){
    rain();
}, 2000);  // Espaciar más en el tiempo para que aparezcan menos palabras
