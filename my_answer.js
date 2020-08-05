const _ = require('lodash')

function my_reverse(input, preValue = []) {
  if (_.includes(['number', 'string'], typeof input)) {
    preValue.unshift(input)
    return [preValue]
  }

  let out = []
  _.keys(input).forEach(key => {
    const value = input[key]
    if (_.isArray(value) || _.isFunction(value) || _.isBoolean(value)) {
      throw new Error('輸入格式錯誤！請以Object {}, Number or String為主')
    }
    out.push(...my_reverse(input[key], [key, ...preValue]))
  })

  return out
}

function my_sort(input) {
  if (!_.isObject(input) || _.isArray(input)) {
    throw new Error('類型必須為Object {}')
  }

  return _.reduce(my_reverse(input), (out, result) => {
    let temp = {}
    _.reverse(result).forEach((value, idx) => {
      if (idx === 0) {
        temp = value
        return
      }
      temp = { [value]: temp }
    })

    return _.merge(out, temp)
  }, {})
}

module.exports = my_sort