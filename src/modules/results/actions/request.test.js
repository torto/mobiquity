import { expect } from 'chai'
import { stub } from 'sinon'

const { getResults } = require('./request')

describe('Request Action', () => {
  it('execute success', async () => {
    const URL_WINNER = 'http://ergast.com/api/f1/2010/driverStandings/1.json'
    const URL_RESULTS = 'http://ergast.com/api/f1/2010/results/1.json'

    const winnerReturn = {
      data: {
        MRData: {
          StandingsTable: {
            StandingsLists: [{
              DriverStandings: [{
                Driver: {
                  name: 'torto'
                }
              }],
            }],
          },
        },
      }
    }

    const resultsReturn = {
      data: {
        MRData: {
          RaceTable: {
            Races:[{
              name: 'torto'
            }]
          },
        },
      }
    }
    const get = stub()
    get.withArgs(URL_WINNER).resolves(winnerReturn)
    get.withArgs(URL_RESULTS).resolves(resultsReturn)

    const axios = {
      get
    }

    const dispatch = stub()
    dispatch.withArgs({
      type: 'result/RESULTS_LOADING',
      payload: {}
    })
    const returnDispatch = 'returnDispatch'
    dispatch.withArgs({
      type: 'result/RESULTS_SUCESS',
      payload: {
        data: {
          winner: {
            name: 'torto'
          },
          results: [{
            name: 'torto'
          }]
        }
      }
    }).returns(returnDispatch)
    expect(await getResults('2010', {axios})(dispatch)).to.be.deep.equal(returnDispatch)
  })

  it('execute error', async () => {
    const URL_WINNER = 'http://ergast.com/api/f1/2010/driverStandings/1.json'

    const get = stub()
    get.withArgs(URL_WINNER).throws({name: 'Error get'})

    const axios = {
      get
    }

    const dispatch = stub()
    dispatch.withArgs({
      type: 'result/RESULTS_LOADING',
      payload: {}
    })
    const returnError = 'return error'
    dispatch.withArgs({
      type: 'result/RESULTS_ERROR',
      payload: {
        data: 'Error get'
      }
    }).returns(returnError)
    expect(await getResults('2010', {axios})(dispatch)).to.be.deep.equal(returnError)
  })
})
