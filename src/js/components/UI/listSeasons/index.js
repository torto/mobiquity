import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import FlagIcon from '@material-ui/icons/Flag'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  paper: {
    flex: '1 0 21%',
    margin: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    cursor: 'pointer',
    flexDirection: 'column',
  },
  paperItemContent: {
    width: '100%'
  }
})

const ListSeasons = ({ data, classes, history }) => {
  const titlePaper = 'Season'
  const mountList = () => data.map((item, key) => (
    <Paper
      key={key}
      className={classes.paper}
      elevation={2}
      onClick={() => history.push(`/${item}/results`)}>
      <Typography variant="h5" component="h3">
        {titlePaper}
      </Typography>
      <Typography variant="h5" component="h3">
        {item}
        <FlagIcon />
      </Typography>
    </Paper>
  ))
  return (
    <div className={classes.root}>
      {mountList()}
    </div>
  )
}

ListSeasons.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  data: PropTypes.array
}

export default withStyles(styles)(ListSeasons)
