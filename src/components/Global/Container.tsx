

const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-72">{children}</div>
  )
}

export default Container