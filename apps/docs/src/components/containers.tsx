import { twMerge } from 'tailwind-merge'

interface ExampleContainerProps {
  children: React.ReactNode
  className?: string
}

export const ExampleContainer = ({
  children,
  className,
}: ExampleContainerProps) => (
  <div
    className={twMerge(className, 'flex flex-col gap-4 h-fit mx-auto w-fit')}
  >
    {children}
  </div>
)
