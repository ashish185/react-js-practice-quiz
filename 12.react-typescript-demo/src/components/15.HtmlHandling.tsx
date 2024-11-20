/**
 * Problem: When we use some html elements there are so many props which are normally related to HTML.
 * For ex; onClick of Button etc.
 * So we don't need to pass every prop type.
 */
import React from 'react'
export const HtmlHandling = () => {
    const handleClick = () => {
        alert('we dont need to specify type for onClick in CustomButton component');
    }
    return (
        <div>HtmlHandling
            <CustomButton variant='primary' onClick={handleClick}>HtmlButton</CustomButton>
            <Input />
        </div>
    )
}

/* 
Use case: I want to restrict that children, so that children can be label only.
Ans: In that case we need to use Omit propery

*/
type CustomButtonProps = {
    variant: 'primary' | 'secondary',
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

const CustomButton = ({ variant, children, ...rest }: CustomButtonProps) => {
    return (<button {...rest} className={`class-with-${variant}`}>{children}</button>)
}

type InputProps = React.ComponentProps<'input'>

const Input = (props: InputProps) => {
    return <input {...props} />
};
