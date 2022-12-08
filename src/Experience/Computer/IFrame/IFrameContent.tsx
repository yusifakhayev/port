import {useEffect, useState} from 'react'
import {a, useSpring} from 'react-spring'
import {ComputerState} from '../../Store/ComputerState'

import CSS from 'csstype'

export const IFrameContent = () => {
    const toggleComputerState = ComputerState((state) => state.toggleComputerState)

    useEffect(() => {
    },[])

    const innerWrapperStyle: CSS.Properties = {
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '1.25rem',
        marginBottom: '1.25rem'
    }
    const titleStyle: CSS.Properties =  {
        fontSize: '3.25rem',
        fontStyle: 'italic',
        fontWeight: '800',
        textAlign: 'center'
    }

    const wrapperDivStyle: CSS.Properties = {
        display: 'flex',
        flexDirection: 'column',
        padding: '0.75rem',
        fontFamily: 'Iosevka'
    }

    const buttonWrapperStyle: CSS.Properties = {
        flexDirection: 'row',
        textAlign: 'center'
    }

    const buttonStyle: CSS.Properties = {
        padding: '4rem',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        margin: '1.5rem',
        alignItems: 'center',
        fontSize: '2.25rem',
        lineHeight: '1.75rem',
        fontWeight: '700',
        color: 'rgb(71, 85, 105)',
        borderRadius: '0.25rem',
        borderColor: 'white',
        borderWidth: '1px',
        boxSizing: 'border-box',
        width: '33.333333%',
        height: '50%',
    }

    const aRefStyle: CSS.Properties = {
        color: 'blue',
        textDecoration: 'none',
    }

    return (
        <div
            style={wrapperDivStyle}
        >
            {/* @ts-ignore */}
            <h1 style={titleStyle} >Welcome to <a href='/' style={aRefStyle}>Shader World</a></h1>

            <div style={innerWrapperStyle} >
                <div style={buttonWrapperStyle} >
                    <button
                        style={buttonStyle}
                        onClick={() => {
                            toggleComputerState('Sphere')
                        }}
                    >Sphere</button>
                    <button
                        style={buttonStyle}
                        onClick={() => {
                            toggleComputerState('Physics')
                        }}
                    >Physics</button>

                </div>
                <div style={buttonWrapperStyle} >
                    <button
                        style={buttonStyle}
                    >Clouds</button>
                    <button
                        style={buttonStyle}
                        onClick={() => {
                            toggleComputerState('Process')
                        }}
                    >Process</button>
                </div>
            </div>
        </div>
     )
}
