import React from 'react'
import { expect } from 'chai'
import { mock } from 'sinon'
import { mount } from 'enzyme'
import Container from './index'

describe('Container Component', () => {
  it('check title anc chidren ', () => {
    const title = 'Im a title'
    const children = 'Im a children'
    const wrapper = mount(<Container title={title} ><h1>{children}</h1></Container>)
    expect(wrapper.find('h6').text()).to.be.equal(title)
    expect(wrapper.find('h1').text()).to.be.equal(children)
  })
  it('check onClick home ', () => {
    const history = {
      push: mock('push').withArgs('/')
    }
    const title = 'Im a title'
    const wrapper = mount(<Container
      history={history}
      home={true}
      title={title} />)
    wrapper.find('HomeIcon').simulate('click')
    history.push.verify()
  })
})
