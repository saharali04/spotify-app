import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import "./BasicTable.css";
import { Link } from 'react-router-dom';

export default function BasicTable( { data, category }) {
    const handleRedirectSpotify = (row) => {
        window.open(row.external_urls.spotify, '_blank').focus();
    }
  return (
        <TableContainer component={Paper}>
        <Table sx={{ "& th": {
        color: "#6b7280",
      }, minWidth: 650, backgroundColor: '#FFFFFF' }} aria-label="simple table">
            <TableHead sx={{ minWidth: 650, backgroundColor: '#f9fafb', color: "6b7280" }}>
            <TableRow>
                <TableCell align="center" sx={{ color: "6b7280" }}>POSITION</TableCell>
                <TableCell align="center">{category.toUpperCase()}</TableCell>
                <TableCell align="center">LISTEN</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row, i) => (
                <TableRow
                key={row.name}
                align="center"
                >
                <TableCell component="th" scope="row" align="center" sx={{ fontSize: 20 }}>
                    {i+1}
                </TableCell>
                <TableCell align="center" style={{ verticalAlign: 'center' }} sx={{
  maxWidth: 100,
  borderStyle: "border-box"
}}>
                    { row.name}
                </TableCell>
                <TableCell align="center" style={{ verticalAlign: 'center' }} >
                    <Button onClick={() => handleRedirectSpotify(row)} variant="outlined" style={{
        backgroundColor: "#FFFFFF",
        fontSize: "12px",
    }} >
                        Listen on Spotify
                    </Button>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
  );
}