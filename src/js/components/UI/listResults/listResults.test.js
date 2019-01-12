import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import ListResults from './index'

describe('ListResults Component', () => {
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

  it('check title expansionPanel is correct', () => {
    const wrapper = mount(<ListResults data={data} />)
    const expansionPanel = wrapper.find('ExpansionPanel')
    expect(expansionPanel).to.have.lengthOf(2)

    const firstElement = expansionPanel.at(0)
    expect(firstElement.find('Typography').text()).to.be.equal('Seasons  2010 - Round  1 - Brazil Grand Prix')

    const secondElement = expansionPanel.at(1)
    expect(secondElement.find('Typography').text()).to.be.equal('Seasons  2010 - Round  2 - Brazil Grand Prix')
  })
  it('check css borderWinner is correct', () => {
    const wrapper = mount(<ListResults data={data} />)
    const borderWinner = wrapper.find('div.ListResultsComponent-borderWinner-2')
    expect(borderWinner).to.have.lengthOf(1)
  })
})
