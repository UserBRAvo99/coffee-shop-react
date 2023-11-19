import styled from "styled-components";

const OurAddressFooter = ({ address }) => {
  return (
    <List>
      {address.map((addressItem) => {
        return <Item key={addressItem}>{addressItem}</Item>;
      })}
    </List>
  );
};

export default OurAddressFooter;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

const Item = styled.li`
  text-align: center;
  font-size: 18px;
  line-height: 45px;
  letter-spacing: 0.72px;
`;
