import styled from "styled-components";
import { ourAddress } from "../data/dataAboutProducts";

const OurAddressFooter = ({ number }) => {
  const arr = [];
  for (let index = 0; index < Number(number); index += 1) {
    arr.push(ourAddress[index]);
  }
  console.log(arr);

  return (
    <List>
      {arr.map((address) => {
        return <Item key={address}>{address}</Item>;
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
