import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {toUpperFirst} from '../util'

const CovidListitem = props => {
    const {covid, onPressItemDetails} = props
    const {country} = covid.country
    return(
        <TouchableOpacity onPress={() => {
            onPressItemDetails(covid)
        }} >
            <View style={style.line}>
            <Image style={style.avatar}  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShgEn7EoKrPlAeXQA4veyofPoJ4U8Gusuaask1hcTgSInIj3JJ-sWQGhVxzyi20jk11OJWeSns7LC8XjF4VTkeGffradugpWzV2uIruYk&usqp=CAU&ec=45725304"}}/>
                <Text style={style.lineText} key={country}> 
                {`${covid.country}`}
                </Text>                 
            </View>
        </TouchableOpacity>
        
    )

}

const style = StyleSheet.create({
        line: {
            height:60,
            borderBottomWidth: 1,
            borderBottomColor: '#bbb',
            alignItems: 'center',
            flexDirection: 'row'
        },
        avatar: {
            aspectRatio: 1,
            marginLeft: 10,                       
            width: 50,
            height: 50,
            borderRadius:100
        },
        lineText: {
            fontSize: 20,
            paddingLeft: 20,
            flex: 7
        }
    }
)
export default CovidListitem
