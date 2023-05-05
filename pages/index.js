import { useState } from 'react'

import { useUnitCalculatorFormControls } from '../features/UnitCalculator/useUnitCalculatorFormControls'

import { Typography } from '@mui/material'

import PageTitle from '../components/common/PageTitle'

import UnitInputs from '../features/UnitCalculator/UnitInputs'
import UnitOutput from '../features/UnitCalculator/UnitOutput'
import InputContainer from '../features/UnitCalculator/InputContainer'
import Skelly from '../components/common/Skelly'
import SkellyGroup from '../components/common/SkellyGroup'



const Home = () => {
    const [screen, setScreen] = useState('calculate')

    const handleScreen = (_, newScreen) => {
        setScreen(newScreen)
    }

    const { isLoading, values, currentUnits, handleChange, handleFocus } = useUnitCalculatorFormControls()

    return (
        <>

            <PageTitle>Unit Converter</PageTitle>

            <Typography paragraph mb={5}>
                Calculate different unit types.
            </Typography>

            {!isLoading ? (
                <>
                    <UnitInputs values={values} currentUnits={currentUnits} handleChange={handleChange} handleFocus={handleFocus} />

                    <UnitOutput values={values} currentUnits={currentUnits} />
                </>
            ) : (
                <>
                    <InputContainer top={<Skelly type='input' />} center={<Skelly type='input' />} bottom={<Skelly type='input' />} />

                    <SkellyGroup type='input' skellyAmount={3} gapSize={4} />
                </>
            )}
        </>
    )
}

export default Home
