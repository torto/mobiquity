import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = () => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

const strings = {
  loading: 'Loading...'
}

const LoadingComponent = ({ classes }) => {

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h5" component="h2">
        {strings.loading}
      </Typography>
      <CircularProgress />
    </div>
  )

}

LoadingComponent.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles, { withTheme: true })(LoadingComponent)
