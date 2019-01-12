import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Container from '../UI/container'
import ListSeasons from '../UI/listSeasons'

const seasonYears = [
  2005,
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015
]

const styles = () => ({
  root:{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const SeasonComponent = ({classes, history}) => {
  const titleAppBar = 'Formula 1 - Seasons'

  return (
    <Container title={titleAppBar}>
      <div className={classes.root}>
        <ListSeasons data={seasonYears} history={history}/>
      </div>
    </Container>
  )
}

SeasonComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(SeasonComponent)
