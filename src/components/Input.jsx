import React,{useId} from 'react'

//forwardRef is a react hook(rarely) used when the input is designed in
//a component and it has to be used in various other components
// then we need the reference of that input to use anywhere in the App
const Input=React.forwardRef(function Input({
    label,
    //by default type,user can overwrite
    type="text",
    className='',
    //any property if user wana add.
    ...props
},ref){
    const id=useId()
    return(
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1' 
            htmlFor={id}> {label} </label>}
            <input type={type}
            className={`px-3 py-3 rounded-lg bg-white text-black outline-none
                focus:bg-gray-50 duration-200 border border-gray-200 w-full
            ${className}`}
            ref={ref}
            {...props}
            id={id} />
        </div>  
    )


}
)
export default Input