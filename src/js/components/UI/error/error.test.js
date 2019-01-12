import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Error from './index'

describe('Error Component', () => {
  it('load component and check text and errorIcon', () => {
    const wrapper = mount(<Error />)
    const textError = wrapper.find('h2').text()
    const iconError = wrapper.find('pure(ErrorOutlineIcon)')
    expect(textError).to.be.equal('Request Failed...')
    expect(iconError).to.have.lengthOf(1)
  })
})
