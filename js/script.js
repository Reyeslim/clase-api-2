// ELEMENTOS DEL DOM

// Ejercicio 1
const btnPromesa1 = document.getElementById("btnPromesa1")
const loadingPromesa1 = document.getElementById("loadingPromesa1")
const resultPromesa1 = document.getElementById("resultPromesa1")

// Ejercicio 2
const btnThen = document.getElementById("btnThen")
const loadingThen = document.getElementById("loadingThen")
const resultThen = document.getElementById("resultThen")

// Ejercicio 3
const btnAsync = document.getElementById("btnAsync")
const loadingAsync = document.getElementById("loadingAsync")
const resultAsync = document.getElementById("resultAsync")

// Ejercicio 4
const btnDogThen = document.getElementById("btnDogThen")
const loadingDogThen = document.getElementById("loadingDogThen")
const resultDogThen = document.getElementById("resultDogThen")

const btnDogAsync = document.getElementById("btnDogAsync")
const loadingDogAsync = document.getElementById("loadingDogAsync")
const resultDogAsync = document.getElementById("resultDogAsync")

// Ejercicio 5
const btnAdvice = document.getElementById("btnAdvice")
const loadingAdvice = document.getElementById("loadingAdvice")
const resultAdvice = document.getElementById("resultAdvice")

// Ejercicio 6
const btnJoke = document.getElementById("btnJoke")
const loadingJoke = document.getElementById("loadingJoke")
const resultJoke = document.getElementById("resultJoke")

// Ejercicio 7
const btnSecuencial = document.getElementById("btnSecuencial")
const loadingSecuencial = document.getElementById("loadingSecuencial")
const resultSecuencial = document.getElementById("resultSecuencial")

// Ejercicio 8
const btnParalelo = document.getElementById("btnParalelo")
const loadingParalelo = document.getElementById("loadingParalelo")
const resultParalelo = document.getElementById("resultParalelo")

// Ejercicio 9
const btnError = document.getElementById("btnError")
const loadingError = document.getElementById("loadingError")
const resultError = document.getElementById("resultError")

// Ejercicio 10
const btnRace = document.getElementById("btnRace")
const loadingRace = document.getElementById("loadingRace")
const resultRace = document.getElementById("resultRace")

// EJERCICIO 1: CREAR PROMESA BÁSICA
/**
 * Crear una promesa que se resuelve después de 2 segundos
 * - Usar new Promise(resolve, reject)
 * - Usar setTimeout para simular operación asíncrona
 * - Mostrar el mensaje en resultPromesa1
 */
function crearPromesaBasica() {
  // Mostrar loading
  loadingPromesa1.classList.remove("hidden")
  resultPromesa1.classList.add("hidden")

  const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promesa cumplida después de 2 segundos")
      console.log(miPromesa)
    }, 2000)
  })

  console.log(miPromesa)

  miPromesa.then((mensaje) => {
    loadingPromesa1.classList.add("hidden")
    resultPromesa1.innerHTML = `<h3>${mensaje}</h3>`
    resultPromesa1.classList.remove("hidden")
  })

  console.log(miPromesa)
}

btnPromesa1.addEventListener("click", crearPromesaBasica)

// EJERCICIO 2: FETCH CON .then()
/**
 * Obtener post de JSONPlaceholder usando .then() y .catch()
 * API: https://jsonplaceholder.typicode.com/posts/1
 * - Usar fetch() que retorna una promesa
 * - Encadenar .then() para response.json()
 * - Encadenar otro .then() para mostrar datos
 * - Usar .catch() para errores
 */
function obtenerPostConThen() {
  // Mostrar loading
  loadingThen.classList.remove("hidden")
  resultThen.classList.add("hidden")

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        throw Error("HTTP Error:", response.status)
        return
      }
      // console.log("Response", response)
      return response.json() // devuelve otra promesa
    })
    .then((data) => {
      // console.log("Datos", data)
      loadingThen.classList.add("hidden")
      resultThen.innerHTML = `
      <h3>POST: ${data.id}</h3>
      <h4>${data.title}</h4>
      <p>${data.body}</p>
      <small>User ID: ${data.userId}</small>
      `
      resultThen.classList.remove("hidden")
    })
    .catch((error) => {
      loadingThen.classList.add("hidden")
      resultThen.innerHTML = `<p class="error">Error: ${error.message}</p>`
      resultThen.classList.remove("hidden")
    })
}

btnThen.addEventListener("click", obtenerPostConThen)

//  EJERCICIO 3: FETCH CON async/await
/**
 * Obtener usuario de Random User usando async/await
 * API: https://randomuser.me/api/
 * - Función debe ser async
 * - Usar await para fetch
 * - Usar await para .json()
 * - try/catch para errores
 */
