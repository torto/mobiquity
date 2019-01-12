import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ErrorIcon from '@material-ui/icons/ErrorOutline'

const styles = () => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon: {
    fill: 'red',
    height: '90px',
    width: '85px'
  }
})

const strings = {
  error: 'Request Failed...'
}

const ErrorComponent = ({ classes }) => {

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h5" component="h2">
        {strings.error}
      </Typography>
      <ErrorIcon className={classes.icon} />
    </div>
  )

}

ErrorComponent.propTypes = {
  data: PropTypes.object,
  classes: PropTypes.object
}

export default withStyles(styles, { withTheme: true })(ErrorComponent)
