
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { Ai4callSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = Ai4callSDK.test()
    equal(testsdk instanceof Ai4callSDK, true,
      'Ai4callSDK.test() must return a client synchronously')
  })

})
