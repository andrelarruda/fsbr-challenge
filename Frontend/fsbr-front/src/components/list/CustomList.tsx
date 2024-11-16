import { Flex } from "antd"
import React, { ReactNode } from "react"

interface CustomListProps {
    children: ReactNode
}

export const CustomList = () => {
    <Flex style={{
        width: '100%',
        height: '800px',
        borderRadius: 6,
        border: '1px solid #40a9ff',
    }} justify="center" align="center">
        <p>Testing...</p>
    </Flex>
}