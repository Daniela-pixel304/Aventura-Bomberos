let bomberaSeleccionada = "";
let puntos = 0;
let energia = 100;
let nivel = 1;

function mostrarPersonajes() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("personajes").style.display = "block";
}
function elegirBombera(nombre) {

    bomberaSeleccionada = nombre;
    puntos = 0;
    energia = 100;
    nivel = 1;

    document.getElementById("personajes").style.display = "none";
    document.getElementById("mision").style.display = "block";

    document.getElementById("nombreBombera").innerText =
        nombre.toUpperCase();

    if (nombre === "Valentina") {
        document.getElementById("especialidadBombera").innerText =
            "🔥 Especialista en Extinción";
        document.getElementById("avatarBombera").innerText =
            "🔥🦸‍♀️";
    }

    if (nombre === "Sofía") {
        document.getElementById("especialidadBombera").innerText =
            "🧗‍♀️ Especialista en Rescate";
        document.getElementById("avatarBombera").innerText =
            "🧗‍♀️";
    }

    if (nombre === "Camila") {
        document.getElementById("especialidadBombera").innerText =
            "☣️ Especialista en Materiales Peligrosos";
        document.getElementById("avatarBombera").innerText =
            "☣️🦸‍♀️";
    }

    if (nombre === "Daniela") {
        document.getElementById("especialidadBombera").innerText =
            "🚑 Especialista en Atención Prehospitalaria";
        document.getElementById("avatarBombera").innerText =
            "🚑🦸‍♀️";
    }

    actualizarEstadisticas();
}
function actualizarEstadisticas() {

    document.getElementById("nivelBombera").innerText = nivel;

    document.getElementById("energiaBombera").innerText =
        energia;

    document.getElementById("puntosBombera").innerText =
        puntos;
}
function respuestaCorrecta() {

    puntos += 100;

    actualizarEstadisticas();

    alert(
        "🟢 ¡DECISIÓN CORRECTA!\n\n" +
        "+100 puntos ⭐\n\n" +
        "Has demostrado una adecuada toma de decisiones."
    );

    nivel = 2;

    actualizarEstadisticas();

    siguienteNivel();
}

function respuestaIncorrecta() {

    energia -= 20;

    actualizarEstadisticas();

    alert(
        "🔴 DECISIÓN INCORRECTA\n\n" +
        "-20 de energía ❤️\n\n" +
        "Una intervención sin evaluación puede poner " +
        "en riesgo al personal, las víctimas y los recursos."
    );

    if (energia <= 0) {
        gameOver();
    }
}

