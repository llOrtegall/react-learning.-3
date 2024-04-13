interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input ({ ...props }: Props): JSX.Element {
  return (
    <input className="p-2 rounded-md border-none outline-none"
    {...props} />
  )
}
