import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button,TextInput,  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
	
	const [txt, setText] = useState('안녕하세요.');
	
	
  useEffect(() => {
	  loadData();
  }, []);
	
	const saveData = async (value) => {
	  try {
		  await AsyncStorage.setItem('assa', value)
		  console.log('저장');
	  } catch (e) {
		// saving error
	  }
	}
	
	const loadData = async () => {
	  try {
		const value = await AsyncStorage.getItem('assa')
		if(value !== null) {
			setText(value);
		}
	  } catch(e) {
		// error reading value
	  }
	}


	
  return (
	  <View style={{flex:1,}} >
		  <SafeAreaView style={{paddingTop:20,paddingBottom:20,
				  flex:1,backgroundColor:'#fc0'}}>
			  <StatusBar style="auto" />
			  <View style={{padding : 10, flexDirection:'row',
					  alignItemls:'center',justifyContent:'space-between'}}>
				  <Button title="저장"
					  onPress={()=>saveData(txt)}></Button>
				  <Text style={{fontSize:18,}}>메모장</Text>
				  <Button title="불러오기"
					  onPress={()=>loadData()}></Button>
			  </View>
			  <View style={{backgroundColor:'#eeeeee', flex:1,paddind:10, }}>
				  <TextInput value={txt}
					  onChangeText={txt => setText(txt) }
					  multiline
					  />
			  </View>
		  </SafeAreaView>
	  </View>
  );
}
