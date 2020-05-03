export default function ({ $axios, redirect }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    mode: 'no-cors',
    headers: {
      common: {
        'x-api-key': process.env.TAFELHILFE_API_KEY
      }
    }
  })

  // Set baseURL to something different
  api.setBaseURL('https://api.tafelhilfe.de')
  //api.setBaseURL('http://localhost:5000/dev')
  // Inject to context as $api
  inject('api', api)
}
