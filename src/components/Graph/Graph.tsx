import './Graph.scss';

interface IGraph {
  innerValue: number;
  innerMaxValue: number;
  outerValue: number;
  outerMaxValue: number;
  innerName: string;
  outerName: string;
}

export const Graph = ({
  innerValue,
  innerMaxValue,
  outerValue,
  outerMaxValue,
  innerName,
  outerName,
}: IGraph) => {
  const outerCircumference = 2 * Math.PI * 40;
  const innerCircumference = 2 * Math.PI * 25;
  const outerMaxLength = outerCircumference * 0.75;
  const innerMaxLength = innerCircumference * 0.75;
  const emptyColor = '#eee';
  const cx = 50;
  const cy = 50;

  const innerCoeff = innerValue / innerMaxValue;
  const outerCoeff = outerValue / outerMaxValue;

  const innerLength = innerMaxLength * innerCoeff;
  const outerLength = outerMaxLength * outerCoeff;

  return (
    <div className="graph">
      <svg className="graph__svg" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx={cx}
          cy={cy}
          r="40"
          fill="none"
          stroke={emptyColor}
          strokeDasharray={`${outerMaxLength} ${outerCircumference * 0.25}`}
          strokeWidth={2}
        />
        <circle
          cx={cx}
          cy={cy}
          r="40"
          fill="none"
          stroke="#aaa"
          strokeDasharray={`${outerLength} ${outerCircumference}`}
          strokeWidth={2}
        />
        <circle
          cx={cx}
          cy={cy}
          r="25"
          fill="none"
          stroke={emptyColor}
          strokeDasharray={`${innerMaxLength} ${innerCircumference * 0.25}`}
          strokeWidth={15}
        />
        <circle
          cx={cx}
          cy={cy}
          r="25"
          fill="none"
          stroke="#fc8403"
          strokeDasharray={`${innerLength} ${innerCircumference}`}
          strokeWidth={15}
        />
        <text
          className='graph__inner-percent'
          x={cx}
          y={cy + 5}
        >
          {Math.round(innerCoeff * 100)}%
        </text>
        <text
          className='graph__outer-percent'
          x={95}
          y={cy}
        >
          {Math.round(outerCoeff * 100)}%
        </text>
      </svg>
      <div className="graph__info">
        <div className="graph__info-item">
          <div className="graph__info-title">
            {innerName}
          </div>
          <div className="graph__info-numeric">
            {innerValue}&nbsp;<span className="graph__info-secondary">/&nbsp;{innerMaxValue}</span>
          </div>
        </div>
        <div className="graph__info-item">
          <div className="graph__info-title">
            {outerName}
          </div>
          <div className="graph__info-numeric">
            {outerValue}&nbsp;<span className="graph__info-secondary">/&nbsp;{outerMaxValue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
