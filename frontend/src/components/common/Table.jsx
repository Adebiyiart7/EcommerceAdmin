// NODEL_MODULES
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { brown } from "@mui/material/colors";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: brown[400],
    color: theme.palette.common.white,
    fontFamily: "'Inter', serif",
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontWeight: 500,
    color: "var(--primaryText)",
    fontFamily: "'Inter', serif",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "var(--lightBackground)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AppTable = ({ rows, fields }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="recent order table">
        <TableHead>
          <TableRow>
            {fields.map((item, index) => (
              <StyledTableCell key={index}>{item.alias}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {fields.map((item, index) => (
                <StyledTableCell key={index}>{row[item.name]}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppTable;
