const Guest = ({ children }) => {
  return (
    <main
      className='transition-all ease-in-out duration-200  flex flex-col justify-center items-center min-h-screen bg-nord6 dark:bg-nord0  p-5 md:w-[800px] md:mx-auto'
    >{children}
    </main>
  )
}

export default Guest
