
export default function CssTrial(): JSX.Element {
  return (
    <div>
      <article>
        <h1>CSS Box Model Q&A</h1>
        <h2>flexboxの高さが合わない</h2>
        <div style={{display: 'flex'}}>
          <div style={{paddingRight: '1rem'}}>
            ❌
            <div style={{display: 'flex'}}>
              <span>abc</span>
              <input type="button" value="button" style={{height: '30px'}}/>
            </div>
          </div>
          <div style={{paddingRight: '1rem'}}>
            ✅
            <div style={{display: 'flex'}}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <p>abc</p>
              </div>
              <input type="button" value="button" style={{height: '30px'}}/>
            </div>
          </div>
          <div style={{paddingRight: '1rem'}}>
            ✅
            <div style={{display: 'flex', alignItems: 'center'}}>
              <p>abc</p>
              <input type="button" value="button" style={{height: '30px'}}/>
            </div>
          </div>
        </div>

        <h2>inline-flexの高さが合わない</h2>
        <div style={{display: 'flex'}}>
          <div style={{paddingRight: '1rem'}}>
          ❌
            <div>
              <input type="button" value="button" style={{display: 'inline-flex', height: '18px', verticalAlign: 'middle'}}/>
              <input type="button" value="button" style={{display: 'inline-flex', height: '18px'}}/>
            </div>
          </div>
          <div style={{paddingRight: '1rem'}}>
          ✅
            <div>
              <input type="button" value="button" style={{display: 'inline-flex', height: '18px', verticalAlign: 'baseline'}}/>
              <input type="button" value="button" style={{display: 'inline-flex', height: '18px'}}/>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}