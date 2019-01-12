import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const styles = () => ({
  root: {
    width: '100%',
  }
})

const strings = {
  header: {
    raceName: 'Race Name',
    date: 'Date',
    circuit: 'Circuit Name',
    winner: 'Race Winner'
  }
}

const TableResultComponent = ({
  classes,
  winner,
  raceName,
  date,
  circuit
}) => {

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>{strings.header.raceName}</TableCell>
          <TableCell align="right">{strings.header.date}</TableCell>
          <TableCell align="right">{strings.header.circuit}</TableCell>
          <TableCell align="right">{strings.header.winner}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row">
            {raceName}
          </TableCell>
          <TableCell align="right">{date}</TableCell>
          <TableCell align="right">{circuit}</TableCell>
          <TableCell align="right">{
            `${winner.givenName} ${winner.familyName}`
          }</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )

}

TableResultComponent.propTypes = {
  classes: PropTypes.object,
  raceName: PropTypes.string,
  date: PropTypes.string,
  circuit: PropTypes.string,
  winner: PropTypes.object,
}

export default withStyles(styles, { withTheme: true })(TableResultComponent)
