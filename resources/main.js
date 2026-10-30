const btnPlay1 = document.getElementById('btn-play1');
const btnPause1 = document.getElementById('btn-pause1');
const reproductor1 = document.getElementById('reproductor1');

const btnPlay2 = document.getElementById('btn-play2');
const btnPause2 = document.getElementById('btn-pause2');
const reproductor2 = document.getElementById('reproductor2');

const btnPlay3 = document.getElementById('btn-play3');
const btnPause3 = document.getElementById('btn-pause3');
const reproductor3 = document.getElementById('reproductor3');

const btnPlay4 = document.getElementById('btn-play4');
const btnPause4 = document.getElementById('btn-pause4');
const reproductor4 = document.getElementById('reproductor4');

const btnPlay5 = document.getElementById('btn-play5');
const btnPause5 = document.getElementById('btn-pause5');
const reproductor5 = document.getElementById('reproductor5');

const btnPlay6 = document.getElementById('btn-play6');
const btnPause6 = document.getElementById('btn-pause6');
const reproductor6 = document.getElementById('reproductor6');

const btnPlay7 = document.getElementById('btn-play7');
const btnPause7 = document.getElementById('btn-pause7');
const reproductor7 = document.getElementById('reproductor7');

const btnPlay8 = document.getElementById('btn-play8');
const btnPause8 = document.getElementById('btn-pause8');
const reproductor8 = document.getElementById('reproductor8');

const btnPlay9 = document.getElementById('btn-play9');
const btnPause9 = document.getElementById('btn-pause9');
const reproductor9 = document.getElementById('reproductor9');

const btnPlay10 = document.getElementById('btn-play10');
const btnPause10 = document.getElementById('btn-pause10');
const reproductor10 = document.getElementById('reproductor10');

// ==========================================
// 2. Función para pausar todas las canciones
// ==========================================
function pausarTodos() {
    reproductor1.pause();
    reproductor2.pause();
    reproductor3.pause();
    reproductor4.pause();
    reproductor5.pause();
    reproductor6.pause();
    reproductor7.pause();
    reproductor8.pause(); // Agregada
    reproductor9.pause(); // Agregada
    reproductor10.pause(); // Agregada
}

// ==========================================
// 3. Asignar los clics a cada botón manualmente
// ==========================================

btnPlay1.onclick = function() { pausarTodos(); reproductor1.play(); };
btnPause1.onclick = function() { reproductor1.pause(); };

btnPlay2.onclick = function() { pausarTodos(); reproductor2.play(); };
btnPause2.onclick = function() { reproductor2.pause(); };

btnPlay3.onclick = function() { pausarTodos(); reproductor3.play(); };
btnPause3.onclick = function() { reproductor3.pause(); };

btnPlay4.onclick = function() { pausarTodos(); reproductor4.play(); };
btnPause4.onclick = function() { reproductor4.pause(); };

btnPlay5.onclick = function() { pausarTodos(); reproductor5.play(); };
btnPause5.onclick = function() { reproductor5.pause(); };

btnPlay6.onclick = function() { pausarTodos(); reproductor6.play(); };
btnPause6.onclick = function() { reproductor6.pause(); };

btnPlay7.onclick = function() { pausarTodos(); reproductor7.play(); };
btnPause7.onclick = function() { reproductor7.pause(); };

// Eventos de las nuevas canciones
btnPlay8.onclick = function() { pausarTodos(); reproductor8.play(); };
btnPause8.onclick = function() { reproductor8.pause(); };

btnPlay9.onclick = function() { pausarTodos(); reproductor9.play(); };
btnPause9.onclick = function() { reproductor9.pause(); };

btnPlay10.onclick = function() { pausarTodos(); reproductor10.play(); };
btnPause10.onclick = function() { reproductor10.pause(); };