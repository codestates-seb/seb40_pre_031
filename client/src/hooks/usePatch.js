/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react';
import { myApi } from '../api/apis';

const usePatch = (userId, data) => {
  const [value, setValue] = useState('');

  // 바뀌는 칸 라벨 반환하고 각자 맞게 실행하는 걸로 할까?

  const PatchName = (userId, data) =>
    myApi
      .patchName(userId, data)
      .then((res) => {
        setValue(res);
      })
      .catch((err) => console.log(err));

  const PatchPassword = (userId, data) =>
    myApi
      .patchPassword(userId, data)
      .then((res) => {
        setValue(res);
      })
      .catch((err) => console.log(err));

  const PatchColor = (userId, data) =>
    myApi
      .patchColor(userId, data)
      .then((res) => {
        setValue(res);
      })
      .catch((err) => console.log(err));
};
