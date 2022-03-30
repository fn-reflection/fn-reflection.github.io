import { FC } from 'react';

type Props = {
  rawString: string, 
  rowClass: string
};

const RenderNewLines: FC<Props> = ({rawString, rowClass=''}) => {
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