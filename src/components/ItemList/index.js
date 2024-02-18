import {Component} from 'react'
import Item from '../Items'
import './index.css'

class ItemList extends Component {
  state = {
    itemDetails: [],
  }

  componentDidMount() {
    this.getItemData()
  }

  // Here we use this json website to get the data https://jsonplaceholder.typicode.com/guide/

  getItemData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const option = {
      method: 'GET',
    }
    const response = await fetch(url, option)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.map(each => ({
        userId: each.userId,
        id: each.id,
        title: each.title,
        body: each.body,
      }))
      this.setState({itemDetails: updatedData})
    }
  }

  render() {
    const {itemDetails} = this.state
    return (
      <div>
        <ul className="list-items-details">
          {itemDetails.map(each => (
            <Item eachDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default ItemList
