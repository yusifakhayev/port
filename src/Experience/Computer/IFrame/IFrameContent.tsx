import {useEffect, useState} from 'react'
import {ComputerState} from '../../Store/ComputerState'

export const IFrameContent = () => {
    const toggleComputerState = ComputerState((state) => state.toggleComputerState)

    useEffect(() => {
    },[])

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0.75rem',
                fontFamily: 'Iosevka'
            }}
        >
            <h1
                style={{
                    fontSize: '3.25rem', fontStyle: 'italic', fontWeight: '800',
                    textAlign: 'center'
                }}
            >Welcome to <span style={{
                color: 'blue'
            }}>Shader World</span></h1>

            <div
                style={{
                    flexDirection: 'column', textAlign: 'center', marginTop: '1.25rem', marginBottom: '1.25rem'
                }}
            >
                <div
                    style={{
                        flexDirection: 'row', textAlign: 'center'
                    }}
                >
                    <button
                        style={{
                            padding: '4rem', paddingLeft: '0.5rem', paddingRight: '0.5rem', margin: '1.5rem', alignItems: 'center', fontSize: '2.25rem', lineHeight: '1.75rem', fontWeight: '700', color: 'rgb(71, 85, 105)', borderRadius: '0.25rem', borderColor: 'white', borderWidth: '1px', boxSizing: 'border-box',
                            width: '33.333333%', height: '50%',
                        }}
                        onClick={() => {
                            toggleComputerState('Sphere')
                        }}
                    >Sphere</button>
                    <button
                        style={{
                            padding: '4rem', paddingLeft: '0.5rem', paddingRight: '0.5rem', margin: '1.5rem', alignItems: 'center', fontSize: '2.25rem', lineHeight: '1.75rem', fontWeight: '700', color: 'rgb(71, 85, 105)', borderRadius: '0.25rem', borderColor: 'white', borderWidth: '1px', boxSizing: 'border-box',
                            width: '33.333333%', height: '50%'
                        }}
                        onClick={() => {
                            toggleComputerState('Physics')
                        }}
                    >Physics</button>

                </div>
                <div
                    style={{
                        flexDirection: 'row', textAlign: 'center'
                    }}
                >
                    <button
                        style={{
                            padding: '4rem', paddingLeft: '0.5rem', paddingRight: '0.5rem', margin: '1.5rem', alignItems: 'center', fontSize: '2.25rem', lineHeight: '1.75rem', fontWeight: '700', color: 'rgb(71, 85, 105)', borderRadius: '0.25rem', borderColor: 'white', borderWidth: '1px', boxSizing: 'border-box',
                            width: '33.333333%', height: '50%'
                        }}
                    >Clouds</button>
                    <button
                        style={{
                            padding: '4rem', paddingLeft: '0.5rem', paddingRight: '0.5rem', margin: '1.5rem', alignItems: 'center', fontSize: '2.25rem', lineHeight: '1.75rem', fontWeight: '700', color: 'rgb(71, 85, 105)', borderRadius: '0.25rem', borderColor: 'white', borderWidth: '1px', boxSizing: 'border-box',
                            width: '33.333333%', height: '50%'
                        }}
                        onClick={() => {
                            toggleComputerState('Process')
                        }}
                    >Process</button>
                </div>
            </div>
        </div>
     )
}
