import React, { useState, useCallback } from 'react';
import {
  Spin,
  Breadcrumb,
  Divider,
  Form,
  Select,
  Input,
  Button,
} from 'antd';
import "./index.css"

function Base() {
  return (
    <div className='wrapper'>
      {/* ----- 项目基础信息 ----- */}
      <div className='project-base'>
        <div className='base-item base-left'>
          <div className='base-text base-title'>名称：项目标题</div>
          <div className='base-text'>类型：ProCode</div>
          <div className='base-text'>版本： 1.0</div>
        </div>
        <div className='base-item base-right'>
          <div className='base-text'>发布版本：1.0</div>
          <div className='base-text'>监控大盘：地址</div>
          <div className='base-text'>类型：H5</div>
        </div>
        <Button type="primary">创建发布</Button>
      </div>

      {/* ----- 项目版本信息 ----- */}
      <div className='project-status'>
        {
          [1, 2, 3, 4, 5, 6].map((item: any, index: number) => {
            return (
              <div className='status-item'>
                <div>
                  <div className=''>环境：测试</div>
                  <div className=''>版本：1.0.1</div>
                </div>
                <div className='status-box'>
                  <Button>继续发布</Button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Base;