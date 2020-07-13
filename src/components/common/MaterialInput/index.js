/* eslint-disable no-nested-ternary */
import React, { PureComponent } from 'react';
import { Input } from 'antd';
import MaterialInputWrapper from './styles';

class MaterialInput extends PureComponent {
  componentDidMount() {}

  render() {
    const { placeholder, prefix, suffix, addonBefore, ...params } = this.props;
    return (
      <MaterialInputWrapper isPrefix={!!prefix} isSuffix={!!suffix}>
        <div className="header">
          {prefix}
          <span className="suffix">{suffix}</span>
          <label>{placeholder}</label>
        </div>
        <span className="bar" />
        {params.type === 'password' ? (
          <Input.Password {...params} />
        ) : addonBefore ? (
          <Input addonBefore={addonBefore} {...params} />
        ) : (
          <Input {...params} />
        )}
      </MaterialInputWrapper>
    );
  }
}

export default MaterialInput;
