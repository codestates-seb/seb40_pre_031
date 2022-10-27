import { useState } from 'react';

const useInput = (init) => {
    const [value, setValue] = useState(init);

    const bind = {
        required : "required",
        value,
        onChange: (e) => {
            setValue(e.target.value);
        }
    }

    return [value, bind];

}

export default useInput;