import React from 'react';
import {
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 View
} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {a:0,mass:0,result:0,resultText:""}
    this.calc = this.calc.bind(this)
  }
  calc(){
   let mci = this.state.mass / (this.state.a * this.state.a)
   let s = this.state
   s.result = mci
   if(s.result < 18.50){
     s.resultText ='💪You are too thin, go get some food!'
   }
    else if (s.result < 16.99){
     s.resultText ='😁 You are very under weight!'
    }
    else if (s.result < 18.49){
     s.resultText ='😎 you are still a little under weight!'
    }
    else if (s.result < 24.99) {
     s.resultText ='😃 You are GOOD to go!'
    }
    else if (s.result < 29.99) {
     s.resultText ='😆 You are a little over weight!'
    }
    else if (s.result < 34.99) {
     s.resultText ='😒 You are heavier than the normal!'
    }
    else if (s.result < 39.99) {
      s.resultText ='😜 You are obese man! Need a diet.'
    }
    else{
      s.resultText ='😢 Get your big fat ass to a gym, now!'
    }
   this.setState(s)


  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inData}>
          <TextInput autoCapitalize="none" placeholder="Kilos" keyboardType="numeric" style={styles.input} onChangeText={(a)=>{this.setState({a})}}/>
          <TextInput autoCapitalize="none" placeholder="Meter"  keyboardType="numeric" style={styles.input} onChangeText={(mass)=>{this.setState({mass})}}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calc}><Text style={styles.buttonText}>Calc BMI</Text></TouchableOpacity>
        <Text style={styles.result}>{this.state.result.toFixed(2)}</Text>
        <Text style={[styles.result,{fontSize:20}]}>{this.state.resultText}</Text>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inData:{
    flexDirection:'row',
  },
  input:{
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    marginTop:34,
  },
  button:{
   backgroundColor:"#9ACD32",
  },
  buttonText:{
    textAlign:"center",
    padding:30,
    fontSize:25,
    fontWeight:'bold',
    color:"green",
  },
  result:{
    alignSelf:"center",
    color:"lightGray",
    fontSize:45,
    fontWeight:'bold',
    padding: 6,
  },
});
