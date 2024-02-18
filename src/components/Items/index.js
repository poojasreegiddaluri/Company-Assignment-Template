import './index.css'

const Items = props => {
  const {eachDetails} = props
  const {title, body} = eachDetails
  return (
    <li className="list-item">
      <h1 className="heading">{title}</h1>
      <p className="para">{body}</p>
    </li>
  )
}

export default Items
