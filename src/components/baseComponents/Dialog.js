import React, { Component } from 'react';
import { Modal, Text, View } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Dialog = ({ children, visible, onAccept, onDecline }) => {

  const { cardSectionStyle, textStyle, containerStyle } = styles;
    return (
        <Modal
            animationType="slide"
            onRequestClose={() => {}}
            transparent
            visible={visible}
          >
          <View style={containerStyle}>
              <CardSection style={cardSectionStyle}>
                  <Text style={textStyle}>
                    {children}
                  </Text>
              </CardSection>
              <CardSection>
                <Button onPress={onAccept}> Yes </Button>
                <Button onPress={onDecline}> No </Button>
              </CardSection>
          </View>
        </Modal>
    );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
      backgroundColor: 'rgba(0,0,0,0.75)',
      position: 'relative',
      flex: 1,
      justifyContent: 'center'
  }
}

export { Dialog };
