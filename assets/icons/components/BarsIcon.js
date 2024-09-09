import React from 'react';
import { SvgXml } from 'react-native-svg';
import barsSvg from '../../icons/bars.svg'; // Se estiver usando o transformador SVG

const BarsIcon = ({ width = 24, height = 24, color = '#000' }) => {
    // Usando o conteúdo do SVG importado
    return (
        <SvgXml
            xml={barsSvg}
            width={width}
            height={height}
            style={{ overflow: 'visible' }}
            fill={color}
        />
    );
};

export default BarsIcon;
