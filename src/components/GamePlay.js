import * as React from 'react'

export default function GamePlay (props) {

  const { onSubmit, onChange, values } = props
  
    return (<form onSubmit={onSubmit}>
      <label>
      Name: <input onChange={onChange} type="text" value={values.name} name="name"/>
      </label>
      <br></br>
      <label>
      Date: <input onChange={onChange} type="date" value={values.date} name="date"/>
      </label>
      <br></br>
      <label>
      Description: <textarea onChange={onChange} value={values.description} name="description"/>
      </label>
      <br></br>
      <button>Save</button>
      </form>
    )
  
}