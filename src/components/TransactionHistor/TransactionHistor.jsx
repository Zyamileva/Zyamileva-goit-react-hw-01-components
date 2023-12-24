import {} from './TransactionHistor.styled';
import {
  Container,
  TableHead,
  TableRow,
  Type,
  Amount,
  Currency,
  TableBody,
  TableData,
} from './TransactionHistor.styled';
export const TransactionHistor = ({ items }) => {
  return (
    <Container>
      <TableHead>
        <TableRow>
          <Type>Type</Type>
          <Amount>Amount</Amount>
          <Currency>Currency</Currency>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
          );
        })}
      </TableBody>
    </Container>
  );
};
