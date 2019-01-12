import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import CardWinner from './index'

const strings = {
  title: 'Winner Formula 1 Season 2010',
  informations: {
    pilot: 'Pilot',
    carNumber: 'Car Number',
    nationality: 'Nationality',
    dateOfBirth: 'Date of Birth'
  }
}

const initialData = {
  data: {
    results: [{
      season: '2010'
    }],
    winner: {
      givenName: 'torto',
      familyName: 'berghauser',
      permanentNumber: '15',
      nationality: 'Brazilian',
      dateOfBirth: '1988-11-25'
    }
  }
}

describe('CardWinner Component', () => {
  it('load component and check all texts', () => {
    const wrapper = mount(<CardWinner data={initialData}/>)
    const textTitle = wrapper.find('h2').text()
    const tableCells = wrapper.find('TableCell')
    const values = {
      header:{
        carNumber: tableCells.at(1).text(),
        nationality: tableCells.at(2).text(),
        dateOfBirth: tableCells.at(3).text(),
      },
      inputs: {
        name: tableCells.at(4).text(),
        carNumber: tableCells.at(5).text(),
        nationality: tableCells.at(6).text(),
        dateOfBirth: tableCells.at(7).text(),
      }
    }
    expect(textTitle).to.have.equal(strings.title)
    expect(values.header.carNumber).to.have.equal(strings.informations.carNumber)
    expect(values.header.nationality).to.have.equal(strings.informations.nationality)
    expect(values.header.dateOfBirth).to.have.equal(strings.informations.dateOfBirth)
    expect(values.inputs.name).to.have.equal(`${initialData.data.winner.givenName} ${initialData.data.winner.familyName}`)
    expect(values.inputs.carNumber).to.have.equal(initialData.data.winner.permanentNumber)
    expect(values.inputs.nationality).to.have.equal(initialData.data.winner.nationality)
    expect(values.inputs.dateOfBirth).to.have.equal(initialData.data.winner.dateOfBirth)
  })
})
