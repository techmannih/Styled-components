// // // import React from 'react'
// // // // import ReactDOM from 'react-dom'
// // // import styled from 'styled-components'

// // // const Title = styled.h1`
// // //   color: #b19cd9;
// // // `

// // // const Section = styled.div`
// // //   background-color: #ffffff;
// // //   border: solid 3px grey;
// // //   margin: 4px;
// // //   width: 300px;
// // //   height: 50px;
// // //   border-radius: 10px;
// // //   display: flex;
// // //   justify-content: left;
// // //   font-size: 40px;
// // //   color: #ff6961;
// // // `

// // // const WeekdayTitle = styled.div`
// // //   display: flex;
// // //   justify-content: center;
// // //   width: 50px;
// // //   border-right: solid 3px lightgrey;
// // // `

// // // class Main extends React.Component {
// // //   render() {
// // //     return (
// // //       <>
// // //         <Title>Progress Tracker</Title>
// // //         <div>
// // //           <Section>
// // //             <WeekdayTitle>M</WeekdayTitle>
// // //           </Section>
// // //           <Section>
// // //             <WeekdayTitle>T</WeekdayTitle>
// // //           </Section>
// // //           <Section>
// // //             <WeekdayTitle>W</WeekdayTitle>
// // //           </Section>
// // //           <Section>
// // //             <WeekdayTitle>T</WeekdayTitle>
// // //           </Section>
// // //           <Section>
// // //             <WeekdayTitle>F</WeekdayTitle>
// // //           </Section>
// // //           <Section>
// // //             <WeekdayTitle>S</WeekdayTitle>
// // //           </Section>
// // //           <Section>
// // //             <WeekdayTitle>S</WeekdayTitle>
// // //           </Section>
// // //         </div>
// // //       </>
// // //     );
// // //   }
// // // }

// // // export default Main




// // import React from 'react';
// // import styled from 'styled-components';
// // import Section from './Section';

// // const Title = styled.h1`
// //   color: #b19cd9;
// // `

// // class Main extends React.Component {
// //   render() {
// //     return (
// //       <>
// //         <Title>Progress Tracker</Title>
// //         <div>
// //           <Section text='M'/>
// //           <Section text='T'/>
// //           <Section text='W'/>
// //           <Section text='T'/>
// //           <Section text='F'/>
// //           <Section text='S'/>
// //           <Section text='S'/>
// //         </div>
// //       </>
// //     );
// //   }
// // }
// // export default Main


// ////////////
// ///////
// import React from 'react'
// import styled from 'styled-components'
// import Section from './Section'

// const Title = styled.h1`
//   color: #b19cd9;
// `

// class Main extends React.Component {
//   render() {
//     return (
//       <>
//         <Title>Progress Tracker</Title>
//         <div>
//           <Section text='M' progress='100%'/>
//           <Section text='T' progress='80%'/>
//           <Section text='W' progress='70%'/>
//           <Section text='T' progress='60%'/>
//           <Section text='F' progress='40%'/>
//           <Section text='S' progress='20%'/>
//           <Section text='S' progress='10%'/>
//         </div>
//       </>
//     );
//   }
// }

// export default Main

/////
/////////////
///////////
import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Title = styled.h1`
  color: #b19cd9;
`

class Main extends React.Component {
  render() {
    return (
      <>
        <Title>Progress Tracker</Title>
        <div>
          <Section text='M' progress='100%' day={1}/>
          <Section text='T' progress='80%' day={2}/>
          <Section text='W' progress='70%' day={3}/>
          <Section text='T' progress='60%'day={4}/>
          <Section text='F' progress='40%'day={5}/>
          <Section text='S' progress='20%'day={6}/>
          <Section text='S' progress='10%'day={7}/>
        </div>
      </>
    );
  }
}
export default Main