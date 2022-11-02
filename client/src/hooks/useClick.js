import { useState } from 'react';

export const useClick = (fill) => {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    console.log(isClicked);
    setIsClicked(true);
  };
  const bind = {
    fill,
    className: 'Arrow',
    onClick,
  };
  return [bind];
};
