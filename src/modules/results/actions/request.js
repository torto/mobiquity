import axios from 'axios'
import {
  REQ_RESULTS_SUCESS,
  REQ_RESULTS_ERROR,
  REQ_RESULTS_LOADING
} from '../reducers/results'

const dependencies = {
  axios
}


export const getResults = (year, injection) => async dispatch => {
  const { axios } = Object.assign({}, dependencies, injection)

  const URL_WINNER = `http://ergast.com/api/f1/${year}/driverStandings/1.json`
  const URL_RESULTS = `http://ergast.com/api/f1/${year}/results/1.json`

  dispatch({
    type: REQ_RESULTS_LOADING,
    payload: {}
  })
  try {
    const {
      data: {
        MRData: {
          StandingsTable: {
            StandingsLists: [{
              DriverStandings: [{
                Driver: winner
              }]
            }]
          }
        }
      }
    } = await axios.get(URL_WINNER)
    const {
      data: {
        MRData: {
          RaceTable: {
            Races: results
          }
        }
      }
    } = await axios.get(URL_RESULTS)
    return dispatch({
      type: REQ_RESULTS_SUCESS,
      payload: {
        data: {
          winner,
          results
        }
      }
    })

  } catch(error) {
    return dispatch({
      type: REQ_RESULTS_ERROR,
      payload: {
        data: error.name
      }
    })
  }
}
