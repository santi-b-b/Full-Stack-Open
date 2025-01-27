const Header = ({name}) => {
    console.log('El titulo del curso es: ', name)
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }

export default Header