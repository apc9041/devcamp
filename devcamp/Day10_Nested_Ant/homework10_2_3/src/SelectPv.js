import { Select } from 'antd';
import React, { useState } from 'react';

const { Option } = Select;

function SelectPv(value) {
  console.log(`selected ${value}`);
}

export default () => (
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="select one country"
   
    onChange={SelectPv}
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <div className="demo-option-label-item">
        <span role="img" aria-label="China">
          {/* 🇨🇳 */}
        </span>
        Bangkok    
      </div>
    </Option>
    <Option value="usa" label="USA">
      <div className="demo-option-label-item">
        <span role="img" aria-label="USA">
          {/* 🇺🇸 */}
        </span>
        Phuket
      </div>
    </Option>
    <Option value="japan" label="Japan">
      <div className="demo-option-label-item">
        <span role="img" aria-label="Japan">
          {/* 🇯🇵 */}
        </span>
        Chiang Mai
      </div>
    </Option>
    <Option value="korea" label="Korea">
      <div className="demo-option-label-item">
        <span role="img" aria-label="Korea">
          {/* 🇰🇷 */}
        </span>
        Khon Kaen
      </div>
    </Option>
    <Option value="korea" label="Korea">
      <div className="demo-option-label-item">
        <span role="img" aria-label="Korea">
          {/* 🇰🇷 */}
        </span>
        Chanthaburi
      </div>
    </Option>

  </Select>
);