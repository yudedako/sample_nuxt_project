export default function ({ $axios }) {
  $axios.onRequest( (config) => {
    if (config.url.indexOf('api.github.com') + 1) {
      config.headers.Authorization = '2da3ab6b1b247cd91598273c337e4eade2b72d3f'
    }
  })
}
