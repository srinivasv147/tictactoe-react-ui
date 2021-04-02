import React, {Component} from 'react';

class List extends Component {
    render() {
      return (<ol>
        {this.props.tasks.map((task, ind) => <li key={ind}>{task}</li>)}
      </ol>);
    }
  }

export default List;