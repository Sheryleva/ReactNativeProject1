import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Item({ item }) {
  const navigation = useNavigation()
  return (
    
    <View style={styles.listItem}>
      
      <Image source={{uri:item.photo}}  style={{width:70, height:70,borderRadius:35, borderColor: "grey", borderWidth:1, alignSelf:"center", resizeMode:'contain' }} />
      <View style={{alignItems:"center",flex:1}}>
      <TouchableOpacity style={{height:50,width:200}} onPress={() => navigation.navigate('ArticleDetailsScreen',{
          title : item.name,
          photo : item.photo,
          description : item.description,
          created_date : item.created_date
      })} >
        <Text style={{fontWeight:"bold"}}>{item.name}</Text>
        <Text numberOfLines={3} style= {{height:100,width:200,}} >{item.description}</Text>
        </TouchableOpacity>
      </View>
        <Text style= {{height:60,width:60, alignSelf: "center",justifyContent:"center"}}>31st August 2020</Text>
      
    </View>
   
  );
}

export default class ArticleListScreen extends React.Component {
  state = {
    data:[
        {   "name": "Jaguar",
            "description": "Jaguar is the luxury vehicle brand of Jaguar Land Rover, a British multinational car manufacturer with its headquarters in Whitley, Coventry, England. Jaguar Cars was the company that was responsible for the production of Jaguar cars until its operations were fully merged with those of Land Rover to form Jaguar Land Rover on 1 January 2013. Jaguar's business was founded as the Swallow Sidecar Company in 1922, originally making motorcycle sidecars before developing bodies for passenger cars. Under the ownership of S. S. Cars Limited the business extended to complete cars made in association with Standard Motor Co, many bearing Jaguar as a model name. The company's name was changed from S. S. Cars to Jaguar Cars in 1945.",
            "photo": "https://www.carlogos.org/logo/Jaguar-logo-2012-1920x1080.png",
            "created_date": "1st August 2020"
            
        },
        {
            "name": "BMW",
            "description": "Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational company which produces luxury vehicles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945. Automobiles are marketed under the brands BMW, Mini and Rolls-Royce, and motorcycles are marketed under the brand BMW Motorrad. In 2015, BMW was the world's twelfth-largest producer of motor vehicles, with 2,279,503 vehicles produced.[2] The company has significant motorsport history, especially in touring cars, Formula 1, sports cars and the Isle of Man TT.",
            "photo": "https://www.carlogos.org/car-logos/bmw-logo-2020-blue-white.png",
            "created_date": "11th August 2020"
        },
        {
            "name": "Ferrari",
            "description": "Ferrari is an Italian automotive manufacturer in the Formula One World Championship, also involved in high-end and high-performance racing cars, supercars, and luxury sports cars. The company was founded by Enzo Ferrari in 1939 out of Alfa Romeo's race division as Auto Avio Costruzioni, the company built its first car in 1940. However, the company's inception as an auto manufacturer is usually recognized in 1947, when the first Ferrari-badged car was completed. In 2014 Ferrari was rated the world's most powerful brand by Brand Finance. In June 2018, the 1964 250 GTO became the most expensive car in history, setting an all-time record selling price of $70 million.",
            "photo": "https://www.carlogos.org/car-logos/ferrari-logo-750x1100.png",
            "created_date": "3rd August 2020"
        },
        {
            "name": "Chrysler",
            "description": "Chrysler is one of the \"Big Three\" automobile manufacturers in the United States, headquartered in Auburn Hills, Michigan. The company will be renamed Stellantis once the merger of Fiat Chrysler Automobiles and Peugeot S.A. is completed in the first quarter of 2021. The original Chrysler Corporation was founded in 1925 by Walter Chrysler from the remains of the Maxwell Motor Company. In 1998, it was acquired by Daimler-Benz, and the holding company was renamed DaimlerChrysler. After Daimler divested Chrysler in 2007, the company existed as Chrysler LLC (2007–2009) and Chrysler Group LLC (2009–2014) before merging in 2014 with Italian holding company Fiat S.p.A. and becoming a subsidiary of its successor Fiat Chrysler Automobiles. ",
            "photo": "https://www.carlogos.org/logo/Chrysler-logo-2010-1920x1080.png",
            "created_date": "5th August 2020"
        },
        {
            "name": "Porsche",
            "description": "Porsche is a German automobile manufacturer specializing in high-performance and luxury sports cars, SUVs and sedans. Porsche was created in 1931 as a design engineering department by Ferdinand Porsche. Porsche AG is headquartered in Stuttgart and is owned by Volkswagen AG, which is itself majority-owned by Porsche Automobil Holding SE. Porsche's current lineup includes the 718 Boxster/Cayman, 911, Panamera, Macan, Cayenne, and Taycan.Porsche's company logo stems from the coat of arms of the Free People's State of Württemberg of Weimar Germany of 1918-1933, which had Stuttgart as its capital.",
            "photo": "https://www.carlogos.org/car-logos/porsche-logo-2100x1100.png",
            "created_date": "18th August 2020"
        },
        {
            "name": "Lamborghini",
            "description": "Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi. Ferruccio Lamborghini, an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with established marques, including Ferrari. The company was noted for using a rear mid-engine, rear-wheel drive. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis. ",
            "photo": "https://www.carlogos.org/car-logos/lamborghini-logo-1000x1100.png",
            "created_date": "4th August 2020"
        },
        {
            "name": "Bentley",
            "description": "Bentley Motors Limited is a British manufacturer and marketer of luxury cars and SUVs—and a subsidiary of the Volkswagen Group since 1998. Headquartered in Crewe, England, the company was founded as Bentley Motors Limited by W. O. Bentley in 1919 in Cricklewood, North London—and became widely known for winning the 24 Hours of Le Mans in 1924, 1927, 1928, 1929 and 1930. Prominent models extend from the historic sports-racing Bentley 4½ Litre and Bentley Speed Six; the more recent Bentley R Type Continental, Bentley Turbo R, and Bentley Arnage; to its current model line, including the Flying Spur, Continental GT, Bentayga and the Mulsanne—which are marketed worldwide, with China as its largest market as of November 2012.",
            "photo": "https://www.carlogos.org/logo/Bentley-logo-1920x1080.png",
            "created_date": "22nd August 2020"
        },
        {
            "name": "Tesla",
            "description": "Tesla, Inc., is an American electric vehicle and clean energy company based in Palo Alto, California. The company specializes in electric vehicle manufacturing, battery energy storage from home to grid-scale and, through its acquisition of SolarCity, solar panel and solar roof tile manufacturing. Tesla Motors was founded in July 2003 by engineers Martin Eberhard and Marc Tarpenning. The company's name is a tribute to inventor and electrical engineer Nikola Tesla.Tesla Model 3 was the world's best selling EV from 2018 to 2019 and had a maximum electric range of 500 km (310 miles) according to the EPA. It’s ahead of the competition in terms of powertrain technology, infotainment technology, and semi-autonomous driving features.",
            "photo": "https://www.carlogos.org/car-logos/tesla-logo-2200x2800.png",
            "created_date": "16th August 2020"
        },
        {
            "name": "Audi",
            "description": "Audi AG is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany. Audi-branded vehicles are produced in nine production facilities worldwide. The origins of the company are complex, going back to the early 20th century and the initial enterprises (Horch and the Audiwerke) founded by engineer August Horch; and two other manufacturers (DKW and Wanderer), leading to the foundation of Auto Union in 1932. The modern era of Audi essentially began in the 1960s when Auto Union was acquired by Volkswagen from Daimler-Benz.",
            "photo": "https://www.carlogos.org/logo/Audi-logo-2009-1920x1080.png",
            "created_date": "9th August 2020"
        },
        {
            "name": "Cadillac",
            "description": "The Cadillac Motor Car Division is a division of the American automobile manufacturer General Motors Company (GM) that designs and builds luxury vehicles. Its major markets are the United States, Canada, and China. Cadillac models are distributed in 34 additional markets worldwide. Cadillac automobiles are at the top of the luxury field within the United States. In 2019, Cadillac sold 390,458 vehicles worldwide, a record for the brand. Cadillac is among the first automobile brands in the world, second in the United States only to fellow GM marque Buick. The firm was founded from the remnants of the Henry Ford Company in 1902.[4] It was named after Antoine de la Mothe Cadillac, who founded Detroit, Michigan.",
            "photo": "https://www.carlogos.org/logo/Cadillac-logo-2014-1920x1080.png",
            "created_date": "15th August 2020"
        }
    ]
  }


  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6347',
    
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFDAB9",
    width:"90%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5,
    justifyContent: "center"
  }
});