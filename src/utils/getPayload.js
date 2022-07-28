export default function (token) {
  // Obtener el token del LocalStorage
  // const token = window.localStorage.getItem('token')

  if (token) {
    // Extraer el Payload del JWT
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDYwZmY4ZTRmMmFjMDAxN2Y3NmNjMiIsInJvbGUiOiJDVVNUT01FUiIsImV4cCI6MTY1ODI4MzYwOSwiaWF0IjoxNjU4MTk3MjA5fQ.E_V0c1F0Xwm2hxJepCl0qh80wqZ1-gO1pkmhE4mkOa8

    const [header, payload, signature] = token.split('.')

    // Blindar el payload al reemplazar caracteres basura que se meten
    const base64 = payload.replace('-', '+').replace('_', '/')

    // atob convierte Base64 a String:
    // '{"id":"62733375fb365600176d7cce","role":"CUSTOMER","exp":1658448318,"iat":1658361918}'
    // JSON.parse convierte de String JSON a Objeto de JavaScript
    const PayloadObject = JSON.parse(window.atob(base64))
    return PayloadObject
  } else {
    return null
  }
}