async function obtenerUsuarioConAsync() {
  // Mostrar loading
  loadingAsync.classList.remove("hidden")
  resultAsync.classList.add("hidden")

  try {
    const response = await fetch("https://randomuser.me/api/")
    // console.log(response)
    if (!response.ok) {
      throw new Error("Error HTPP", response.status)
    }

    const data = await response.json()
    // console.log(data)
    const user = data.results[0]
    console.log(user)

    loadingAsync.classList.add("hidden")
    resultAsync.innerHTML = `
    <div class="user-card">
      <img src="${user.picture.large}" alt="${user.name.first}" />
      <div>
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.email}</p>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    </div>
    `
    resultAsync.classList.remove("hidden")
  } catch (error) {
    loadingAsync.classList.add("hidden")
    resultAsync.innerHTML = `<p class="error">Error: ${error.message}</p>`
    resultAsync.classList.remove("hidden")
  }
}

btnAsync.addEventListener("click", obtenerUsuarioConAsync)

//  EJERCICIO 4: COMPARACIÓN DIRECTA
/**
 * Dog CEO API con .then()
 * API: https://dog.ceo/api/breeds/image/random
 */
function obtenerPerroConThen() {
  loadingDogThen.classList.remove("hidden")
  resultDogThen.classList.add("hidden")

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (!response.ok) {
        throw Error("HTTP Error:", response.status)
        return
      }
      return response.json() // devuelve otra promesa
    })
    .then((data) => {
      loadingDogThen.classList.add("hidden")
      resultDogThen.innerHTML = `<img src="${data.message}" alt="Perro random">`
      resultDogThen.classList.remove("hidden")
    })
    .catch((error) => {
      loadingDogThen.classList.add("hidden")
      resultDogThen.innerHTML = `Error: ${error.message}`
      resultDogThen.classList.remove("hidden")
    })
}

btnDogThen.addEventListener("click", obtenerPerroConThen)

/**
 * Dog CEO API con async/await
 * Misma API, diferente sintaxis
 */
async function obtenerPerroConAsync() {
  loadingDogAsync.classList.remove("hidden")
  resultDogAsync.classList.add("hidden")

  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    if (!response.ok) {
      throw Error("HTTP Error:", response.status)
    }

    const data = await response.json()
    // console.log(data)

    loadingDogAsync.classList.add("hidden")
    resultDogAsync.innerHTML = `<img src="${data.message}" alt="Perro random">`
    resultDogAsync.classList.remove("hidden")
  } catch (error) {
    loadingDogAsync.classList.add("hidden")
    resultDogAsync.innerHTML = `Error: ${error.message}`
    resultAsync.classList.remove("hidden")
  }
}

btnDogAsync.addEventListener("click", obtenerPerroConAsync)

//  EJERCICIO 5: ADVICE SLIP
/**
 * Obtener consejo aleatorio
 * API: https://api.adviceslip.com/advice
 * Usar async/await
 */
async function obtenerConsejo() {
  loadingAdvice.classList.remove("hidden")
  resultAdvice.classList.add("hidden")

  try {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()
    // console.log(data)

    loadingAdvice.classList.add("hidden")
    resultAdvice.innerHTML = `
            <h3>💡 Consejo #${data.slip.id}</h3>
            <p>"${data.slip.advice}"</p>
        `
    resultAdvice.classList.remove("hidden")
  } catch (error) {
    loadingAdvice.classList.add("hidden")
    resultAdvice.innerHTML = `<p class="error">❌ Error: ${error.message}</p>`
    resultAdvice.classList.remove("hidden")
  }
}

btnAdvice.addEventListener("click", obtenerConsejo)

//  EJERCICIO 6: JOKE API
/**
 * Obtener chiste de programación
 * API: https://v2.jokeapi.dev/joke/Programming?type=single
 * Usar .then()
 */
function obtenerChiste() {
  loadingJoke.classList.remove("hidden")
  resultJoke.classList.add("hidden")

  fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then((response) => response.json())
    .then((data) => {
      loadingJoke.classList.add("hidden")
      resultJoke.innerHTML = `
                <h3>😄 Chiste de Programación</h3>
                <p>${data.joke}</p>
            `
      resultJoke.classList.remove("hidden")
    })
    .catch((error) => {
      loadingJoke.classList.add("hidden")
      resultJoke.innerHTML = `<p class="error">❌ Error: ${error.message}</p>`
      resultJoke.classList.remove("hidden")
    })
}

btnJoke.addEventListener("click", obtenerChiste)

//  EJERCICIO 7: PROMESAS SECUENCIALES
/**
 * Obtener usuario Y luego post (una después de otra)
 * - Primero: https://jsonplaceholder.typicode.com/users/1
 * - Segundo: https://jsonplaceholder.typicode.com/posts/1
 * Mostrar ambos resultados
 */
