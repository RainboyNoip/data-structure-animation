var React = require('react');
var DsaActions = require('../../actions/DsaActions');
var Renderer = require('./Renderer.d3');
var Legend = require('./Legend.react');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      text: 'Huffman-tree-animation',
      demo: 'create',
      help: true
    }
  },
  componentDidMount: function () {
    Renderer.init.bind(this)();
    DsaActions.runDemo('create', 'Huffman-tree-animation', false);
  },
  componentDidUpdate: function (prevProps) {
    if (this.props === prevProps || this.props.frame === undefined) {
      return;
    }
    Renderer.render(this.props.frame.status, this.props.delay, this.props.others);
  },
  render: function () {
    var inputs = [
      {button: {demo: "create", onClick: this._onClick.bind(this,'create'), value:"编码"}, items: [{onChange:this._onChange.bind(this),value:this.state.text,placeholder:"字符串"}]},
      {button: {help: this.state.help, onClick: this._onHelp, value:"帮助"}},
    ]
    var self = this;
    return (
      <div className="wrapper-code">
        <div className="list">
          {inputs.map(function (d,i) {
            var classes = "input-group" + (d.button.help || d.button.demo === self.state.demo ? " input-current" : "");
            var items = d.items ? d.items : [];
            return (
              <div key={i} className={classes}>
                <input className="input-button" readOnly={true} onClick={d.button.onClick} value={d.button.value} title={d.button.value} />
                <div>
                  {items.map(function (dd, ii) {
                    return (
                      <input key={ii} className="input-item" onChange={dd.onChange} value={dd.value} title={dd.value} placeholder={dd.placeholder} />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div ref="svg" className="scene"/>
        <Legend show={this.state.help} />
      </div>
    );
  },
  _onChange: function (e) {
    this.setState({text: e.target.value});
  },
  _onClick: function (cmd) {
    DsaActions.runDemo(cmd, this.state.text);
  },
  _onHelp: function () {
    this.setState({help: !this.state.help});
  },
});
