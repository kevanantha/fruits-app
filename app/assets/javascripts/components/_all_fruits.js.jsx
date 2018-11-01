class AllFruits extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fruits: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/fruits.json')
      .then(res => { return res.json() })
      .then(data => { this.setState({ fruits: data }) })
  }

  render() {
    const fruits = this.state.fruits.map(fruit => {
      return (
        <div key={fruit.id}>
          <div>{fruit.name}</div>
          <div>{fruit.description}</div>
        </div>
      )
    })

    return (
      <div>
        {fruits}
      </div>
    )
  }
}
