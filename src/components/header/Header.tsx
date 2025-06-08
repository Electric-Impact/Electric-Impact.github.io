import React from 'react'
import Nav from '../nav/Nav'
import Heading from '../../atomic/components/atoms/heading/Heading'

const Header: React.FC = () => {
    return (
        <>
        <Nav />
            <header>
                <Heading as={'h1'} fontFamily={'heading'} fontSize={'xxl'}>Header</Heading>
            </header>
        </>
    )
}

export default Header