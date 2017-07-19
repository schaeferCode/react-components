class GroceryListItem extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      done: false
    };
  }

  onHoverItem() {
    this.setState({
      done: !this.state.done
    });
  }

  render () {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <ul>
        <li style={style} onMouseOver={this.onHoverItem.bind(this)}>{this.props.item}</li>
      </ul>
    );
  }
}

var GroceryList = (props) => (
  <div>
    {props.items.map(item => <GroceryListItem item={item} />)}
  </div>
);

ReactDOM.render(<GroceryList items={['eggs', 'bread']} />, document.getElementById("app"));