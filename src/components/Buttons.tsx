export default function Buttons({ setFunc }: any) {
  function changeHandler() {
    setFunc((prevState: any) => [...prevState, {}]);
  }

  return (
    <>
      <div className="Submit">
        <button className="btn">Generate PDF</button>
        <button className="btn">Load Example</button>
        <button className="btn">Reset</button>
      </div>
    </>
  );
}
