import { useRef } from 'react'
import tw from 'twin.macro'

interface InputProps {
  name: string
  value?: string
  setValue: React.Dispatch<React.SetStateAction<string>>

  /** Specifies the height of the text area (in lines). Default value is 2 */
  rows?: number
  placeholder?: string
  autoFocus?: boolean
  customTextClassName?: string
  disabled?: boolean
  type?: string
}

const Input = (props: InputProps) => {
  const {
    name,
    value,
    setValue,
    rows,
    placeholder,
    autoFocus = false,
    customTextClassName,
    disabled,
    type
  } = props

  const ref = useRef<HTMLInputElement>(null)

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const containerClassName = CONTAINER_CLASSNAME

  return (
    <div className={containerClassName}>
      <InputInput
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        name={name}
        draggable={false}
        className={customTextClassName}
        disabled={disabled}
        type={type}
      />
    </div>
  )
}

export default Input

const InputInput = tw.input`min-w-[320px] text-black focus:outline-none !ring-0 resize-none border-[1px] border-gray rounded-[8px] p-[16px] bg-white`

const CONTAINER_CLASSNAME = 'flex flex-col space-y-[4px]'
