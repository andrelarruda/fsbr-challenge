import React from "react"
import { Flex } from 'antd'
import { SignupForm } from "../../forms/SignUp"

const boxStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    border: '1px solid #40a9ff',
}

const SignupPage = () => {
    return (
        <Flex style={boxStyle} justify="center" align="center">
            <SignupForm />
        </Flex>
    )
}

export default SignupPage