function siguienteNivel() {

    document.getElementById("mision").innerHTML = `

        <div class="perfil-bombera">

            <div class="avatar-bombera">
                🦸‍♀️
            </div>

            <h1>${bomberaSeleccionada.toUpperCase()}</h1>

            <h2>🎓 NIVEL 2: FORMACIÓN</h2>

            <div class="estadisticas">

                <div class="estadistica">
                    ⭐
                    <strong>NIVEL</strong>
                    <span>${nivel}</span>
                </div>

                <div class="estadistica">
                    ❤️
                    <strong>ENERGÍA</strong>
                    <span>${energia}</span>
                </div>

                <div class="estadistica">
                    🏅
                    <strong>PUNTOS</strong>
                    <span>${puntos}</span>
                </div>

            </div>

        </div>


        <div class="mision-card">

            <span class="etiqueta">
                🎓 MISIÓN 2
            </span>

            <h2>
                FORMACIÓN Y ENTRENAMIENTO
            </h2>

            <p>
                Ya superaste la primera etapa.
                Ahora debes demostrar que estás preparada
                para actuar de manera segura y coordinada.
            </p>

            <h3>
                🚒 ¿Por qué son importantes la capacitación
                y el entrenamiento de una bombera?
            </h3>

            <button onclick="formacionCorrecta()">
                🧠 Desarrollar conocimientos,
                habilidades y competencias
            </button>

            <button onclick="formacionIncorrecta()">
                🎖️ Obtener automáticamente un rango
            </button>

            <button onclick="formacionIncorrecta()">
                🚒 Recibir un vehículo personal
            </button>

        </div>

    `;
}
function formacionCorrecta() {

    puntos += 100;

    nivel = 3;

    actualizarEstadisticas();

    alert(
        "🟢 ¡CORRECTO!\n\n" +
        "+100 puntos ⭐\n\n" +
        "La capacitación y el entrenamiento permiten " +
        "desarrollar las competencias necesarias para " +
        "una respuesta segura y eficaz."
    );

    nivelOperativo();
}
function formacionIncorrecta() {

    energia -= 20;

    actualizarEstadisticas();

    alert(
        "🔴 RESPUESTA INCORRECTA\n\n" +
        "-20 de energía ❤️\n\n" +
        "La formación tiene como finalidad preparar " +
        "al personal para desempeñar sus funciones " +
        "de manera segura y competente."
    );

    if (energia <= 0) {
        gameOver();
    }
}
function nivelOperativo() {

    document.getElementById("mision").innerHTML = `

        <div class="perfil-bombera">

            <div class="avatar-bombera">
                🚒🦸‍♀️
            </div>

            <h1>${bomberaSeleccionada.toUpperCase()}</h1>

            <h2>🚒 NIVEL 3: MODELO OPERATIVO</h2>

            <div class="estadisticas">

                <div class="estadistica">
                    ⭐
                    <strong>NIVEL</strong>
                    <span>${nivel}</span>
                </div>

                <div class="estadistica">
                    ❤️
                    <strong>ENERGÍA</strong>
                    <span>${energia}</span>
                </div>

                <div class="estadistica">
                    🏅
                    <strong>PUNTOS</strong>
                    <span>${puntos}</span>
                </div>

            </div>

        </div>


        <div class="mision-card">

            <span class="etiqueta">
                🚒 MISIÓN 3
            </span>

            <h2>
                MODELO OPERATIVO
            </h2>

            <p>
                Una emergencia requiere organización,
                coordinación, recursos y procedimientos.
                Como bombera debes comprender cómo funciona
                la respuesta operativa.
            </p>

            <h3>
                🚨 ¿Qué permite una adecuada capacidad operativa?
            </h3>

            <button onclick="operativoCorrecto()">
                👩‍🚒 Personal capacitado +
                equipos +
                procedimientos +
                coordinación
            </button>

            <button onclick="operativoIncorrecto()">
                🔥 Actuar individualmente
            </button>

            <button onclick="operativoIncorrecto()">
                🚨 Improvisar durante toda la emergencia
            </button>

        </div>

    `;
}
function operativoCorrecto() {

    puntos += 150;

    nivel = 4;

    actualizarEstadisticas();

    alert(
        "🟢 ¡EXCELENTE!\n\n" +
        "+150 puntos ⭐\n\n" +
        "La capacidad operativa requiere integrar " +
        "personal, equipos, procedimientos y coordinación."
    );

    nivelFinanciamiento();
}
function operativoIncorrecto() {

    energia -= 25;

    actualizarEstadisticas();

    alert(
        "🔴 DECISIÓN INCORRECTA\n\n" +
        "-25 de energía ❤️\n\n" +
        "La respuesta ante emergencias requiere " +
        "organización, coordinación y procedimientos."
    );

    if (energia <= 0) {
        gameOver();
    }
}
function nivelFinanciamiento() {

    document.getElementById("mision").innerHTML = `

        <div class="perfil-bombera">

            <div class="avatar-bombera">
                💰🦸‍♀️
            </div>

            <h1>${bomberaSeleccionada.toUpperCase()}</h1>

            <h2>💰 NIVEL 4: RECURSOS Y FINANCIAMIENTO</h2>

            <div class="estadisticas">

                <div class="estadistica">
                    ⭐
                    <strong>NIVEL</strong>
                    <span>${nivel}</span>
                </div>

                <div class="estadistica">
                    ❤️
                    <strong>ENERGÍA</strong>
                    <span>${energia}</span>
                </div>

                <div class="estadistica">
                    🏅
                    <strong>PUNTOS</strong>
                    <span>${puntos}</span>
                </div>

            </div>

        </div>


        <div class="mision-card">

            <span class="etiqueta">
                💰 MISIÓN 4
            </span>

            <h2>
                ¿CÓMO SE FINANCIA LA ACTIVIDAD BOMBERIL?
            </h2>

            <p>
                Los recursos permiten fortalecer la capacitación,
                infraestructura, equipamiento y capacidad de respuesta
                de los cuerpos de bomberos.
            </p>

            <h3>
                🚒 ¿Cuál es una fuente de recursos
                del Fondo Nacional de Bomberos?
            </h3>

            <button onclick="financiamientoCorrecto()">
                🏦 Aportes establecidos por la Ley,
                recursos del presupuesto nacional
                y otras contribuciones permitidas
            </button>

            <button onclick="financiamientoIncorrecto()">
                🎟️ Cobrar a los ciudadanos cada vez
                que atienden una emergencia
            </button>

            <button onclick="financiamientoIncorrecto()">
                💵 Cobrar obligatoriamente a cada víctima
                por el rescate
            </button>

        </div>

    `;
}
function financiamientoCorrecto() {

    puntos += 150;

    nivel = 5;

    actualizarEstadisticas();

    alert(
        "🟢 ¡CORRECTO!\n\n" +
        "+150 puntos ⭐\n\n" +
        "Los recursos permiten fortalecer la capacitación, " +
        "infraestructura, equipamiento y capacidad operativa " +
        "de los cuerpos de bomberos."
    );

    misionFinal();
}
function financiamientoIncorrecto() {

    energia -= 25;

    actualizarEstadisticas();

    alert(
        "🔴 RESPUESTA INCORRECTA\n\n" +
        "-25 de energía ❤️\n\n" +
        "Los servicios de emergencia de los cuerpos " +
        "de bomberos no se cobran directamente a la ciudadanía."
    );

    if (energia <= 0) {
        gameOver();
    }
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
function respuestaIncorrecta() {

    energia -= 20;

    actualizarEstadisticas();

    alert(
        "🔴 DECISIÓN INCORRECTA\n\n" +
        "-20 de energía ❤️\n\n" +
        "Una intervención sin evaluación puede poner " +
        "en riesgo al personal, las víctimas y los recursos."
    );

    if (energia <= 0) {
        gameOver();
    }
}
