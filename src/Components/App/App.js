import React from 'react';
import './App.css';

//Components
import { Navigation } from '../Navigation/Navigation';
import { Cover } from '../Cover/Cover';
import { BoxCard } from '../Box-Card/Box-Card';
import { Testimonials } from '../Testimonials/Testimonials';

//Images
import portrait from "../Images/Derek-3.jpg";
import background from "../Images/96514.jpg";
import image1 from "../Images/96477.jpg";
import image2 from "../Images/96519.jpg";
import image3 from "../Images/96520.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: {
        imgSrc: [image1, image2, image3, image3],
        imgAlt: ['Text', 'Text2', 'Text3','#img4'],
        h2: ['Stocks | Financial Tool', 'Reddit', 'E-commerce Store', 'Saas Website'],
        date: ['January 11, 2022', 'March 18, 2022', 'June 14, 2022', 'April 2, 2022'],
        h5: ['Build your financial tool', 'An interactive copycat', 'See my shop', 'Your decision making website'],
        p: ['Stocks, Budget, net worth. Know where you are and project where you\'ll end up.', 'Post your thoughts, see the news, share your opinion. Your interactive reddit demo', 'Shop with filters, add your items to the cart, check out the bottom line.', 'See how impactful this new decision-making software can be in your life.'],
        buttonLink: ['#', '#2', '#3','#img4'],
        buttonText: ['Check it out', 'Let\'s go', 'Get it', 'You ready for this']
      },
      randomBox: [0, 1, 2],
      shuffle: true
    };

    this.shuffleBoxes = this.shuffleBoxes.bind(this);
    this.getRandNum = this.getRandNum.bind(this);
  }
  

  getRandNum(num) {
    return Math.floor(Math.random() * num);
  }

  shuffleBoxes() {  
    // alert('We\'re in');
    if(this.state.shuffle) {
      const length = this.state.boxes.imgSrc.length;
      var numbers = [];
      do {
        var temp = this.getRandNum(length);
        if(temp !== numbers[0] && temp !== numbers[1] &&temp !== numbers[2]) {
          numbers.push(temp);
        }
      } while(numbers.length !== 4)
      // console.log(numbers);
      this.setState({
        randomBox: numbers,
        shuffle: false
      })
    }

  }   


  render() {
    return (
      <div>
        <div className="navigationComponent">
          <Navigation menuTitles={['Home', 'Projects', 'About', 'Contact']}
                    menuLinks={['#Home', '#Projects', '#About', '#Contact']}
                    logoLink={'#'}
                    logoImg={'#'}
                    logoAlt={'Here'}
                    logoText={'START.'}
                    />
        </div>
        <div className="coverComponent">
          <Cover h1={'Derek Lord'}
              h3={'Marketer and Developer'}
              p={'Here is the infomation about who I am. Here is some more filler text to add in. I\'m just going to typing so it looks like something'}
              buttonA={'Click me'}
              buttonALink={'#'}
              buttonB={`See more`}
              buttonBLink={'#'}
              portrait={portrait}
              portraitAlt={'Portrait of Derek'}
              background={background}/>
        </div>
        <div className='sectionTitle'><h2>Projects</h2></div>
        <div className='boxcardComponent'>
          <BoxCard test={this.shuffleBoxes()}
                    imgSrc={this.state.boxes.imgSrc[this.state.randomBox[0]]}
                    imgAlt={this.state.boxes.imgAlt[this.state.randomBox[0]]}
                    date={this.state.boxes.date[this.state.randomBox[0]]}
                    h2={this.state.boxes.h2[this.state.randomBox[0]]}
                    h5={this.state.boxes.h5[this.state.randomBox[0]]}
                    p={this.state.boxes.p[this.state.randomBox[0]]}
                    buttonLink={this.state.boxes.buttonLink[this.state.randomBox[0]]}
                    buttonText={this.state.boxes.buttonText[this.state.randomBox[0]]}/>
          <BoxCard imgSrc={this.state.boxes.imgSrc[this.state.randomBox[1]]}
                    imgAlt={this.state.boxes.imgAlt[this.state.randomBox[1]]}
                    date={this.state.boxes.date[this.state.randomBox[1]]}
                    h2={this.state.boxes.h2[this.state.randomBox[1]]}
                    h5={this.state.boxes.h5[this.state.randomBox[1]]}
                    p={this.state.boxes.p[this.state.randomBox[1]]}
                    buttonLink={this.state.boxes.buttonLink[this.state.randomBox[1]]}
                    buttonText={this.state.boxes.buttonText[this.state.randomBox[1]]}/>
          <BoxCard imgSrc={this.state.boxes.imgSrc[this.state.randomBox[2]]}
                    imgAlt={this.state.boxes.imgAlt[this.state.randomBox[2]]}
                    date={this.state.boxes.date[this.state.randomBox[2]]}
                    h2={this.state.boxes.h2[this.state.randomBox[2]]}
                    h5={this.state.boxes.h5[this.state.randomBox[2]]}
                    p={this.state.boxes.p[this.state.randomBox[2]]}
                    buttonLink={this.state.boxes.buttonLink[this.state.randomBox[2]]}
                    buttonText={this.state.boxes.buttonText[this.state.randomBox[2]]}/>
            <BoxCard imgSrc={this.state.boxes.imgSrc[this.state.randomBox[3]]}
                    imgAlt={this.state.boxes.imgAlt[this.state.randomBox[3]]}
                    date={this.state.boxes.date[this.state.randomBox[3]]}
                    h2={this.state.boxes.h2[this.state.randomBox[3]]}
                    h5={this.state.boxes.h5[this.state.randomBox[3]]}
                    p={this.state.boxes.p[this.state.randomBox[3]]}
                    buttonLink={this.state.boxes.buttonLink[this.state.randomBox[3]]}
                    buttonText={this.state.boxes.buttonText[this.state.randomBox[3]]}/>
        </div>
        <div className='sectionTitle'><h2>Testimonial</h2></div>
        <div className='TestimonalsComponent'>
          <Testimonials />
        </div>
      </div>
    )
  }
}

export default App;
