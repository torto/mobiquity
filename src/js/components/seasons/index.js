import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Container from '../UI/container'
import ListSeasons from '../UI/listSeasons'
import seasonYears from './seasonsYears'

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
