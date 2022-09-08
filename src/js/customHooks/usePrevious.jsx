
import { useEffect, useRef } from 'react';

const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;


// on component use like this  const prevCount = usePrevious(count);, where count is a state variable