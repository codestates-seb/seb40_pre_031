import { useState } from 'react';

//input에 전달할 값, 호출하는 컴포넌트에 전달하는 값,

const useInput = (init, passed, type, id) => {
    const [value, setValue] = useState(init);  // input에 넣을 값
    const [pass , setPass] = useState(passed); //유효성 검사 통과 되었는지 안되었는지

    /* id : lable과 연결할 값 */
    const bind = {
        required : "required",
        value,
        pass,
        type,
        id,
        setPass,
        onChange: (e) => {
            if(e.target.value.length <30)
                setValue(e.target.value);
        }
    }

    return [value, bind];

}

export default useInput;