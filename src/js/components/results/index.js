import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Container from '../UI/container'
import { getResults } from '../../../modules/results/actions/request'
import ListResults from '../UI/listResults'
import CardWinner from '../UI/cardWinner'
import Loading from '../UI/loading'
import ErrorRequest from '../UI/error'

export const styles = () => ({
  root:{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
})

export class ResultsComponent extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {
      getResults,
      match: {
        params: {
          year
        }
      }
    } = this.props
    getResults(year)
  }

  render() {
    const {
      classes,
      results,
      history
    } = this.props
    return (
      <Container
        title={'Results'}
        history={history}
        home={true}>
        <div className={classes.root}>
          {results.loading && <Loading />}
          {results.error && <ErrorRequest />}
          {results.data.winner && <CardWinner data={results} />}
          {results.data.results && <ListResults data={results} />}
        </div>
      </Container>
    )
  }

}

ResultsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  getResults: PropTypes.func,
  results: PropTypes.object,
  history: PropTypes.object
}

export const mapStateToProps = ({
  results: {
    results
  }
}) => ({results})

export const mapDispatchToProps = dispatch => bindActionCreators({
  getResults
}, dispatch)


export default withStyles(styles, { withTheme: true })(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultsComponent))