async function obtenerSecuencial() {
  loadingSecuencial.classList.remove("hidden")
  resultSecuencial.classList.add("hidden")

  try {
    const responseUser = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    )
    const user = await responseUser.json()
    // console.log(user)
    const responsePost = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    )
    const post = await responsePost.json()
    // console.log(post)

    loadingSecuencial.classList.add("hidden")
    resultSecuencial.innerHTML = `
            <h3>Secuencial (una tras otra)</h3>
            <div style="margin-bottom: 1rem;">
                <h4>👤 Usuario:</h4>
                <p><strong>${user.name}</strong> - ${user.email}</p>
            </div>
            <div>
                <h4>📄 Post:</h4>
                <p><strong>${post.title}</strong></p>
                <p>${post.body}</p>
            </div>
        `
    resultSecuencial.classList.remove("hidden")
  } catch (error) {
    loadingSecuencial.classList.add("hidden")
    resultSecuencial.innerHTML = `<p class="error">Error: ${error.message}</p>`
    resultSecuencial.classList.remove("hidden")
  }
}

btnSecuencial.addEventListener("click", obtenerSecuencial)

//  EJERCICIO 8: PROMISE.ALL
/**
 * Obtener post Y usuario AL MISMO TIEMPO
 * Usar Promise.all([promesa1, promesa2])
 * - https://jsonplaceholder.typicode.com/posts/1
 * - https://jsonplaceholder.typicode.com/users/1
 */
async function obtenerParalelo() {
  loadingParalelo.classList.remove("hidden")
  resultParalelo.classList.add("hidden")

  try {
    const [post, user] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
        if (!res.ok) {
          throw new Error("Error HTTP")
          return
        }
        return res.json()
      }),
      fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => {
        if (!res.ok) {
          throw new Error("Error HTTP")
          return
        }
        return res.json()
      }),
    ])

    loadingParalelo.classList.add("hidden")
    resultParalelo.innerHTML = `
            <h3>⚡ Paralelo (al mismo tiempo)</h3>
            <div style="margin-bottom: 1rem;">
                <h4>👤 Usuario:</h4>
                <p><strong>${user.name}</strong> - ${user.email}</p>
            </div>
            <div>
                <h4>📄 Post:</h4>
                <p><strong>${post.title}</strong></p>
                <p>${post.body}</p>
            </div>
            <small>⏱️ Más rápido que secuencial</small>
        `
    resultParalelo.classList.remove("hidden")
  } catch (error) {
    loadingParalelo.classList.add("hidden")
    resultParalelo.innerHTML = `<p class="error">❌ Error: ${error.message}</p>`
    resultParalelo.classList.remove("hidden")
  }
}

btnParalelo.addEventListener("click", obtenerParalelo)

//  EJERCICIO 9: MANEJO DE ERRORES
/**
 * Intentar obtener recurso que NO existe
 * API: https://jsonplaceholder.typicode.com/posts/999999
 * Manejar el error 404
 */
async function provocarError() {
  loadingError.classList.remove("hidden")
  resultError.classList.add("hidden")

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/999999",
    )

    // Verificar si la respuesta es OK
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Recurso no encontrado`)
    }

    const data = await response.json()
    // console.log(data)
    resultError.innerHTML = `<p>Datos: ${JSON.stringify(data)}</p>`
  } catch (error) {
    resultError.innerHTML = `
            <h3>❌ Error Capturado</h3>
            <p class="error">${error.message}</p>
            <small>El try/catch manejó el error correctamente</small>
        `
  } finally {
    // Se ejecuta siempre, se haya rechazado o haya tenido éxito
    loadingError.classList.add("hidden")
    resultError.classList.remove("hidden")
  }
}

btnError.addEventListener("click", provocarError)

//  EJERCICIO 10: PROMISE.RACE
/**
 * Lanzar 3 peticiones, mostrar solo la más rápida
 * Usar Promise.race([p1, p2, p3])
 */
async function ejecutarRace() {
  loadingRace.classList.remove("hidden")
  resultRace.classList.add("hidden")

  try {
    const peticionGanadora = await Promise.race([
      fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
        res.json(),
      ),
      fetch("https://miapi/posts/1").then((res) => res.json()),
    ])

    loadingRace.classList.add("hidden")
    resultRace.innerHTML = `
            <h3>🏆 Promise.race() - La más rápida ganó</h3>
            <p><strong>Primera en terminar:</strong></p>
            <pre>${JSON.stringify(peticionGanadora, null, 2)}</pre>
            <small>⚡ Solo muestra la primera promesa que se resuelve</small>
    `
    resultRace.classList.remove("hidden")
  } catch (error) {
    loadingRace.classList.add("hidden")
    resultRace.innerHTML = `<p class="error">Error: ${error.message}</p>`
    resultRace.classList.remove("hidden")
  }
}

btnRace.addEventListener("click", ejecutarRace)
