// Verificar si el navegador soporta notificaciones
if ('Notification' in window && 'serviceWorker' in navigator) {
    // Pedir permiso para las notificaciones
    document.getElementById('notifyButton').addEventListener('click', function() {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                // Registrar un Service Worker para la PWA
                navigator.serviceWorker.register('sw.js');

                // Mostrar una notificación cada 2 horas
                setInterval(() => {
                    new Notification('¡Es hora de tomar agua, Emily! 💧');
                }, 1000 * 60 * 60 * 2); // Cada 2 horas
            }
        });
    });
} else {
    alert('Tu navegador no soporta notificaciones o PWA.');
}
