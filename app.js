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

        <div class="perfil-bombera">

            <div class="avatar-bombera">
                🚨🦸‍♀️
            </div>

            <h1>${bomberaSeleccionada.toUpperCase()}</h1>

            <h2>🔥 MISIÓN FINAL</h2>

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
                🚨 EMERGENCIA REAL
            </span>

            <h2>
                INCENDIO ESTRUCTURAL
            </h2>

            <p>
                Son las 10:32. Se recibe una alerta por
                incendio en una edificación de tres pisos.
            </p>

            <p>
                🔥 Hay humo visible.<br>
                🏢 Hay personas dentro del edificio.<br>
                ⚠️ Se desconocen inicialmente todos los riesgos.
            </p>

            <h3>
                🔎 ¿Cuál es tu primera acción?
            </h3>

            <button onclick="decisionEscenaCorrecta()">
                🔎 Evaluar la escena, identificar riesgos
                y establecer una estrategia
            </button>

            <button onclick="decisionEscenaIncorrecta()">
                🔥 Entrar inmediatamente al edificio
            </button>

        </div>

    `;
}
function decisionEscenaCorrecta() {

    puntos += 100;

    actualizarEstadisticas();

    document.getElementById("mision").innerHTML = `

        <div class="mision-card">

            <span class="etiqueta">
                ✅ DECISIÓN CORRECTA
            </span>

            <h2>
                🧯 PREPARACIÓN PARA LA INTERVENCIÓN
            </h2>

            <p>
                Has evaluado el escenario.
                Ahora debes prepararte para intervenir.
            </p>

            <h3>
                ¿Qué debes hacer antes de ingresar?
            </h3>

            <button onclick="eppCorrecto()">
                🧯 Utilizar el EPP correspondiente
                y verificar las condiciones de seguridad
            </button>

            <button onclick="eppIncorrecto()">
                🏃‍♀️ Entrar rápidamente sin equipamiento
            </button>

        </div>

    `;
}
function decisionEscenaIncorrecta() {

    energia -= 25;

    actualizarEstadisticas();

    alert(
        "🔴 DECISIÓN INCORRECTA\n\n" +
        "-25 de energía ❤️\n\n" +
        "La evaluación de la escena permite identificar " +
        "riesgos y establecer una respuesta segura."
    );

    if (energia <= 0) {
        gameOver();
    }
}
function eppCorrecto() {

    puntos += 100;

    actualizarEstadisticas();

    document.getElementById("mision").innerHTML = `

        <div class="mision-card">

            <span class="etiqueta">
                🧯 SEGURIDAD
            </span>

            <h2>
                📢 COORDINACIÓN DE LA OPERACIÓN
            </h2>

            <p>
                El equipo está preparado.
                Ahora debes coordinar la respuesta.
            </p>

            <h3>
                ¿Qué acción favorece una respuesta organizada?
            </h3>

            <button onclick="coordinacionCorrecta()">
                📢 Mantener comunicación y coordinación
                con el equipo
            </button>

            <button onclick="coordinacionIncorrecta()">
                🏃‍♀️ Actuar de manera independiente
            </button>

        </div>

    `;
}
function eppIncorrecto() {

    energia -= 25;

    actualizarEstadisticas();

    alert(
        "🔴 DECISIÓN INCORRECTA\n\n" +
        "-25 de energía ❤️\n\n" +
        "El uso adecuado de los elementos de protección " +
        "es fundamental para reducir la exposición a riesgos."
    );

    if (energia <= 0) {
        gameOver();
    }
}
function coordinacionCorrecta() {

    puntos += 100;

    actualizarEstadisticas();

    document.getElementById("mision").innerHTML = `

        <div class="mision-card">

            <span class="etiqueta">
                📢 COORDINACIÓN
            </span>

            <h2>
                🧑‍🚒 RESCATE
            </h2>

            <p>
                Se informa que una persona podría estar
                atrapada en el segundo piso.
            </p>

            <h3>
                ¿Cuál debe ser el enfoque de la intervención?
            </h3>

            <button onclick="rescateCorrecto()">
                🧑‍🚒 Priorizar la vida, evaluar el riesgo
                y realizar el rescate de forma segura
            </button>

            <button onclick="rescateIncorrecto()">
                🔥 Ignorar a la víctima y concentrarse
                únicamente en el fuego
            </button>

        </div>

    `;
}
function coordinacionIncorrecta() {

    energia -= 25;

    actualizarEstadisticas();

    alert(
        "🔴 DECISIÓN INCORRECTA\n\n" +
        "-25 de energía ❤️\n\n" +
        "Una emergencia requiere coordinación y comunicación " +
        "entre quienes participan en la respuesta."
    );

    if (energia <= 0) {
        gameOver();
    }
}
function rescateCorrecto() {

    puntos += 150;

    actualizarEstadisticas();

    resultadoFinal();

}
function rescateIncorrecto() {

    energia -= 30;

    actualizarEstadisticas();

    alert(
        "🔴 DECISIÓN INCORRECTA\n\n" +
        "-30 de energía ❤️\n\n" +
        "La protección de la vida es una prioridad " +
        "en la respuesta a emergencias."
    );

    if (energia <= 0) {
        gameOver();
    }
}
function resultadoFinal() {

    let rango = "";

    if (puntos >= 800) {
        rango = "🏆 BOMBERA ÉLITE";
    } else if (puntos >= 600) {
        rango = "🥇 BOMBERA OPERATIVA";
    } else {
        rango = "🥉 BOMBERA EN FORMACIÓN";
    }

    document.getElementById("mision").innerHTML = `

        <div class="mision-card">

            <h1>🏆 MISIÓN COMPLETADA</h1>

            <div class="avatar-bombera">
                🦸‍♀️🚒
            </div>

            <h2>
                ${bomberaSeleccionada.toUpperCase()}
            </h2>

            <h2>
                ${rango}
            </h2>

            <p>
                Has completado la operación demostrando
                conocimientos sobre incorporación,
                formación, modelo operativo,
                financiamiento y respuesta ante emergencias.
            </p>

            <div class="estadisticas">

                <div class="estadistica">
                    ⭐
                    <strong>PUNTOS</strong>
                    <span>${puntos}</span>
                </div>

                <div class="estadistica">
                    ❤️
                    <strong>ENERGÍA</strong>
                    <span>${energia}</span>
                </div>

                <div class="estadistica">
                    🏅
                    <strong>NIVEL</strong>
                    <span>${nivel}</span>
                </div>

            </div>

            <h2>
                🚒 ¡MISIÓN COMPLETADA!
            </h2>

            <p>
                La emergencia dura minutos.
                La preparación comienza mucho antes.
            </p>

            <button onclick="location.reload()">
                🔄 NUEVA MISIÓN
            </button>

        </div>

    `;
}
