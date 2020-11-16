import React from 'react'
import {ImageBackground, View, Text, Image, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper';

export default class CovidDetailsPage extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            "covid": props.route.params.covid,
        }
    }
    
    render(){        
    
    const dat = this.state.covid.updated_at      
        const ano = dat.substring(0, 4);
        const mes = dat.substring(5, 7);
        const dia = dat.substring(8, 10);
        const hora = dat.substring(11, 13);
        const minuto = dat.substring(14, 16)
        const segundo = dat.substring(17, 19)
       var data = `${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundo}`;
        
    

        return(
            <ScrollView style={styles.scrollView}>
            <View style={{alignItems:'center'}}>
            <ImageBackground source={{uri:'https://image.freepik.com/vetores-gratis/padrao-sem-emenda-de-coronavirus-covid-19-estilo-desenhado-de-mao-na-cor-vermelha-biologia-infeccao-por-virus-respiratorio_44285-1632.jpg'}} style={styles.image}>
                   
                   <View  style={styles.textoName}>
                    <Text style={styles.textoName}>País: {this.state.covid.country} {this.state.covid.cases}</Text>
                    <Text style={styles.textoName}>Casos: {this.state.covid.cases}</Text>
                    <Text style={styles.textoName}>confirmed: {this.state.covid.confirmed}</Text>                   
                    <Text style={styles.textoName}>Mortes: {this.state.covid.deaths}</Text>                    
                    <Text style={styles.textoName}>Recuperados: {this.state.covid.recovered}</Text>                  
                    <Text style={styles.textoName}>Atualizado em: {data}</Text>
                     </View>
                    </ImageBackground>
                   
                
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#FAFAFC',
        padding: 20,
        flex: 1,
        with:'100%'
    },
    image:{
         width: '100%',
         height: 400,
    },
    textoName: {        
       fontSize: 16,
       fontWeight: "bold",
       color: "white"
    }
}
)