import React, { Component } from "react";

//import React from "react";
// import { prependOnceListener } from 'cluster';

class Card extends Component {


state = {
    guesslist: [],
    cardlist: []
  };

  select = num => {
        this.state.guesslist.push(num);
        console.log(this.state.guesslist);
        this.scramblenumbers();
  }; 

  scramblenumbers = () => {
      var temp = [];
    if  (this.state.cardlist.length < 10) {
        //console.log("this is your prps length:: "+this.props.cards.length+" thisis your cards length:: "+this.state.cardlist.length)
        //console.log("this is the right track")
        for (var i = 0; temp.length < this.props.cards.length; i++) {
          var x = Math.floor(Math.random() * 9);
          
          //var y  = x - 1;
        //   console.log("this is your random num:: "+x);
          //console.log(this.state.cardlist.includes(y));
          if (temp.includes(this.props.cards[x])===false) {
            // let newState = { cardlist:[...this.state.cardlist, this.props.cards[x].id]}
            temp.push(this.props.cards[x]);
            
        }
        //console.log(temp);
        this.setState({ cardlist: temp }, () => {
            console.log(this.state.cardlist);
        });
    
        //   console.log(this.props.cards[i].id);
        //   if (this.props.cards[i].id===y) {
        //     for (var j = 0; j < this.state.cardlist.length; j++) {
        //         if (this.state.cardlist[j].id===this.props.cards[i].id) {
        //             console.log("j is i");
        //         }
                
        //     }
        //     this.state.cardlist.push(this.props.cards[i].id);
        //     console.log(this.state.cardlist);
        //   }
        }
    }
  }

  componentDidMount() {
    this.scramblenumbers();
  }

// function Card(props) {
    render() {
    return (<React.Fragment>
            {this.state.cardlist.map( card =>
                
            <div className="card text-white bg-dark mb-3">
                <div className="card-body" onClick={() => this.select(card.name)}>
                    <h5 className="card-title">{card.name}</h5>
                    {/* <button onClick={() => this.deleteBook(card.name)}>{card.name}</button> */}
                    <p className="card-text"></p>
                </div>
            </div>
                 )}
    </React.Fragment>
    );
    }
}

export default Card;
