import { StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Divider } from './divider';
import { TouchableOpacity } from 'react-native';
import { Fragment, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export const Card = ({ user }) => {
  const [touched, setTouched] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [editable, setEditable] = useState(false);

  return (
    <Fragment>
      {!deleted && (
        <TouchableOpacity
          onPress={() => {
            if (!editable) {
              setTouched(!touched);
            }
          }}
        >
          <LinearGradient
            colors={['#2DACDC', '#2AACC9', '#35AD68']}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={styles.gradientBorder}
          >
            <View
              style={{ ...styles.cardContainer, opacity: touched ? 0.3 : 1 }}
            >
              <TextInput style={styles.nameText} editable={editable}>
                {user?.name}
              </TextInput>

              <Divider color={'#525251'} />

              <View>
                <Text style={styles.labels}>Email</Text>
                <TextInput style={styles.info} editable={editable}>
                  {user?.email}
                </TextInput>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                }}
              >
                <View style={styles.infoRow}>
                  <View>
                    <Text style={styles.labels}>Age</Text>
                    <TextInput
                      style={styles.info}
                      editable={editable}
                      inputMode='numeric'
                    >
                      {user?.age}
                    </TextInput>
                  </View>
                  <View>
                    <Text style={styles.labels}>Id</Text>
                    <Text style={styles.info}>{user?.id}</Text>
                  </View>
                </View>

                <View>
                  {editable && (
                    <TouchableOpacity
                      onPress={() => {
                        setEditable(false);
                      }}
                    >
                      <View style={styles.saveButton}>
                        <Text style={{ color: 'white', fontSize: 16 }}>
                          Save
                        </Text>
                        <MaterialIcons
                          name='check'
                          size={16}
                          color={'white'}
                        ></MaterialIcons>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
                
              </View>
            </View>
            {touched && (
              <View style={styles.overlayContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setTouched(false);
                    setEditable(true);
                  }}
                >
                  <MaterialIcons
                    name='edit'
                    size={70}
                    color={'white'}
                  ></MaterialIcons>
                </TouchableOpacity>
                <Divider color={'white'} size={100} vertical />
                <TouchableOpacity
                  onPress={() => {
                    setDeleted(true);
                  }}
                >
                  <MaterialIcons
                    name='delete'
                    size={70}
                    color={'white'}
                  ></MaterialIcons>
                </TouchableOpacity>
              </View>
            )}
          </LinearGradient>
        </TouchableOpacity>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  gradientBorder: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    margin: 8,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 2,
    padding: 16,
    gap: 5,
    minWidth: 228,
  },
  nameText: {
    fontFamily: 'Raleway-Bold',
    fontSize: 31,
    color: '#525251',
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    flex: 1,
  },
  labels: { fontSize: 14, color: '#525251', fontFamily: 'Raleway-Bold' },
  info: { fontSize: 18, color: '#525251', fontFamily: 'Raleway' },
  saveButton: {
    backgroundColor: '#525251',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    gap: 4,
  },
  overlayContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    gap: 32,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },
});
