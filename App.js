import React, { Component } from "react";

import { CheckBox, Dimensions, ScrollView, TouchableOpacity, TextInput, StyleSheet, Text, View } from "react-native";

let screenWidth = Math.round(Dimensions.get('window').width);


class App extends Component {


  state = {
    FullName: '',
    email: '',
    password: '',
    selectedGender: '',
    arrayCheck:[]
  }
  checkBox_Test = (value) =>{
   
   let array1=this.state.arrayCheck
   if(array1.includes(value))
   {
     array1.pop()
   }
    else{
      array1.push(value)
    }
   this.setState({ arrayCheck: array1})
  }  
  buttonClick = (value) => {

    this.setState({ selectedGender: value });
  }
  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  handleFullName = (text) => {
    this.setState({ FullName: text })
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  login = (FullName, email, pass) => {
    alert("Sign Up Successfully...!")
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ color: 'white', textAlign: 'center', backgroundColor: 'Gray', fontSize: 25 }}>SIGN UP </Text>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="FullName"
            placeholderTextColor="#fff"
            autoCapitalize="none"
            onChangeText={this.handleFullName} />

          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#fff"
            autoCapitalize="none"
            onChangeText={this.handleEmail} />


          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#fff"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={this.handlePassword} />

          <View style={styles.HORIZONTAL_VIEW_FIELDS}>
            <TouchableOpacity onPress={() => this.buttonClick('male')}>
              <View style={styles.HORIZONTAL_VIEW_FOR_RADIOBUTTON}>
                {this.state.selectedGender === "male" ?
                  <View>
                    <View style={styles.SELECTEDCIRCLESTYLE} />
                    <View style={styles.SELECTEDCIRCLE_DOT_STYLE} />
                  </View>
                  :
                  <View style={styles.UNSELECTEDROUNDCIRCLE_STYLE} />
                }
                <Text style={{color:'white',fontSize: 15 }} >Male</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => this.buttonClick('female')}>
              <View style={ styles.HORIZONTAL_VIEW_FOR_RADIOBUTTON}>
                {this.state.selectedGender === "female" ?
                  <View>
                    <View style={styles.SELECTEDCIRCLESTYLE} />
                    <View style={styles.SELECTEDCIRCLE_DOT_STYLE} />
                  </View>
                  :
                  <View style={styles.UNSELECTEDROUNDCIRCLE_STYLE} />
                }
                <Text style={{color:'white',fontSize: 15}} >Female</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={ styles.HORIZONTAL_VIEW_FOR_RADIOBUTTON}>
          <CheckBox
            value={this.state.arrayCheck.includes('cricket') ? true : false }
         
            onChange={() => this.checkBox_Test('cricket')
          }
           style={{backgroundColor:'#fff'}}
          />
           <Text style={{color:'white',fontSize: 15}}>Cricket</Text>
           </View>
           <View style={ styles.HORIZONTAL_VIEW_FOR_RADIOBUTTON}>
          <CheckBox
            value={this.state.arrayCheck.includes('FootBall') ? true : false }
         
            onChange={() => this.checkBox_Test('FootBall')
          }
           style={{backgroundColor:'#fff'}}
          />
           <Text style={{color:'white',fontSize: 15 }}>FootBall</Text>
           </View>
           <View style={ styles.HORIZONTAL_VIEW_FOR_RADIOBUTTON}>
          <CheckBox
            value={this.state.arrayCheck.includes('Kho-Kho') ? true : false }
         
            onChange={() => this.checkBox_Test('Kho-Kho')
          }
           style={{backgroundColor:'#fff'}}
          />
           <Text style={{color:'white',fontSize: 15 }}>Kho-Kho</Text>
           </View>
           <View style={ styles.HORIZONTAL_VIEW_FOR_RADIOBUTTON}>
          <CheckBox
            value={this.state.arrayCheck.includes('Basket Ball') ? true : false }
         
            onChange={() => this.checkBox_Test('Basket Ball')
          }
           style={{backgroundColor:'#fff',}
           }
          />
           <Text style={{color:'white',fontSize: 15 }}>Basket Ball</Text>
           </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={
              () => this.login(this.state.FullName, this.state.email, this.state.password)
            }>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080"

  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'white',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: 'white',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: '#008080',
    alignContent: 'center',
    textAlign: 'center'
  },
  HORIZONTAL_VIEW_FIELDS: {
    flexDirection: 'row',
    width: (screenWidth * 0.55),
  },
  UNSELECTEDROUNDCIRCLE_STYLE: {
    height: (screenWidth * 0.05),
    width: (screenWidth * 0.05),
    borderWidth: 0.1,
    borderColor: 'white',
    borderRadius: (screenWidth * 0.025),
  },
  SELECTEDCIRCLESTYLE: {
    height: (screenWidth * 0.05),
    width: (screenWidth * 0.05),
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: (screenWidth * 0.025),
  },
  SELECTEDCIRCLE_DOT_STYLE: {
    height: (screenWidth * 0.025),
    width: (screenWidth * 0.025),
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: (screenWidth * 0.0145),
    borderWidth: 0.1,
    position: 'absolute',
    top: (screenWidth * 0.0126),
    left: (screenWidth * 0.012),
  },
  HORIZONTAL_VIEW_FOR_RADIOBUTTON: {
    flexDirection: 'row',
    alignContent: 'center',
    padding: 10,
  }


})
export default App;