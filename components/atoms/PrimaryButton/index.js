import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: #fff;
  font-size: 20px;
  height: 50;
  border-radius: 10;
  width: 100%;
  justify-content: center;
`;

const Text = styled.Text`
  font-weight: 700;
  color: #000;
  letter-spacing: 1;
`;

type Props = {|
  +onPress: () => void,
  +title: string,
|};

export const PrimaryButton = (props: Props) => {
  const { onPress, title } = props;
  return (
    <Button onPress={onPress}>
      <Text>{title}</Text>
    </Button>
  );
};
