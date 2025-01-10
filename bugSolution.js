```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);     
    };
  }, []);

  return (
    <View>
      <Text>{count}</Text>
    </View>
  );
};

export default MyComponent;
```