// import React from 'react';
// import 'antd/dist/antd.css';
// import './index.css';
// import { Checkbox, Divider } from 'antd';

// const CheckboxGroup = Checkbox.Group;

// const plainOptions = ['Apple', 'Pear', 'Orange'];
// const defaultCheckedList = ['Apple', 'Orange'];

// const CheckAccept = () => {
//   const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
//   const [indeterminate, setIndeterminate] = React.useState(true);
//   const [checkAll, setCheckAll] = React.useState(false);

//   const onChange = list => {
//     setCheckedList(list);
//     setIndeterminate(!!list.length && list.length < plainOptions.length);
//     setCheckAll(list.length === plainOptions.length);
//   };

//   const onCheckAllChange = e => {
//     setCheckedList(e.target.checked ? plainOptions : []);
//     setIndeterminate(false);
//     setCheckAll(e.target.checked);
//   };

//   return (
//     <>
//       <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
//         Check all
//       </Checkbox>
//       <Divider />
//       <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
//     </>
//   );
// };

// export default CheckAccept;

import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Checkbox } from 'antd';

function CheckAccept(e) {
  console.log(`checked = ${e.target.checked}`);
}

export default () => <Checkbox CheckAccept={CheckAccept}>Accept Term</Checkbox>;