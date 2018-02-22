import React,{Component} from 'react'
import {connect} from 'react-redux';
import {Charts} from '../components/charts.js';
import GoogleMap from '../components/google_map.js';
class WeatherList extends Component{

  constructor(props){
    super(props);
    //console.log("hola "+this.props.Weather);
  }

    gettingList(cityData){
      return cityData.map(data=>{

        const temps = data.list.map(hola=>hola.main.temp);
        const pressures = data.list.map(hola=>hola.main.pressure);
        const humiditys = data.list.map(hola=>hola.main.humidity);

        const lon = data.city.coord.lon;
        const lat = data.city.coord.lat;
        return(
        <tr key={data.city.name}>
            <td className="holaa"><GoogleMap lon={lon} lat={lat} /></td>
            <Charts data={temps} color="green"/>
            <Charts data={pressures} color="orange"/>
            <Charts data={humiditys} color="blue"/>
        </tr>
      );
      }
      );

    }
  render(){
    console.log(this.props.hola);
    console.log(this.props.Weather);

    return(
        <table className="table table-hover">
        <thead>
        <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humiduty</th>
        </tr>
        </thead>
        <tbody>
            {this.gettingList(this.props.Weather)}
            {this.props.hola}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  return{Weather : state.Weather , hola:state.hola}
}

export default connect(mapStateToProps)(WeatherList);
