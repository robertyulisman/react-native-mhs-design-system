import * as d3 from 'd3-shape';
import { G, Path, Svg } from 'react-native-svg';
import { Toast } from '../../component';
import type { PieChartProps } from './type';

const PieChart = ({
  widthAndHeight,
  series,
  sliceColor,
  coverFill = undefined, // Default to undefined
  coverRadius,
  style = {},
}: PieChartProps): JSX.Element => {
  // Validating props
  series.forEach((s) => {
    if (s < 0) {
      throw new Error(
        `Invalid series: all numbers should be positive. Found ${s}`
      );
    }
  });

  const sum = series.reduce((previous, current) => previous + current, 0);
  if (sum <= 0) {
    Toast.show({
      text: 'Invalid series: sum of series is zero',
      type: 'error',
    });
    console.warn('Invalid series: sum of series is zero');
    // throw new Error('Invalid series: sum of series is zero');
  }

  if (sliceColor.length !== series.length) {
    Toast.show({
      text: `Invalid "sliceColor": its length should be equal to the length of "series". sliceColor.length=${sliceColor.length} series.length=${series.length}`,
      type: 'error',
    });
    // throw new Error(
    //   `Invalid "sliceColor": its length should be equal to the length of "series". sliceColor.length=${sliceColor.length} series.length=${series.length}`,
    // );
  }

  if (coverRadius !== undefined && (coverRadius < 0 || coverRadius > 1)) {
    Toast.show({
      text: `Invalid "coverRadius": It should be between zero and one. But it's ${coverRadius}`,
      type: 'error',
    });

    // throw new Error(
    //   `Invalid "coverRadius": It should be between zero and one. But it's ${coverRadius}`,
    // );
  }

  const radius = widthAndHeight / 2;
  const pieGenerator = d3.pie<number>().sort(null); // Explicitly define type
  const arcs = pieGenerator(series);

  return (
    <Svg style={style} width={widthAndHeight} height={widthAndHeight}>
      <G transform={`translate(${widthAndHeight / 2}, ${widthAndHeight / 2})`}>
        {arcs.map((arc, i) => {
          const arcGenerator = d3
            .arc<d3.PieArcDatum<number>>()
            .outerRadius(radius)
            .innerRadius(coverRadius ? coverRadius * radius : 0); // Set innerRadius conditionally

          return (
            <Path
              key={arc.index}
              fill={sliceColor[i]}
              d={arcGenerator(arc) || ''}
            />
          );
        })}

        {coverRadius && coverRadius > 0 && coverFill && (
          <Path
            key="cover"
            fill={coverFill} // Here coverFill can be string or undefined
            // @ts-ignore
            d={d3
              .arc()
              .outerRadius(coverRadius * radius)
              .innerRadius(0)
              .startAngle(0)
              .endAngle(2 * Math.PI)()} // Use 2 * Math.PI instead of 360
          />
        )}
      </G>
    </Svg>
  );
};

export default PieChart;
