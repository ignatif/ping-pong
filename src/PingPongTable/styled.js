import styled from 'styled-components'

import {
  tableLongitudeRatio,
  tableWidthRatio,
  purple,
  green,
  borderRadius,
  borderWidth,
} from '../constants/constants';

export const Table = styled.div`
  background-color: ${purple};
  width: ${tableLongitudeRatio * 70}px;
  height: ${tableWidthRatio * 70}px;
  border-radius: ${borderRadius}px;
  position: relative;
`;

export const LeftHalf = styled.div`
  background-color: ${green};
  width: ${(tableLongitudeRatio * 70 / 2) - (borderWidth / 2)}px;
  height: ${tableWidthRatio * 70}px;
  border-radius: ${borderRadius}px 0 0 ${borderRadius}px;
  border: ${borderWidth}px solid ${purple};
  box-sizing: border-box;
`;

export const Ball = styled.div`
  border-radius: 100%;
  background-color: ${purple};
  border: ${borderWidth} solid ${green};
  width: 30px;
  height: 30px;
  position: absolute;
  top: 140px;
  left: 80px;
`;

export const Player = styled.div`
  border-radius: 100%;
  width: 60px;
  height: 60px;
  position: absolute;
  ${props => props.right && 'right: -30px;' }
  ${props => props.left && 'left: -30px;' }

  ${props => props.right && 'top: 30px;' }
  ${props => props.left && 'bottom: 30px;' }

  background-color: ${props => props.right ? green : purple};
  border: ${borderWidth}px solid ${props => props.right ? purple : green};
`;
