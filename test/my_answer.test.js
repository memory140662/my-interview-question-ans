const assert = require('assert')
const my_answer = require('../my_answer')

const INPUT_VALUE = {
  hired: {
    be: {
      to: {
        deserve: 'I'
      }
    }
  }
}

const INPUT_VALUE_TWO = {
  hired: {
    be: {
      to: {
        deserve: 'I'
      },
      test: 1
    }
  }
}

const ERROR_INPUT_VALUE = {
  hired: {
    be: {
      to: [ 'deserve', 'I' ]
    }
  }
}

const OUTPUT_VALUE = {
  I: {
    deserve: {
      to: {
         be: 'hired'
      }
    }
  }
}

const OUTPUT_VALUE_TWO = {
  1: {
    test: {
      be: 'hired'
    },
  },
  I: {
    deserve: {
      to: {
         be: 'hired'
      }
    }
  }
}

const ERROR_OUTPUT_VALUE = {
  I: {
    deserve: {
      to: {
         be: 'error'
      }
    }
  }
}

describe('答應測試', () => {

  it('測試結果是否一致', () => {
    const result = my_answer(INPUT_VALUE)
    assert.deepEqual(result, OUTPUT_VALUE)
  })

  it('測試是否支持多重結構且結果是否一致', () => {
    const result = my_answer(INPUT_VALUE_TWO)
    assert.deepEqual(result, OUTPUT_VALUE_TWO)
  })


  it('測試結果是否不一致', () => {
    const result = my_answer(INPUT_VALUE)
    assert.notDeepEqual(result, ERROR_OUTPUT_VALUE)
  })

  it('測試輸入不為Object {} 是否拋錯', () => {
    try {
      my_answer(null)
    } catch(e) {
      return assert.ok(true)
    }
    assert.ok(false, '輸入為Object {} 測試失敗。')
  })

  it ('測試輸入格式不正確時是否拋錯', () => {
    try {
      my_answer(ERROR_INPUT_VALUE)
    } catch(e) {
      return assert.ok(true)
    }
    assert.ok(false)
  })
})