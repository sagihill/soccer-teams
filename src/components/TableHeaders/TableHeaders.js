import { TableHeadersContainer } from "./TableHeaders.styles";
import { ItemContainer } from "../TableRow/TableRow.styles";
export const TableHeaders = () => {
  const headers = ["Logo", "Team Name", "Founding Year", "Bookmark"];
  return (
    <TableHeadersContainer>
      {headers.map((header, index) => {
        return (
          <ItemContainer key={index}>
            <span key={index}>{header}</span>
          </ItemContainer>
        );
      })}
    </TableHeadersContainer>
  );
};
