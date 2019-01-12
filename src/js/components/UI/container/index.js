import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/Home'

const styles = theme => ({
  root:{
    flexGrow: 1
  },
  content: {
    backgroundColor: 'white',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  homeIcon: {
    marginRight: '10px',
    cursor: 'pointer'
  }
})

const ContainerComponent = ({classes, children, title, home, history}) => {
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          {home && <HomeIcon className={classes.homeIcon} onClick={() => history.push('/')} />}
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        {children}
      </main>
    </div>
  )

}

ContainerComponent.defaultProps = {
  home: false
}

ContainerComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  history: PropTypes.object,
  home: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
}

export default withStyles(styles, { withTheme: true })(ContainerComponent)
