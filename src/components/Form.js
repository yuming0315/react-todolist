import React from 'react';
import './Form.css';

const Form = (props) => {
  //props state children 으로 부모 나 자식 구분
  //{value, onChange, onCreate, onKeyPress}
  // const value = props.value;
  // const onChange = props.onChange;
  // const onCreate = props.onCreate;
  // const onKeyPress = props.onKeyPress;
  const {value, onChange, onCreate, onKeyPress} = props
  //props로 받아온 아이들을 풀어서 구조분해할당 위의 (props)대신 위의 { } 내용 넣어서 바로 할당가능
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;