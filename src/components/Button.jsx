import React from 'react'
export default function Button({children,
    type='submit',
    bgcolor='bg-blue-600',
    textColor='bg-white',
    // className means if user wants to add tailwind css.
    className='',
    ...props
}){

    return(
        <>
        {/* using variables (for css) if user wants to add  */}
        <button className={`px-4 py-2 rounded-lg ${bgcolor}
        ${textColor}  ${className}`} {...props}>{children}</button>
        </>
    )
}