import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const FluidTextContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: ${(props) => props.fontSize}px;
`;

const isOverflowing = (el) => {
  return el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
};

export const FluidText = ({ maxSize, minSize, children }) => {
  const ref = useRef();
  const [fontSize, setFontSize] = useState(maxSize);

  // reset font-size when the text (children) changes - helps text 'grow' when text is reduced
  useEffect(() => {
    setFontSize(maxSize);
  }, [children, maxSize]);

  // decrease font-size if overflowing until minSize font size
  useEffect(() => {
    const decrementFontSize = () => setFontSize(fontSize - 1);

    if (fontSize > minSize && isOverflowing(ref.current)) {
      decrementFontSize();
    }
  }, [children, fontSize, minSize]);

  return (
    <FluidTextContainer fontSize={fontSize} ref={ref}>
      {children}
    </FluidTextContainer>
  );
};

FluidText.defaultProps = {
  maxSize: '32',
  minSize: '12',
};
