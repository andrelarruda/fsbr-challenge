import { LoginForm } from "../../forms"
import React from "react"
import { Flex } from 'antd'

const boxStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    border: '1px solid #40a9ff',
}

const LoginPage = () => {
    return (
        <Flex style={boxStyle} justify="center" align="center">
            <LoginForm />
        </Flex>
    )
}

export default LoginPage