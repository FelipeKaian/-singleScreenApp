import React from 'react';
import { ScrollView, View } from 'react-native';
import { Card } from '../components/card';
import { StyleSheet } from 'react-native';

export const UsersRows = ({ users }) => {
  const buildUserRows = (users, usersPerRow = 10) => {
    let buildedUserRows = [],
      currentUserRow = [];

    for (user of users) {
      currentUserRow.push(user);
      if (currentUserRow.length == usersPerRow) {
        buildedUserRows.push(currentUserRow);
        currentUserRow = [];
      }
    }
    buildedUserRows.push(currentUserRow);

    return buildedUserRows;
  };

  const userRows = buildUserRows(users);

  return (
    <ScrollView>
      {userRows.map((userRow, index) => {
        return (
          <ScrollView
            contentOffset={{ x: 450 + 100 * index }}
            key={`userRow-${index}`}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.row}>
              {userRow.map((user) => {
                return <Card user={user} key={user?.id} />;
              })}
            </View>
          </ScrollView>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: { paddingHorizontal: 8, paddingVertical: 8, flexDirection: 'row' },
});
