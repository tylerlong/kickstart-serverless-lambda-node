export const {{ functionName }} = (event, context, callback) => {
  console.log(process.env.MY_ENV_VAR)
  callback(null, { statusCode: 200, body: event.body, headers: event.headers })
}
