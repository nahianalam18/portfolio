import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Button, Modal, Form, Input, Radio } from "antd";

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class Entry extends Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form
            action="alam.nahian18@gmail.com"
            method="post"
            enctype="text/plain"
            layout="vertical"
          >
            <Form.Item label="Your Name">
              {getFieldDecorator("title", {
                rules: [
                  {
                    required: true,
                    message: "Please enter your name"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Your email">
              {getFieldDecorator("senderemail")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description")(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator("modifier", {
                initialValue: "public"
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class CollectionsPage extends Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Click to Email me
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default CollectionsPage;
