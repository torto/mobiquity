import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TableResult from './steps/TableResult'
import grey from '@material-ui/core/colors/grey'

const styles = () => ({
  root: {
    width: '100%',
  },
  borderWinner: {
    background: grey[100]
  }
})

const strings = {
  headerPanel: {
    seasons: 'Seasons ',
    round: 'Round '
  }
}

const ListResultsComponent = ({ classes, data }) => {

  const mountCssBorderTableWinner = (winnerCircuirt, winner) => {
    if(winnerCircuirt === winner) return classes.borderWinner
    return
  }

  const mountPanels = () => {
    const { data: { results, winner: { driverId } } } = data
    const { seasons, round } = strings.headerPanel

    return results.map((item, key) => (
      <ExpansionPanel
        key={key}>
        <ExpansionPanelSummary
          className={
            mountCssBorderTableWinner(item.Results[0].Driver.driverId, driverId)
          }
          expandIcon={<ExpandMoreIcon />}>
          <Typography>{seasons} {item.season} - {round} {item.round} - {item.raceName}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TableResult
            winner={item.Results[0].Driver}
            raceName={item.raceName}
            date={item.date}
            circuit={item.Circuit.circuitName}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))
  }

  return (
    <div className={classes.root}>
      {mountPanels()}
    </div>
  )

}

ListResultsComponent.propTypes = {
  data: PropTypes.object,
  classes: PropTypes.object
}

export default withStyles(styles, { withTheme: true })(ListResultsComponent)
