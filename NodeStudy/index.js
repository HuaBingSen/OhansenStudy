let isTrue = (value, callback)  => {
  if (value === true) {
    callback(null, 'value is true')
  }
  else {
    callback(new Error('Value is false'))
  }
}
let callback = (error, value) => {
  if (error) {
    return console.log(error)
  }
  console.log(value)
}
isTrue(false, callback)