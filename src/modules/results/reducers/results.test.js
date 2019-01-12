import { expect } from 'chai'

const results = require('./results')

describe('Results Reducer', () => {
  it('execute success', () => {
    const values = {
      type: 'result/RESULTS_SUCESS',
      payload: {
        data: ['1','2']
      }
    }

    const valuesReturn = {
      data: values.payload.data,
      loading: false,
      error: null
    }
    expect(results.default (undefined, values)).to.be.deep.equal(valuesReturn)
  })

  it('execute error', async () => {
    const values = {
      type: 'result/RESULTS_ERROR',
      payload: {
        data: ['1','2']
      }
    }

    const valuesReturn = {
      error: values.payload.data,
      loading: false,
    }
    expect(results.default (null, values)).to.be.deep.equal(valuesReturn)
  })

  it('execute loading', async () => {
    const values = {
      type: 'result/RESULTS_LOADING'
    }

    const valuesReturn = {
      error: null,
      data: [],
      loading: true
    }
    expect(results.default (null, values)).to.be.deep.equal(valuesReturn)
  })

  it('execute default', async () => {
    const values = {
      type: 'default',
    }
    expect(results.default ({}, values)).to.be.deep.equal({})
  })
})
