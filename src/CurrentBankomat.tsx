import React from 'react';
import {MoneyType} from './App';
import styled from 'styled-components';

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
    return (
        <GeneralBancnote color={props.money.banknotes === 'RUBLS'
            ?"lightgreen" :"lightpink"}>
            <Name>{props.money.banknotes}</Name>
            <Nominal>{props.money.value}</Nominal>
        </GeneralBancnote>
    );
};


const GeneralBancnote = styled.div`
  background-color: ${props => {
    if (props.color == "lightgreen") {return "lightgreen"}
    return "lightpink"
  }
  
};
  width: 400px;
  height: 200px;
  margin: 10px;`

const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;`

const Nominal = styled.div`
  display: flex;
  justify-content: center;
  font-size: 90px;
  margin-top: 30px;`


////----------------------------------------------------
// import React from 'react';
// import {MoneyType} from './App';
// import styled from 'styled-components';
//
// type CurrentBankomatPropsType = {
//     money: MoneyType
// }
// export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
//
//     return (
//         props.money.banknotes === 'RUBLS'
//             ? <GreenBancnote>
//                 <Name>{props.money.banknotes}</Name>
//                 <Nominal>{props.money.value}</Nominal>
//             </GreenBancnote>
//             : <RedBancnote>
//                 <Name>{props.money.banknotes}</Name>
//                 <Nominal>{props.money.value}</Nominal>
//             </RedBancnote>
//     );
// };
//
//
// const GreenBancnote = styled.div`
//   background-color: lightgreen;
//   width: 400px;
//   height: 200px;
//   margin: 10px;`
//
// const RedBancnote = styled.div`
//   background-color: lightpink;
//   width: 400px;
//   height: 200px;
//   margin: 10px;`
//
// const Name = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 30px;`
//
// const Nominal = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 90px;
//   margin-top: 30px;`
