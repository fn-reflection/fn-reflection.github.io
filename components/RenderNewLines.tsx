const RenderNewLines: (args:{rawString: string, rowClass?: string})=> JSX.Element = ({rawString, rowClass=''}) => {
  const stringRows = rawString.split('\n');
  return (
    <>
      {
        stringRows.map((row, index) => (
          <>
            <span className={rowClass}>{row}</span>
            { index < stringRows.length -1 ? <br /> : null }
          </>
        )
        )
      }
    </>
  );
};

export {RenderNewLines};