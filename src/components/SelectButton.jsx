// This component is used to select the movie, when clicked, display the selection window

import { Component } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./Fonts.css";

export default class SelectButton extends Component {
  render() {
    return (
      <Button
        className="award-button"
        type="dashed"
        icon={<PlusOutlined style={{ fontSize: "10vw" }} />}
        size="large"
        onClick={this.props.onClick}
        // style={{
        //   marginBottom: "15vw",
        //   backgroundColor: "orange",
        //   color: "white",
        // }}
        style={{
          objectFit: "cover",
          height: "100%",
          width: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
          aspectRatio: "27/40",
          backgroundColor: "orange",
          color: "white",
        }}
      />
    );
  }
}
