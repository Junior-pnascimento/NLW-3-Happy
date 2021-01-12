import React from 'react';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { Dimensions, Text, View, StyleSheet } from 'react-native';

import mapMarker from '../images/map-marker.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function OrphanagesMap() {
  const { navigate } = useNavigation();
  function handleNavigateToOrphanagesDetails() {
    navigate('OrphanageDetails');
  }
  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={{
        latitude: -3.7375458,
        longitude: -38.6215175,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008
      }}>
        <Marker icon={mapMarker} calloutAnchor={{
          x: 2.7,
          y: 0.8
        }} coordinate={{
          latitude: -3.7375458,
          longitude: -38.6215175,
        }}>
          <Callout tooltip style={styles.calloutContainer} onPress={handleNavigateToOrphanagesDetails}>
            <Text style={styles.calloutText}>
              Lar das meninas
            </Text>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>

        <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {}}>
          <Feather name='plus' size={20} color='#fff' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089a5',
    fontSize: 14,
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3
  },
  footerText: {
    fontFamily: 'Nunito_700Bold',
    color: '#8fa7b3'
  },
  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    
    justifyContent: 'center',
    alignItems: 'center'
  }
});