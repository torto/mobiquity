import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import TableResult from './TableResult'

describe('TableResult Component', () => {
  const data = {
    raceName: 'Brazil Grand Prix',
    date: '2010-11-25',
    circuit: 'Interlagos',
    winner: {
      givenName: 'Torto',
      familyName: 'Berghauser'
    },
  }
  const strings = {
    raceName: 'Race Name',
    date: 'Date',
    circuit: 'Circuit Name',
    winner: 'Race Winner'
  }
  it('check Item Render correct', () => {
    const wrapper = mount(<TableResult
      raceName={data.raceName}
      date={data.date}
      circuit={data.circuit}
      winner={data.winner}
    />)
    const tableCells = wrapper.find('TableCell')
    const values = {
      header:{
        raceName: tableCells.at(0).text(),
        date: tableCells.at(1).text(),
        circuit: tableCells.at(2).text(),
        winner: tableCells.at(3).text(),
      },
      inputs: {
        raceName: tableCells.at(4).text(),
        date: tableCells.at(5).text(),
        circuit: tableCells.at(6).text(),
        winner: tableCells.at(7).text(),
      }
    }

    expect(strings.raceName).to.have.equal(values.header.raceName)
    expect(strings.date).to.have.equal(values.header.date)
    expect(strings.circuit).to.have.equal(values.header.circuit)
    expect(strings.winner).to.have.equal(values.header.winner)

    expect(values.inputs.winner).to.have.equal(`${data.winner.givenName} ${data.winner.familyName}`)
    expect(values.inputs.raceName).to.have.equal(data.raceName)
    expect(values.inputs.date).to.have.equal(data.date)
    expect(values.inputs.circuit).to.have.equal(data.circuit)
  })
})
