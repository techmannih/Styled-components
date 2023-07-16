// // // // // import React from 'react'
// // // // // // import ReactDOM from 'react-dom'
// // // // // import styled from 'styled-components'

// // // // // const Title = styled.h1`
// // // // //     color: #aac9f0;
// // // // // `

// // // // // const Section = styled.div`
// // // // //     background-color: #f0d1aa;
// // // // //     display: flex;
// // // // //     justify-content: center;
// // // // //     flex-direction: column;
// // // // //     color: #f0aeaa;
// // // // //     border-radius: 15px;    
// // // // // `

// // // // // const Button = styled.button`
// // // // //     background-color: white;
// // // // //     display: flex;
// // // // //     justify-content: center;
// // // // //     padding: 5px;
// // // // //     margin: 5px;
// // // // //     border-radius: 15px;
// // // // // `

// // // // // const Content = () => {
// // // // //     return (
// // // // //         <Section>
// // // // //             <Title>💅 Section</Title>
// // // // //             <Button>Click me</Button>
// // // // //             <Button>Click me</Button>
// // // // //         </Section>
// // // // //     )
// // // // // }

// // // // // export default Content


// // // // //////////////////////////////////////////////////////////////////
// // // // import React from 'react'
// // // // import styled from 'styled-components'
// // // // import Button from './Button'
// // // // import Icon from './Icon'

// // // // const Title = styled.h1`
// // // //     color: #aaecf0;
// // // // `
// // // // const Section = styled.div`
// // // //     background-color: #aac9f0;
// // // //     display: flex;
// // // //     justify-content: center;
// // // //     flex-direction: column;
// // // //     border-radius: 15px;
// // // // `
// // // // const Content = () => {
// // // //     return (
// // // //         <Section>
// // // //             <Title>💅🏻 Section</Title>
// // // //             <Button primary text="me first"/>
// // // //             <Button text="me second"/>
// // // //             <Icon primary/>
// // // //             <Icon/>
// // // //         </Section>
// // // //     )
// // // // }

// // // // export default Content
// // // /////////////////////////////////////////////////////////



// // // //////////////////////////////////////////

// // // import React from 'react'
// // // import styled from 'styled-components'
// // // import Button from './Button'
// // // import Icon from './Icon'

// // // const Title = styled.h1`
// // //     color: #aaecf0;
// // // `

// // // const SubTitle = styled(Title)`
// // //     font-size: 12px;
// // //     align-self: center;
// // // `

// // // const ParagraphTitle = styled(SubTitle)`
// // //     color: grey;
// // // `


// // // const Section = styled.div`
// // //     background-color: #aac9f0;
// // //     display: flex;
// // //     justify-content: center;
// // //     flex-direction: column;
// // //     border-radius: 15px;
// // // `

// // // const Content = () => {
// // //     return (
// // //         <Section>
// // //             <Title>💅🏻 Section</Title>
// // //             <SubTitle>I am a subtitle</SubTitle>
// // //             <Button text='me first' primary/>
// // //             <Button text='me second'/>
// // //             <Icon primary />
// // //             <Icon />
// // //             <ParagraphTitle>I am a paragraph</ParagraphTitle>
// // //         </Section>
// // //     )
// // // }

// // // export default Content


// // import React from 'react'
// // import styled from 'styled-components'
// // import Button from './Button'
// // import Icon from './Icon'

// // const Title = styled.h1`
// //     color: #aaecf0;
// // `
// // const Section = styled.div`
// //     background-color: #aac9f0;
// //     display: flex;
// //     justify-content: center;
// //     flex-direction: column;
// //     border-radius: 15px;
// // `

// // const SubTitle = styled(Title)`
// //     font-size: 12px;
// //     align-self: center;
// // `;

// // const ParagraphTitle = styled(SubTitle)`
// //     color: grey;
// // `;

// // const ReversedTitle = props =>
// //     <ParagraphTitle {...props} children={props.children.split('').reverse()} />

// // const Content = () => {
// //     return (
// //         <Section>
// //             <Title>💅🏻 Section</Title>
// //             <SubTitle>I am a subtitle</SubTitle>
// //             <Button text='me first' primary/>
// //             <Button text='me second'/>
// //             <Icon primary border='solid 3px'/>
// //             <Icon />
// //             <ParagraphTitle as={ReversedTitle} >I am a paragraph title</ParagraphTitle>
// //         </Section>
// //     )
// // }

// // export default Content



// ////
// /////////////////////////
// import React from 'react'
// import styled from 'styled-components'
// import Button from './Button'
// import Icon from './Icon'

// const Title = styled.h1`
//     color: #aaecf0;
// `
// const Section = styled.div`
//     background-color: #aac9f0;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     border-radius: 15px;
// `

// const SubTitle = styled(Title)`
//     font-size: 12px;
//     align-self: center;
// `;

// const ParagraphTitle = styled(SubTitle)`
//     color: grey;
// `;

// const ReversedTitle = props =>
//     <ParagraphTitle {...props} children={props.children.split('').reverse()} />

// const Content = () => {
//     return (
//         <Section>
//             <Title>💅🏻 Section</Title>
//             <SubTitle>I am a subtitle</SubTitle>
//             <Button text='me first' primary/>
//             <Button text='me second'/>
//             <Icon border='solid 3px' statusColor={'ready'}/>
//             <Icon status={'in-progress'}/>
//             <ParagraphTitle as={ReversedTitle} >I am a paragraph title</ParagraphTitle>
//         </Section>
//     )
// }

// export default Content


//
//////////////////////////////////////
//////////import React from 'react'
import styled, { keyframes } from 'styled-components'
import Button from './Button'
import Icon from './Icon'

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const Title = styled.h1`
    color: #aaecf0;
    animation: 2s ${rotate} linear infinite;
`
const Section = styled.div`
    background-color: #aac9f0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 15px;
`

const SubTitle = styled(Title)`
    font-size: 12px;
    align-self: center;
`;

const ParagraphTitle = styled(SubTitle)`
    color: grey;
`;

const ReversedTitle = props =>
    <ParagraphTitle {...props} children={props.children.split('').reverse()} />

const Content = () => {
    return (
        <Section>
            <Title>💅🏻 Section</Title>
            <SubTitle>I am a subtitle</SubTitle>
            <Button text='me first' primary/>
            <Button text='me second'/>
            <Icon border='solid 3px' statusColor={'steady'} />
            <Icon status='in-progress'/>
            <ParagraphTitle as={ReversedTitle} >I am a paragraph title</ParagraphTitle>
        </Section>
    )
}

export default Content
