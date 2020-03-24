import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './table.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

let total = 6;

let compound = [
    "burpees",
    "pushup",
    "jump squat",
    "jump lunge",
];

let abs = [
    "silly abs",
    "plank",
    "plank knee to elbow",
    "bicycle",
    "crunch",
];

let cardio = [
    "fast feet",
    "high knees",
];

/**
 tough
 *  burpees
 *  pushup
 *  jump squat
 *  jump lunge
 * abs
 *  silly abs
 *  plank
 *  plank knee to elbow
 *  bicycle
 *  crunch
 * cardio
 *  fast feet
 *  high knees
 * low intensity
 *   butt kicks
 * 
 * @param {*} name
 */

function randint(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const rows = (() => {
    let cardioIndex = randint(0, cardio.length);
    let compound1Index = randint(0, compound.length);
    let compound2Index = randint(0, compound.length);
    while (compound2Index == compound1Index){
        compound2Index = randint(0, compound.length);
    }
    let abs1Index = randint(0, abs.length);
    let abs2Index = randint(0, abs.length);
    let abs3Index = randint(0, abs.length);
    while (abs2Index == abs1Index){
        abs2Index = randint(0, abs.length);
    }    
    while (abs3Index == abs1Index || abs3Index == abs2Index){
        abs3Index = randint(0, abs.length);
    }
    let data = [
        { name: cardio[cardioIndex]},
        { name: abs[abs1Index]},
        { name: compound[compound1Index]},
        { name: abs[abs2Index]},
        { name: compound[compound2Index]},
        { name: abs[abs3Index]},
      ];
    return data;
})();

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <>
    <header className="Table-header">
    <p>
        Random Workout
    </p>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </header>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}