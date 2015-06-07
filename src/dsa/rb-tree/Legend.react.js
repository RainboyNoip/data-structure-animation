var React = require('react');
module.exports = React.createClass({
  render: function () {
    var inlineStyle = {
      display: this.props.show ? 'block' : 'none'
    };
    return (
      <svg className="legend" width="210" height="100" style={inlineStyle}>
        <rect className="outline" stroke="black" x="0" y="0" width="200" height="90"></rect>
        <g transform="translate(15,20)">
          <g transform="translate(0,0)">
            <line className="parent" x1="0" y1="0" x2="30" y2="0" />
          </g>
          <g transform="translate(0,25)">
            <line className="child" x1="0" y1="0" x2="30" y2="0" />
          </g>
          <g transform="translate(0,50)">
            <line className="parent" x1="0" y1="0" x2="30" y2="0" />
            <line className="child" x1="0" y1="0" x2="30" y2="0" />
          </g>
          <g transform="translate(0,5)">
            <text x="40" y="0">父指针</text>
            <text x="40" y="25">子指针</text>
            <text x="40" y="50">父指针和子指针</text>
          </g>
        </g>
      </svg>
    )
  }
})
