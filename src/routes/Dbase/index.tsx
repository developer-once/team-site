import React, { useState, useCallback } from 'react';
import {
  Form,
  Select,
  Input,
  Button,
  Drawer,
  Radio,
  Space,
} from 'antd';
import "./index.css"

const { Search } = Input;
const { Option } = Select;

function Dbase() {
  const [ page, setPage ] = useState(1);
  const [ total, setTotal ] = useState(1);
  const [ form ] = Form.useForm();
  const [ formData, setFormData ] = useState({
    fundsNo: "",
  });
  const [formChange, setFormChange] = useState(false);
  const [ visible, setVisible ] = useState(false);

  // ---- 提交表单 ----
  const onFinish = useCallback((values: any) => {
    setFormData(values);
  }, []);

  const changeRouter = () => {
    window.location.href = "/xux/base"
  }

  const onClose = () => {
    setVisible(!visible);
  }

  return (
    <div className='wrapper'>
      {/* ---- Form ---- */}
      <div className='search-block'>
        <Search className='search-input' placeholder={"项目名"}></Search>
        <Button className='create-button' type="primary" onClick={() => {
          setVisible(true);
        }}>创建项目</Button>
      </div>

      {/* ---- List ---- */}
      <div className='list-block block'>
        {
          [1, 2, 3, 4].map((item: any, index: number) => {
            return (
              <div className='list-item' key={index}>
                <div className='item-box'>
                  <p className='title'>测试应用</p>
                  <Button onClick={changeRouter}>查看项目</Button>
                </div>
                <div className='item-box'>
                  <div className='text'>desc</div>
                  <div className='text'>状态：</div>
                  <div className='text'>版本：1.0</div>
                </div>
              </div>
            )
          })
        }
      </div>

      {/* ---------- 弹窗 ---------- */}
      <Drawer
        width={720}
        footer={
          <Space className='drawer-footer'>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
        title="创建项目"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Form
          className="block-form"
          form={form}
          name="topUrl"
          onValuesChange={() => {
            setFormChange(true);
          }}
          onFinish={onFinish}
        >
          {/* --- 项目名称 --- */}
          <Form.Item
            labelAlign="left"
            name="name"
            className='right-item'
            label={"项目名称"}
          >
            <Input></Input>
          </Form.Item>
          {/* --- 项目描述 --- */}
          <Form.Item
            labelAlign="left"
            name="desc"
            className='right-item'
            label={"项目描述"}
          >
            <Input></Input>
          </Form.Item>
          {/* --- 项目类型 --- */}
          <Form.Item
            labelAlign="left"
            name="type"
            className='right-item'
            label={"项目类型"}
          >
            <Radio.Group defaultValue={1}>
              <Radio value={1}>ProCode</Radio>
              <Radio value={2}>低代码</Radio>
            </Radio.Group>
          </Form.Item>
          {/* --- 项目模版 --- */}
          <Form.Item
            labelAlign="left"
            name="template"
            className='right-item'
            label={"项目模版"}
          >
            <Radio.Group defaultValue={1}>
              <Radio value={1}>react 子项目</Radio>
              <Radio value={2}>vite 项目</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Drawer>

    </div>
  )
}

export default Dbase;