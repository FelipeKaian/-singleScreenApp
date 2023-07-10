import React, { Fragment, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import { AppBar } from '../components/appBar';
import { userService } from '../services/userService';
import { UsersRows } from '../components/userRows';

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    userService
      .getUsers()
      .then((res) => {
        setUsers(res.data.users);
        setLoading(false);
      })
      .catch((err) => {
        Alert.alert('Ocorreu um erro', err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Fragment>
      <AppBar />
      <View style={{ flex: 1 }}>
        {!loading ? (
          <UsersRows users={users}/>
        ) : (
          <View
            style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
          >
            <ActivityIndicator size={'large'} />
          </View>
        )}
      </View>
    </Fragment>
  );
};
