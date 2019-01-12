import React from 'react'
import { expect } from 'chai'
import { mock } from 'sinon'
import { mount } from 'enzyme'
import { ResultsComponent, styles, mapStateToProps, mapDispatchToProps } from './index'

describe('Results Component', () => {
  const data = {
    data:{
      winner: {
        givenName: 'Torto',
        familyName: 'Berghauser',
        driverId: 1
      },
      results: [
        {
          season: '2010',
          round: '1',
          raceName: 'Brazil Grand Prix',
          date: '2010-11-25',
          Circuit: {
            circuitName: 'Interlagos'
          },
          Results: [{
            Driver: {
              driverId: 1,
              givenName: 'Torto',
              familyName: 'Berghauser'
            }
          }]
        },
        {
          season: '2010',
          round: '2',
          raceName: 'Brazil Grand Prix',
          date: '2010-11-25',
          Circuit: {
            circuitName: 'Interlagos'
          },
          Results: [{
            Driver: {
              driverId: 2,
              givenName: 'Torto',
              familyName: 'Berghauser'
            }
          }]
        }
      ]
    }
  }
  const classes = {
    root: {}
  }
  const match = {
    params: {
      year: '2010'
    }
  }
  const history= {
    push: () => {}
  }

  it('load with data - CardWinner and ListResult', () => {
    const getResults = mock('getResults').withArgs('2010')
    const wrapper = mount(<ResultsComponent
      classes={classes}
      match={match}
      results={data}
      history={history}
      getResults={getResults}
    />)
    const cardWinner = wrapper.find('WithStyles(CardWinnerComponent)')
    const listResult = wrapper.find('WithStyles(ListResultsComponent)')
    expect(cardWinner).to.have.lengthOf(1)
    expect(listResult).to.have.lengthOf(1)
  })
  it('load with loading - LoadingComponent', () => {
    const getResults = mock('getResults').withArgs('2010')
    const wrapper = mount(<ResultsComponent
      classes={classes}
      match={match}
      results={{loading: true, data:{}}}
      history={history}
      getResults={getResults}
    />)
    const loading = wrapper.find('WithStyles(LoadingComponent)')
    expect(loading).to.have.lengthOf(1)
  })
  it('load with Error - ErrorComponent', () => {
    const getResults = mock('getResults').withArgs('2010')
    const wrapper = mount(<ResultsComponent
      classes={classes}
      match={match}
      results={{error: 'Error', data:{}}}
      history={history}
      getResults={getResults}
    />)
    const error = wrapper.find('WithStyles(ErrorComponent)')
    expect(error).to.have.lengthOf(1)
  })
  it('execute const and function statics', () => {
    const executeStyles = styles()
    mapStateToProps({
      results: {
        results: []
      }
    })
    mapDispatchToProps({})
    expect(executeStyles).to.be.deep.equal({
      root:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }
    })
  })
})
