import { useRef } from 'react'
import tw from 'twin.macro'

interface TextareaProps {
  name: string
  value?: string
  setValue: React.Dispatch<React.SetStateAction<string>>

  /** Specifies the height of the text area (in lines). Default value is 2 */
  rows?: number
  placeholder?: string
  autoFocus?: boolean
  customTextClassName?: string

  textCounter?: {
    maxLength: number
    customTextClassName?: string
  }
  disabled?: boolean
}

const Textarea = (props: TextareaProps) => {
  const {
    name,
    value,
    setValue,
    rows,
    placeholder,
    autoFocus = false,
    customTextClassName,
    textCounter,
    disabled,
  } = props

  const ref = useRef<HTMLTextAreaElement>(null)

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value)
  }

  const containerClassName = CONTAINER_CLASSNAME

  return (
    <div className={containerClassName}>
      <TextareaInput
        ref={ref}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        autoFocus={autoFocus}
        name={name}
        maxLength={textCounter?.maxLength}
        draggable={false}
        className={customTextClassName}
        disabled={disabled}
      />
    </div>
  )
}

export default Textarea

const TextareaInput = tw.textarea`min-w-[320px] text-black focus:outline-none !ring-0 resize-none border-[1px] border-gray rounded-[8px] p-[16px] bg-white focus:bg-gray`

const CONTAINER_CLASSNAME = 'flex flex-col space-y-[4px]'
