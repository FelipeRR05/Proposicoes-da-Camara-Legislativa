import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropositionsScreen from './screens/PropositionsScreen';
import AgreeScreen from './screens/AgreeScreen';
import DisagreeScreen from './screens/DisagreeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [propositions, setPropositions] = useState([]);
  const [userVotes, setUserVotes] = useState({});

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Proposições">
          {(props) => (
            <PropositionsScreen
              {...props}
              propositions={propositions}
              setPropositions={setPropositions}
              userVotes={userVotes}
              setUserVotes={setUserVotes}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Concordo">
          {(props) => (
            <AgreeScreen
              {...props}
              propositions={propositions}
              userVotes={userVotes}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Discordo">
          {(props) => (
            <DisagreeScreen
              {...props}
              propositions={propositions}
              userVotes={userVotes}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
