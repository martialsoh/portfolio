import React, { Component } from "react";
import './Scroll.css';
import { IoIosArrowUp } from 'react-icons/io';

class GoTop extends Component {
  state = {
    intervalId: 0,
    thePosition: false,
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
    window.scrollTo(0, 0);
  }

  onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  };

  scrollToTop = () => {
    let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  };

  renderGoTopIcon = () => {
    if (this.state.thePosition) {
      return (
        <>
          <div class="arrowUp">
            <ul>    
              <li><b><i className="fa fa-arrow" onClick={this.scrollToTop}>
               <IoIosArrowUp />
              </i></b></li>
            </ul>  
          </div>
        </>
      );
    }
  };


  render() {
    return <>{this.renderGoTopIcon()}</>;
  }
}

export default GoTop;