const SlotOrUnregistered: (args:{condition: any, slot: JSX.Element, loaded: boolean })=> JSX.Element = ({condition, slot, loaded}) => {
  return (
    <>
      {
        loaded
          ? condition
            ? <div>{slot}</div>
            : <div><p className="a-text-primary-medium"><i className="fas fa-exclamation-triangle" style={{color: '#ffb302'}}/> 未入力</p></div>
          : <></>
      }
    </>
  );
};

export {SlotOrUnregistered};