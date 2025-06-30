import { Children } from 'react';

export default function Filed({children,label,error}) {
    const {props} = Children.only(children)
  return (
    <div>
        {
            label && <label htmlFor={props.id}>{label}</label>
        }
        {
            children
        }
        {
          error && <p className='text-red-500 text-xs'>{error.message}</p>  
        }
    </div>
  )
}
