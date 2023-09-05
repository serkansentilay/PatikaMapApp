import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'
import MapView from 'react-native-maps'
import Config from "react-native-config"
import useFetch from './src/hooks/useFetch'
import Loading from './src/components/Loading/Loading'
import UserMarker from './src/components/marker/UserMarker'
import InfoCard from './src/components/Card/InfoCard'

const App = () => {
  const mapRef = useRef()
  const { data, error, loading } = useFetch(Config.API_URL)
  console.log(data, error, loading)
  const [user, setUser] = useState()
  const [isInfoModalVisibility, setInfoModalVisibility] = useState(false)

  const renderUserMarker = () => {
    return data.map(({ id, username, first_name, last_name, avatar, address: { coordinates } }) => {
      return (
        <UserMarker
          key={id}
          userImageURL={avatar}
          coordinates={{
            latitude: coordinates.lat,
            longitude: coordinates.lng
          }}
          onSelect={() => handleMarkerSelect(coordinates, { username, first_name, last_name, })}
        />
      )
    }
    )
  }

  const handleMarkerSelect = (coor, selectedUser) => {
    setUser(selectedUser)
    handleModalVisibility()
    mapRef.current.animateToRegion({
      latitude: coor.lat,
      longitude: coor.lng,
      latitudeDelta: 7,
      longitudeDelta: 7,
    }
    )
  }

  const handleModalVisibility = () => {
    setInfoModalVisibility(!isInfoModalVisibility)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        //ref, hepsinin kendine ait referansı dönüyor ve onların methods özelliklerini tetikleyebiliriz
        style={{ flex: 1 }}
      >
        {data && renderUserMarker()}

      </MapView>
      {loading && <Loading />}
      {user && <InfoCard
        user={user}
        visible={isInfoModalVisibility}
        close={handleModalVisibility}
      />}
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})