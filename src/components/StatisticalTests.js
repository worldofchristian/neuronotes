import React, { useState } from 'react'
import { FaAngleRight, FaAngleLeft, FaInfoCircle, FaRedoAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StatisticalTests = () => {
    // state for quiz progression
    const [currentStep, setCurrentStep] = useState(1);
    // state for the quiz selections
    const [dataType, setDataType] = useState(null);
    const [moreThanTwoGroups, setMoreThanTwoGroups] = useState(false);
    const [moreThanFiveFrequency, setMoreThanFiveFrequency] = useState(false)
    // state for the info modals
    // const [nominalOpen, setIsNominalOpen] = useState(false);
    // const [ordinalOpen, setIsOrdinalOpen] = useState(false);
    // const [intervalOpen, setIsIntervalOpen] = useState(false);
    // const [ratioOpen, setIsRatioOpen] = useState(false);

    // advance to next step
    const nextStep = () => setCurrentStep(currentStep + 1);

    // return to previous step, if passed the first step
    const previousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        };
    };

    return (
    <>
    <div
    className='flex items-center justify-center'>
        <div
        className='max-w-sm lg:max-w-4xl p-2'>
            <div
            className='flex-col my-12'>
                <div
                className='flex items-center text-center justify-center mt-6 gap-2'>
                    <Link to='/'>
                        <p
                        className='text-base font-normal text-center underline tracking-wide'
                        >Home</p>
                    </Link>

                    <FaAngleRight />

                    <h2
                    className='text-base font-normal tracking-wide'
                    >Statistics</h2>
                </div>
                
                <h1
                className='text-3xl font-bold mt-2 text-center tracking-wide'
                >Statistical Tests</h1>

                {currentStep === 1 && (
                    <div
                    className='flex items-center justify-center'>
                        <div
                        className='flex flex-col'>
                            <h2
                            className='text-xl text-left justify-start items-start font-semibold tracking-wide mt-12'
                            >Choose a data type</h2>

                            <div
                            className='flex flex-row'>
                                <button
                                className='p-4 mt-4 w-5/6 rounded-lg shadow-md bg-slate-100'
                                onClick={() => { 
                                    setDataType(1);
                                    nextStep();
                                    }}
                                >
                                    <h2
                                    className='text-left text-md font-medium'
                                    >Nominal
                                    </h2>

                                    <p 
                                    className='text-base font-regular text-left mt-2'
                                    >Categories without order or ranking</p>

                                    <p
                                    className='text-sm text-left mt-2'
                                    >ex) hair color
                                    </p>
                                </button>

                                <FaInfoCircle 
                                className='text-2xl ml-2 text-blue-700'
                                />
                            </div>
                            
                            <div
                            className='flex flex-row'>
                                <button
                                className='p-4 mt-4 w-5/6 rounded-lg shadow-md bg-slate-100'
                                onClick={() => { 
                                    setDataType(2);
                                    nextStep();
                                    }}
                                >
                                    <h2
                                    className='text-md text-left font-medium'
                                    >Ordinal
                                    </h2>

                                    <p 
                                    className='text-base font-regular text-left mt-2'
                                    >Categories with a rank order</p>

                                    <p
                                    className='text-sm text-left mt-2'
                                    >ex) clothing sizes
                                    </p>
                                </button>

                                <FaInfoCircle 
                                className='text-2xl ml-2 text-blue-700'
                                />
                            </div>
                            
                            <div
                            className='flex flex-row'>
                                <button
                                className='p-4 mt-4 w-5/6 rounded-lg shadow-md bg-slate-100'
                                onClick={() => { 
                                    setDataType(3);
                                    nextStep();
                                    }}
                                >
                                    <h2
                                    className='text-md text-left font-medium'
                                    >Interval
                                    </h2>

                                    <p 
                                    className='text-base font-regular text-left mt-2'
                                    >Numeric scales with no true zero</p>

                                    <p
                                    className='text-sm text-left mt-2'
                                    >ex) IQ scores
                                    </p>
                                </button>
                                
                                <FaInfoCircle 
                                className='text-2xl ml-2 text-blue-700'
                                />
                            </div>
                            
                            <div
                            className='flex flex-row'>
                                <button
                                className='p-4 mt-4 w-5/6 rounded-lg shadow-md bg-slate-100'
                                onClick={() => { 
                                    setDataType(4);
                                    nextStep();
                                    }}
                                >
                                    <h2
                                    className='text-md text-left font-medium'
                                    >Ratio
                                    </h2>

                                    <p 
                                    className='text-base font-regular text-left mt-2'
                                    >Numeric scales with a true zero</p>

                                    <p
                                    className='text-sm text-left mt-2'
                                    >ex) Age in years
                                    </p>
                                </button>

                                <FaInfoCircle 
                                className='text-2xl ml-2 text-blue-700'
                                />
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div>
                        {(dataType === 1 || dataType === 2) ? (
                            <div>
                                <h2
                                className='text-lg text-left justify-start items-start font-semibold tracking-wide mt-12'
                                >Does each cell in the contingency table have a frequency of 5 or more?</h2>

                                <div
                                className='flex items-center justify-center'>
                                    <div
                                    className='flex-col mt-4'>
                                        <button
                                        className='btn btn-neutral w-5/6'
                                        onClick={() => { 
                                            setMoreThanFiveFrequency(true);
                                            nextStep();
                                            }}
                                        >Yes</button>

                                        <button
                                        className='btn btn-neutral w-5/6 mt-2'
                                        onClick={() => { 
                                            setMoreThanFiveFrequency(false);
                                            nextStep();
                                            }}
                                        >No</button>

                                        <div
                                        className='flex flex-row mt-12 cursor-pointer'
                                        onClick={() => { 
                                            previousStep();
                                            }}
                                        >
                                            <FaAngleLeft 
                                            className='mt-1 text-xl'
                                            />

                                            <p
                                            className='text-lg font-regular text-center underline'
                                            >Go back</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h2
                                className='text-lg text-left justify-start items-start font-semibold tracking-wide mt-12'
                                >Are you comparing more than 2 groups?</h2>

                                <div
                                className='flex items-center justify-center'>
                                    <div
                                    className='flex-col mt-4'>
                                        <button
                                        className='btn btn-neutral w-5/6'
                                        onClick={() => { 
                                            setMoreThanTwoGroups(true);
                                            nextStep();
                                            }}
                                        >Yes</button>

                                        <button
                                        className='btn btn-neutral w-5/6 mt-2'
                                        onClick={() => { 
                                            setMoreThanTwoGroups(false);
                                            nextStep();
                                            }}
                                        >No</button>

                                        <div
                                        className='flex flex-row mt-12 cursor-pointer'
                                        onClick={() => { 
                                            previousStep();
                                            }}
                                        >
                                            <FaAngleLeft 
                                            className='mt-1 text-xl'
                                            />

                                            <p
                                            className='text-lg font-regular text-center underline'
                                            >Go back</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {currentStep === 3 && (
                    <div
                    className='flex items-center justify-center'>
                        <div
                        className='flex-col'>
                            <h2
                            className='text-3xl font-semibold tracking-wide mt-12'>
                                {(dataType === 1 || dataType === 2) ? (
                                    moreThanFiveFrequency 
                                    ? "Chi Squared" 
                                    : "Fisher's Exact Test"
                                ) : (
                                    moreThanTwoGroups 
                                    ? "ANOVA" 
                                    : "T-test"
                                )}
                            </h2>

                            <p 
                            className='text-base font-regular mt-2'>
                                {(dataType === 1 || dataType === 2) ? (
                                    moreThanFiveFrequency 
                                    ? "Chi Squared compares categorical variables and does not assume the data is normally distributed (non-parametric)" 
                                    : "Fisher's Exact Test is similar to the Chi-Squared test, but is intended for smaller samples. compares categorical variables and does not assume the data is normally distributed (non-parametric)"
                                ) : (
                                    moreThanTwoGroups 
                                    ? "ANOVA compares multiple groups and assumes the data is normally distributed" 
                                    : "T-tests compare two groups and assume the data is normally distributed"
                                )}
                            </p>

                            <div
                            className='flex justify-between mt-12'>
                                <div
                                className='flex flex-row cursor-pointer'
                                onClick={() => {
                                    previousStep();
                                }}
                                >
                                    <FaAngleLeft
                                    className='mt-1 text-xl'
                                    />

                                    <p
                                    className='text-lg font-regular text-center underline'
                                    >Go back</p>
                                </div>

                                <div
                                className='flex flex-row cursor-pointer'
                                onClick={() => { 
                                    setCurrentStep(1);
                                    setDataType(null);
                                    setMoreThanFiveFrequency(false);
                                    setMoreThanTwoGroups(false);
                                    }}
                                >
                                    <FaRedoAlt
                                    className='mt-2 text-sm'
                                    />

                                    <p
                                    className='text-lg ml-2 font-regular text-center underline'
                                    >Start over</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
    </>
    );
}

export default StatisticalTests;