const Notification = ({success, message }) => {
  if (message === null) {
    return null
  }
  else if (success) {
    return (
      <div className="success">
        {message}
      </div>
    )
  }
  else {
    return (
      <div className="error">
        {message}
      </div>
    )
  }

}

export default Notification