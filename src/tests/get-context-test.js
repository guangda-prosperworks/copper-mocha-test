import Copper from 'copper-sdk'
import { assert } from 'chai'

describe('getContext', function () {
  let sdk
  beforeEach(function () {
    sdk = Copper.init()
  })

  after(function () {
    sdk = null
  })

  it('should getContext', async function () {
    const { context } = await sdk.getContext()
    assert(context)
  })
})
