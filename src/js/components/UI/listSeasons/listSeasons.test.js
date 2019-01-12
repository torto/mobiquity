import React from 'react'
import { mock } from 'sinon'
import { expect } from 'chai'
import { mount } from 'enzyme'
import ListSeasons from './index'

describe('ListSeasons Component', () => {
  const data = [2010, 2011]
  it('check Item Render correct', () => {
    const history = {
      push: {}
    }
    const wrapper = mount(<ListSeasons data={data} history={history}/>)
    const itemInsertPaperOne = wrapper.find('WithStyles(Paper)').at(0).find('h3').at(1).text()
    const itemInsertPaperTwo = wrapper.find('WithStyles(Paper)').at(1).find('h3').at(1).text()
    expect(itemInsertPaperOne).to.have.equal('2010')
    expect(itemInsertPaperTwo).to.have.equal('2011')
  })
  it('check onClick', () => {
    const history = {
      push: mock('push').withArgs('/2010/results')
    }
    const wrapper = mount(<ListSeasons data={data} history={history}/>)
    wrapper.find('WithStyles(Paper)').at(0).simulate('click')
    history.push.verify()
  })
})
