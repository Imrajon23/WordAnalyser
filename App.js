
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button,} from 'react-native';
 
 export default class App extends Component {
   constructor(){
     super();
     this.state={
       word:" ",
       string:" ",
       ccount:0,
       cvowel:0,
       no_of_char:0
      }
   }

 
 analyze= () =>{
    let ccount=0,cvowel=0,no_of_char=0;
    let string=this.state.word;
    let str= string.split(' ',string.length);
    let word=this.state.word;
    
    no_of_char=word.length;
    for(var i=0;i<word.length;i++){
      let lchar=word[i].toLowerCase();
      if(lchar=='a' || lchar=='e' || lchar=='i' || lchar=='o' || lchar=='u')
        cvowel++;
      else
        ccount++;
    }
    this.setState({ccount:ccount,cvowel:cvowel,no_of_char:no_of_char});

 }
 
   render() {
     return (
       <View style={styles.container}>
      
        <Text>A Word Analyzer</Text>
        
         <TextInput onChangeText={(word) => this.setState({word})} placeholder='Type word'/>
         <Button color="#DCDCDC"  onPress={this.analyze}  title='Analyze'/>
         <Text>Word: {this.state.word}</Text>
         <Text>No of consonant: {this.state.ccount}</Text>
         <Text>No of vowel: {this.state.cvowel}</Text>
         <Text>No of characters: {this.state.no_of_char}</Text>
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });



