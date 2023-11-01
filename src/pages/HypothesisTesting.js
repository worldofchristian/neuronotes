import React, { useState, useEffect } from 'react'
import { FaAngleRight, FaAngleLeft, FaRedoAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HypothesisTesting = () => {
    // state for quiz progression
    const [currentStep, setCurrentStep] = useState(1);
    // state for the quiz selections
    const [dataType, setDataType] = useState(null);
    const [moreThanTwoGroups, setMoreThanTwoGroups] = useState(false);
    const [moreThanFiveFrequency, setMoreThanFiveFrequency] = useState(false);

    // load to the top of the page
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

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
    <div className='bg-gray-200 min-h-screen'>
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
                    >Hypothesis Testing</h1>
                        <div
                        className='flex items-center justify-center'>
                            <div className='flex flex-col'>
                                <p
                                className='text-base text-left justify-start items-start mt-6'
                                >After data is collected during research, statistical tests are used to analyze and interpret the findings. This involves 
                                comparing the observed data to what might be expected by chance. This is done through a variety of methods, but they all follow
                                a similar pattern:<br /><br />

                                1) Hypothesis<br />
                                • Establish a null hypothesis (H0) stating no effect or relationship, and an alternative hypothesis (H1) suggesting an effect or relationship<br /><br />
                                2) Test statistic<br />
                                • Calculate a value from the data that will be compared to a reference distribution<br /><br />
                                3) P-value<br />
                                • Determine a point on the distribution beyond which the null hypothesis is rejected<br /><br />

                                Essentially, these tests are about probability. If it looks like there's a relationship between variables, we compare the data to a reference 
                                distribution to see how likely it is to be a random occurrence. The p-value is traditonally set to 0.05. An easier way to think
                                of this is that 0.05 is the same as 1/20, so we're saying this relationship has to occur randomly less than 1 out of 20 times ,
                                under the assumption that the null hypothesis is true.<br /><br />

                                That means if the relationship happens randomly more than 1 out of 20 times, we accept the null hypothesis - the results are not significant.
                                If it happens less, we reject the null hypothesis - the results are significant. 
                                </p>

                                <h2
                                className='text-lg text-left justify-start items-start font-semibold tracking-wide mt-6'
                                >Choose one</h2>
                                
                                {currentStep === 1 && (
                                    <div
                                    className='grid grid-cols-2'>
                                        <button
                                        className='p-4 mt-4 w-5/6 rounded-lg shadow-md bg-slate-100'
                                        onClick={() => { 
                                            setDataType(1);
                                            nextStep();
                                            }}
                                        >
                                            <h2
                                            className='text-center text-lg font-medium'
                                            >Nominal
                                            </h2>

                                            <p 
                                            className='text-sm text-center font-regular mt-2'
                                            >Categories, no rank order</p>

                                            <p
                                            className='text-sm text-center mt-2'
                                            >ex) hair color
                                            </p>
                                        </button>
                                    
                                        <button
                                        className='p-4 mt-4 w-5/6 rounded-lg shadow-md bg-slate-100'
                                        onClick={() => { 
                                            setDataType(2);
                                            nextStep();
                                            }}
                                        >
                                            <h2
                                            className='text-lg text-center font-medium'
                                            >Ordinal
                                            </h2>

                                            <p 
                                            className='text-sm font-regular text-center mt-2'
                                            >Categories, with a rank order</p>

                                            <p
                                            className='text-xs text-center mt-2'
                                            >ex) clothing sizes
                                            </p>
                                        </button>
                
                                        <button
                                        className='p-4 mt-4 w-5/6 rounded-lg shadow-md bg-slate-100'
                                        onClick={() => { 
                                            setDataType(3);
                                            nextStep();
                                            }}
                                        >
                                            <h2
                                            className='text-lg text-center font-medium'
                                            >Interval
                                            </h2>

                                            <p 
                                            className='text-sm font-regular text-center mt-2'
                                            >Numeric scales, no true zero</p>

                                            <p
                                            className='text-xs text-center mt-2'
                                            >ex) IQ scores
                                            </p>
                                        </button>
                                    
                                        <button
                                        className='p-4 mt-4 w-5/6 rounded-lg shadow-md bg-slate-100'
                                        onClick={() => { 
                                            setDataType(4);
                                            nextStep();
                                            }}
                                        >
                                            <h2
                                            className='text-lg text-center font-medium'
                                            >Ratio
                                            </h2>

                                            <p 
                                            className='text-sm font-regular text-center mt-2'
                                            >Numeric scales, with a true zero</p>

                                            <p
                                            className='text-xs text-center mt-2'
                                            >ex) Age in years
                                            </p>
                                        </button>
                                    </div>
                                )}

                                {currentStep === 2 && (
                                <div>
                                    {(dataType === 1 || dataType === 2) ? (
                                        <div>
                                            <h2
                                            className='text-lg text-left justify-start items-start font-semibold tracking-wide mt-20 mb-12'
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
                                                className='text-lg text-left justify-start items-start font-semibold tracking-wide mt-20'
                                                >Are you comparing more than 2 groups?</h2>

                                                <div
                                                className='flex items-center justify-center'>
                                                    <div
                                                    className='flex-col mt-12'>
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
                                            className='text-3xl font-semibold tracking-wide mt-20'>
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
                                            className='text-base font-regular mt-4'>
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
            </div>
        </div>
    </div>
    </>
    );
}

export default HypothesisTesting;