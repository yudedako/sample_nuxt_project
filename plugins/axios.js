export default function ({ $axios }) {
  $axios.onRequest( (config) => {
    if (config.url.indexOf('api.github.com') + 1) {
      config.headers.Authorization = 'token 07833524a6cef16dcde9f670413f8897c3027d7a'
    }
  })
}
