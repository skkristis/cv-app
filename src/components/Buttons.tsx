export default function Buttons({ setFunc }: any) {
  function changeHandler() {
    setFunc((prevState: any) => [...prevState, {}]);
  }

  return (
    <>
      <button className="btn" onClick={changeHandler}>
        Add
      </button>
    </>
  );
}
