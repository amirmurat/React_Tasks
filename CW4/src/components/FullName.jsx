import { useCallback, useRef, useState } from "react";

function FullName() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });

  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  const showData = useCallback(() => {
    if (data) {
      alert(`First Name: ${data.firstName}, Last Name: ${data.lastName}`);
    }
  }, [data]);

  return (
    <>
      <input
        type="text"
        placeholder="First Name"
        value={data.firstName}
        onChange={(e) =>
          setData({ firstName: e.target.value, lastName: data.lastName })
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        ref={inputRef}
        value={data.lastName}
        onChange={(e) =>
          setData({ firstName: data.firstName, lastName: e.target.value })
        }
      />
      <button onClick={handleFocus}>Focus Last Name</button>
      <button onClick={showData}>Show Data</button>
    </>
  );
}

export default FullName;
