const Button = ({text, onClick}) => {

  return(
    <div>
       <button
          className='py-3 px-10 rounded-md bg-gray-500 hover:bg-gray-900 text-white' onClick={onClick}>
          {text}
        </button>
    </div>
  )
}

export default Button