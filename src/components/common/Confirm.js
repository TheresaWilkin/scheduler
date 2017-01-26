import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children }) => {
  return (
    <Modal>
      <View>
        <CardSection>
          <Text>{children}</Text>
        </CardSection>
        <CardSection>
          <Button>Yes</Button>
          <Button>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

export { Confirm };
