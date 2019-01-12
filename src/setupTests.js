import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import jsdom from 'jsdom'

enzyme.configure({ adapter: new Adapter() })

const { JSDOM } = jsdom

const jsdomVar = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdomVar

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}
