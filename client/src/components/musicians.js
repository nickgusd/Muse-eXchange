import React, {Component} from 'react';
import Carousel from './Carousel/index'


class Musicians extends Component {
    render() {
        return (     
            <div id="content-5" className="content content--switch">
				<h2 className="c.grim__item-bg--5 ">Musicians</h2>
				<div className=".grim__item-bg--5 ">Who's who</div>
                <a href = "/profile/:username" className="grim__link grim__item-content" >View Artist</a>
                <Carousel />
                </div>

                
            //map through array of musicians into cards
        //     <div>
        //     <ul>
        //       {
        //         this.props.cities.map((city, id) => (
        //           <CitiesIndexItem key={id} city={city} />
        //         ))
        //       }
        //     </ul>
        //     {this.props.children}
        //   </div>
                
            

        )
    }
}

export default Musicians;