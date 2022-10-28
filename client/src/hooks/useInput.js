import { useState } from 'react';

const useInput = (init, passed, type) => {
    const [value, setValue] = useState(init);
    const [pass , setPass] = useState(passed);
    const bind = {
        required : "required",
        value,
        pass,
        type,
        setPass,
        onChange: (e) => {
            if(e.target.value.length <30)
                setValue(e.target.value);
        }
    }

    return [value, bind];

}

export default useInput;