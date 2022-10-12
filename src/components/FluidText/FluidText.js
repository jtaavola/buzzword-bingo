import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const FluidTextContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const FluidTextItem = styled.div`
  margin: auto;
  font-size: ${(props) => props.fontSize}px;
  text-align: center;
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
    <FluidTextContainer ref={ref}>
      <FluidTextItem fontSize={fontSize}>{children}</FluidTextItem>
    </FluidTextContainer>
  );
};

FluidText.defaultProps = {
  maxSize: '24',
  minSize: '12',
};
