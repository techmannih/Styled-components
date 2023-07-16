// // import React from 'react'
// // import styled from 'styled-components'
// // // import Icon from './Icon'
// // const StyledButton = styled.button`
// //     background-color: ${({primary}) => primary? 'red' : 'blue'};
// //     display: flex;
// //     justify-content: center;
// //     padding: 5px;
// //     margin: 5px;
// //     border-radius: 15px;
// // `


// // const Button = ({text, primary}) => {
// //     return (
// //         <StyledButton primary={primary}>{text}</StyledButton>
// //     )
// // }

// // export default Button


// // ///////////////////////////
// import React from 'react'
// import styled from 'styled-components'

// const StyledButton = styled.button`
//     background-color: ${({primary}) => primary? 'red' : 'blue'};
//     display: flex;
//     justify-content: center;
//     padding: 5px;
//     margin: 5px;
//     border-radius: 15px;
// `


// const ReversedButton = props => <StyledButton {...props} children={props.children.split('').reverse()}/>



// const Button = ({text, primary}) => {
//     return (
//         <StyledButton as={ReversedButton} primary={primary}>{text}</StyledButton>
//     )
// }

// export default Button



/////////////////////
///////////////////
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${({primary}) => primary? 'red' : 'blue'};
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
    flex-direction: column;
    
    &:hover {
        background-color: grey;
    }
    
    .subtext {
        font-size: 10px;
    }
`

const Button = ({text, primary}) => {
    return (
        <StyledButton primary={primary}>
            {text}
            <p className="subtext">sub text</p>
        </StyledButton>
    )
}

export default Button
