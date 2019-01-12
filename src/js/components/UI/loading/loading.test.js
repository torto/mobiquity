import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Loading from './index'

describe('Loading Component', () => {
  it('load component and check text and circularProgress', () => {
    const wrapper = mount(<Loading />)
    const textLoading = wrapper.find('h2').text()
    const circularProgress = wrapper.find('WithStyles(CircularProgress)')
    expect(textLoading).to.be.equal('Loading...')
    expect(circularProgress).to.have.lengthOf(1)
  })
})
