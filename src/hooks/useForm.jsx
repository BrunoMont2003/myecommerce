// REGLAS PARA CREAR UN HOOK
// Custom Hook es una función que utiliza otros hooks de React.
// 1. Siempre debemos usar la palabra "use" al nombrarlo, ej: useForm
// 2. Siempre deben de ser funciones (A partir de React v16 usamos Hooks)
// 3. Siempre debo usar algún hook de React (useState, useEffect, useRef, etc.)
// 4. Deben de ser reutilizables, no para casos muy especificos.

import { useState, useEffect } from 'react'

// callback: función que se va a encargar de procesar el envio del form
// defaults: valores por defecto del formulario
function useForm (callback, defaults) {
  const [input, setInput] = useState(defaults) // Guardo los valores del formulario

  // Cargar los valores por defecto
  useEffect(() => {
    setInput({ ...defaults }) // spread operator
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    // Equivalente a:
    // const name = event.target.name
    // const value = event.target.value
    setInput({ ...input, [name]: value }) // actualizo la data
  }

  const handleSubmit = (event) => {
    event.preventDefault() // Esto hace que no se recargue la página
    callback(input)
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
