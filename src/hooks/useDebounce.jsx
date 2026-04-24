import React, { useEffect, useState } from 'react'

 export function useDebounce(value, delay=500) {
      const [debounced, setDebounced] = useState(value);

      useEffect(()=>{
        const Timer = setTimeout(()=>{
            setDebounced(value)
        }, delay)

        return clearTimeout(Timer)
      },[value, delay])

  return debounced
}
