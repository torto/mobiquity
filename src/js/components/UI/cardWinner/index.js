import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const styles = () => ({
  root: {
    width: '50%',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
})

const strings = {
  title: 'Winner Formula 1 Season',
  informations: {
    pilot: 'Pilot',
    carNumber: 'Car Number',
    nationality: 'Nationality',
    dateOfBirth: 'Date of Birth'
  }
}

const CardWinnerComponent = ({ classes, data }) => {

  const {
    data: {
      results,
      winner: {
        givenName,
        familyName,
        permanentNumber,
        nationality,
        dateOfBirth
      }
    }
  } = data


  return (
    <Card className={classes.root}>
      <CardContent className={classes.card}>
        <Typography gutterBottom variant="h5" component="h2">
          {strings.title} {results[0].season}
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{strings.informations.pilot}</TableCell>
              <TableCell align="right">{strings.informations.carNumber}</TableCell>
              <TableCell align="right">{strings.informations.nationality}</TableCell>
              <TableCell align="right">{strings.informations.dateOfBirth}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {givenName} {familyName}
              </TableCell>
              <TableCell align="right">{permanentNumber}</TableCell>
              <TableCell align="right">{nationality}</TableCell>
              <TableCell align="right">{dateOfBirth}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )

}

CardWinnerComponent.propTypes = {
  data: PropTypes.object,
  classes: PropTypes.object
}

export default withStyles(styles, { withTheme: true })(CardWinnerComponent)
