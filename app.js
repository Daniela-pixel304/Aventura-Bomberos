let bomberaSeleccionada = "";
let puntos = 0;

function mostrarPersonajes() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("personajes").style.display = "block";
}

function elegirBombera(nombre) {
    bomberaSeleccionada = nombre;

    document.getElementById("personajes").style.display = "none";
    document.getElementById("mision").style.display = "block";

    document.getElementById("nombreBombera").innerText =
        "🦸‍♀️ Bombera " + nombre + ", tu misión comienza.";
}

function respuestaCorrecta() {

    puntos += 100;

    alert(
        "🟢 ¡DECISIÓN CORRECTA!\n\n" +
        "Has ganado +100 puntos.\n\n" +
        "Antes de intervenir se debe evaluar el escenario, " +
        "identificar los riesgos y determinar los recursos necesarios."
    );

    siguienteNivel();
}

function respuestaIncorrecta() {

    alert(
        "🔴 DECISIÓN INCORRECTA\n\n" +
        "Entrar sin evaluar los riesgos puede poner en peligro " +
        "a la bombera, a las víctimas y al equipo de respuesta."
    );
}

function siguienteNivel() {

    document.getElementById("mision").innerHTML = `

        <h1>🎓 NIVEL 2: FORMACIÓN</h1>

        <h2>Bombera ${bomberaSeleccionada}</h2>

        <p>
            Antes de asumir funciones operativas,
            una bombera necesita formación y entrenamiento.
        </p>

        <h2>¿Qué permite principalmente el entrenamiento?</h2>

        <button onclick="formacionCorrecta()">
            🧠 Desarrollar conocimientos y habilidades
        </button>

        <button onclick="formacionIncorrecta()">
            🎖️ Recibir automáticamente el rango de bombera
        </button>

        <button onclick="formacionIncorrecta()">
            🚒 Obtener un vehículo personal
        </button>

    `;
}

function formacionCorrecta() {

    puntos += 100;

    alert(
        "🟢 ¡CORRECTO!\n\n" +
        "+100 puntos.\n\n" +
        "La formación y el entrenamiento permiten desarrollar " +
        "las competencias necesarias para una respuesta segura."
    );

    nivelRecursos();
}

function formacionIncorrecta() {

    alert(
        "🔴 INCORRECTO\n\n" +
        "La formación busca desarrollar conocimientos, " +
        "habilidades y competencias para la actividad bomberil."
    );
}

function nivelRecursos() {

    document.getElementById("mision").innerHTML = `

        <h1>🚒 NIVEL 3: CAPACIDAD OPERATIVA</h1>

        <h2>La estación necesita recursos.</h2>

        <p>
            Para responder a una emergencia no basta con tener
            personal. También se necesitan equipos, vehículos,
            comunicaciones, mantenimiento y capacitación.
        </p>

        <h2>¿Cuál de estos elementos contribuye a mantener
        la capacidad operativa?</h2>

        <button onclick="recursosCorrectos()">
            🧯 Equipos y EPP
        </button>

        <button onclick="recursosCorrectos()">
            🚒 Vehículos y mantenimiento
        </button>

        <button onclick="recursosCorrectos()">
            📡 Comunicaciones y capacitación
        </button>

        <button onclick="recursosCorrectos()">
            ✅ Todos los anteriores
        </button>

    `;
}

function recursosCorrectos() {

    puntos += 100;

    alert(
        "🟢 ¡CORRECTO!\n\n" +
        "+100 puntos.\n\n" +
        "La capacidad operativa depende de la integración " +
        "del talento humano, los recursos técnicos y los procedimientos."
    );

    misionFinal();
}

function misionFinal() {

    document.getElementById("mision").innerHTML = `

        <h1>🔥 MISIÓN FINAL</h1>

        <h2>🚨 Emergencia en curso</h2>

        <p>
            Se reporta un incendio en una edificación.
            Hay una posible persona atrapada.
        </p>

        <h2>
            ¿Cuál debe ser tu prioridad?
        </h2>

        <button onclick="finalCorrecto()">
            🧑‍🚒 Proteger la vida y actuar de forma segura
        </button>

        <button onclick="finalIncorrecto()">
            🔥 Entrar inmediatamente sin evaluar
        </button>

        <button onclick="finalIncorrecto()">
            🏃‍♀️ Actuar sin coordinación
        </button>

    `;
}

function finalCorrecto() {

    puntos += 200;

    document.getElementById("mision").innerHTML = `

        <h1>🏆 ¡MISIÓN COMPLETADA!</h1>

        <h2>🦸‍♀️ Bombera ${bomberaSeleccionada}</h2>

        <p>
            Has completado la operación y demostrado
            conocimientos sobre incorporación, formación,
            capacidad operativa y toma de decisiones.
        </p>

        <h1>⭐ ${puntos} PUNTOS</h1>

        <h2>🚒 ¡Excelente trabajo!</h2>

        <p>
            La emergencia dura minutos.
            La preparación comienza mucho antes.
        </p>

    `;
}

function finalIncorrecto() {

    alert(
        "🔴 MISIÓN FALLIDA\n\n" +
        "Una respuesta segura requiere evaluación, " +
        "coordinación y cumplimiento de procedimientos."
    );
}
