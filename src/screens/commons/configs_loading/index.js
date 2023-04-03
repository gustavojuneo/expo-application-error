/* eslint-disable no-constant-condition */
import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { styles } from './styles';

const ConfigsLoading = ({ t }) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#999999" />
    <Text>{t('commons:carregando')}</Text>
  </View>
);

ConfigsLoading.propTypes = {
  t: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const Container = translate(['common'], { wait: true })(ConfigsLoading);
export default connect(mapStateToProps)(Container);
