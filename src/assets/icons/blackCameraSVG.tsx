import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import { SVGColorInterface } from './interface.ts';

function SvgBlackCamera({color}: SVGColorInterface) {
  return (
    <Svg
      viewBox="0 0 1600 1600"
      width={64}
      height={64}>
      <Path
        d="M608 160h376v8h48v8h8v8h8v8h8v16h8v8h8v8h8v16h8v16h8v8h8v16h8v8h296v8h48v8h24v8h8v8h16v8h8v8h8v8h8v8h8v16h8v16h8v16h8v56h8v720h-8v80h-8v16h-8v16h-8v16h-8v16h-8v8h-8v8h-8v8h-16v8h-16v8h-16v8H144v-8h-24v-8h-8v-8h-8v-8H88v-8h-8v-8h-8v-8h-8v-16h-8v-8h-8v-16h-8v-48h-8V456h8v-56h8v-24h8v-8h8v-16h8v-8h8v-8h8v-8h8v-8h16v-8h8v-8h24v-8h40v-8h296v-8h8v-8h8v-16h8v-8h8v-16h8v-8h8v-16h8v-8h8v-8h8v-8h8v-8h8v-8h40v-8zM288 448v8h-8v8h-8v8h-8v8h-8v64h8v8h8v8h8v8h16v8h48v-8h16v-8h8v-16h8v-8h8v-48h-8v-16h-8v-8h-8v-8h-16v-8h-56zm440 32v8h-32v8h-24v8h-24v8h-16v8h-8v8h-16v8h-16v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v16h-8v8h-8v16h-8v16h-8v16h-8v16h-8v32h-8v32h-8v128h8v32h8v24h8v24h8v16h8v16h8v8h8v16h8v8h8v16h8v8h8v8h8v8h8v8h8v8h8v8h16v8h8v8h8v8h16v8h16v8h16v8h8v8h24v8h32v8h32v8h96v-8h48v-8h24v-8h24v-8h16v-8h16v-8h16v-8h8v-8h16v-8h8v-8h8v-8h16v-8h8v-8h8v-8h8v-16h8v-8h8v-8h8v-16h8v-8h8v-16h8v-16h8v-16h8v-16h8v-32h8v-40h8V776h-8v-32h-8v-24h-8v-24h-8v-16h-8v-16h-8v-16h-8v-16h-8v-8h-8v-8h-8v-16h-8v-8h-8v-8h-8v-8h-8v-8h-8v-8h-8v-8h-16v-8h-8v-8h-8v-8h-16v-8h-16v-8h-16v-8h-16v-8h-32v-8h-32v-8H728z"
        fill={color}
      />
      <Path
        d="M776 544h56v8h48v8h24v8h16v8h16v8h16v8h8v8h16v8h8v8h8v8h8v8h8v8h8v8h8v8h8v16h8v16h8v16h8v16h8v16h8v40h8v112h-8v24h-8v24h-8v24h-8v16h-8v8h-8v16h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-8v8h-16v8h-8v8h-16v8h-24v8h-16v8h-32v8H736v-8h-32v-8h-24v-8h-8v-8h-16v-8h-16v-8h-8v-8h-16v-8h-8v-8h-8v-8h-8v-8h-8v-8h-8v-16h-8v-8h-8v-16h-8v-16h-8v-8h-8v-24h-8v-24h-8v-56h-8v-32h8v-56h8v-32h8v-16h8v-16h8v-16h8v-8h8v-16h8v-8h8v-8h8v-8h8v-8h8v-8h8v-8h8v-8h16v-8h8v-8h16v-8h16v-8h24v-8h24v-8h48v-8z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgBlackCamera;
