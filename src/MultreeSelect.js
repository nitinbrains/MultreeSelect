import React, { Fragment } from "react";
import "antd/dist/antd.css";
import { TreeSelect } from "antd";
import DownIcon from "./down.svg";
import "./App.css";

const { SHOW_CHILD, SHOW_ALL } = TreeSelect;

class MultreeSelect extends React.Component {
  state = {
    value: [],
  };

  componentDidMount() {
    const { defaultChecked } = this.props;
    this.setState({
      treeData: this.props.options,
      value: defaultChecked ? defaultChecked : [],
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.options !== prevProps.options) {
      this.setState({ treeData: this.props.options });
    }
    if (this.props.defaultChecked !== prevProps.defaultChecked) {
      this.setState({ value: this.props.defaultChecked });
    }
  }

  onChange = (value) => {
    this.setState({ value }, () => {
      this.props.onChange(this.state.value);
    });
  };

  render() {
    const { getChildValue, placeholder, width, showSearch, size } = this.props;
    const tProps = {
      treeData: this.state.treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: getChildValue ? SHOW_CHILD : SHOW_ALL,
      placeholder: placeholder ? placeholder : "Please Select",
      style: {
        width: width ? width : "47%",
      },
      showSearch: showSearch ? showSearch : true,
      dropdownMatchSelectWidth: true,
      labelInValue: true,
      treeNodeFilterProp: "title",
      size: size ? size : "large",
    };
    return (
      <Fragment>
        <TreeSelect
          maxTagPlaceholder={`${this.state.value.length} Selected`}
          maxTagCount={0}
          {...tProps}
          {...tProps}
        />
        <DownIcon
          style={{
            position: "relative",
            top: size === "large" ? "-4px" : "2px",
            left: "-2%",
          }}
        />
      </Fragment>
    );
  }
}

export default MultreeSelect;
