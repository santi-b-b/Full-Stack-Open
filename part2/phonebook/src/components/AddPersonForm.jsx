const AddPersonForm = ({ onSubmit, onChange}) => {
    return (
        <form  onSubmit={onSubmit}>
            <div>
              name: <input onChange={onChange}/>
            </div>
            <div>
              number: <input onChange={onChange}/>
            </div>
            <div>
              <button type="submit">add</button>
            </div>
          </form>
    )
  }
  export default AddPersonForm      
