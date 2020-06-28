import React from "react";
import ReactDOM from "react-dom";
import styles from './app.module.css';

const e = React.createElement;

class ReactImageQuotes extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       imageNumber: 0,
       quoteNumber: 0
     }
   }

  /*
    Randomly selects an image and quote index
  */
  getRandomNumber(imagesLength, quotesLength){
    this.setState({
      imageNumber: Math.floor(Math.random() * Math.floor(imagesLength)),
      quoteNumber: Math.floor(Math.random() * Math.floor(quotesLength))
    })
  }

  /*
    Retrieves the photographers name from the image name
  */
  getPhotographersName(imageName){
    const name = imageName.split('-');
    return name[0] + " " + name[1];
  }

  updateQuoteImage(getRandomNumberFunction, imagesLength, quotesLength) {
     setTimeout(function(){
       this.getRandomNumber(imagesLength, quotesLength);
     }.bind(this), 5000);
  }

  render () {
      const {images, quotes} = this.props;
      const {imageNumber, quoteNumber} = this.state;
      const imageName = images[imageNumber];
      this.updateQuoteImage(this.getRandomNumber, images.length, quotes.length);

      return <div class={styles.app}>
          <div className={styles.imageWrapper}>
            <img src={"./Images/" + imageName}/>
            <div className={styles.quoteUnderlayer}/>
            <div className={styles.quote}>
              <h1>
                {quotes[quoteNumber]}
              </h1>
            </div>
          </div>
          <div className={styles.takenBy}>
              Image taken by <span>{this.getPhotographersName(imageName)}</span>
          </div>
      </div>;
  }
}

// Find all DOM containers, and render our component into them.
var containers = document.querySelectorAll('.cfe-app')
containers.forEach(domContainer => {
    const userid = domContainer.dataset.userid
    // render the component into the DOM
    ReactDOM.render(
      e(ReactImageQuotes, {
        images: ["alberto-restifo-unsplash.jpg", "ales-krivec-unsplash.jpg", "bailey-zindel-unsplash.jpg",
        "claudio-testa-unsplash.jpg", "daniela-cuevas-unsplash.jpg", "dave-hoefler-unsplash.jpg",
        "jeff-king-unsplash.jpg", "jeremy-bishop-unsplash.jpg", "johannes-plenio-unsplash.jpg",
        "ken-cheung-unsplash.jpg", "kenneth-thewissen-unsplash.jpg", "luca-bravo-unsplash.jpg",
        "luca-micheli-unsplash.jpg", "mark-harpur-unsplash.jpg", "pietro-de-grandi-unsplash.jpg",
        "pine-watt-unsplash.jpg", "robert-lukeman-unsplash.jpg", "rodrigo-soares-unsplash.jpg",
        "ryan-schroeder-unsplash.jpg", "simon-berger-unsplash.jpg"],
        quotes: ["Every moment is a fresh beginning. – T.S Eliot", "Never regret anything that made you smile. – Mark Twain",
         "Impossible is for the unwilling - John Keats", "Be youreself; everyone else is already taken. - Oscar Wilde",
         "A room without books is like a body without a soul. ― Marcus Tullius Cicero",
         "Be the change that you wish to see in the world. ― Mahatma Gandhi",
         "In three words I can sum up everything I've learned about life: it goes on.― Robert Frost",
         "Always forgive your enemies; nothing annoys them so much. ― Oscar Wilde",
         "It is better to be hated for what you are than to be loved for what you are not. ― Andre Gide, Autumn Leaves",
         "Life is what happens to us while we are making other plans. ― Allen Saunders",
         "I have not failed. I've just found 10,000 ways that won't work. ― Thomas A. Edison",
         "Everything you can imagine is real. ― Pablo Picasso",
         "Do what you can, with what you have, where you are. ― Theodore Roosevelt",
         "Success is not final, failure is not fatal: it is the courage to continue that counts. ― Winston S. Churchill",
         "It's the possibility of having a dream come true that makes life interesting. ― Paulo Coelho, The Alchemist",
         "Nothing is impossible, the word itself says 'I'm possible'! ― Audrey Hepburn",
         "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
         "May you live every day of your life. ― Jonathan Swift",
         "Always do what you are afraid to do. ― Ralph Waldo Emerson",
         "Do not go where the path may lead, go instead where there is no path and leave a trail. ― Ralph Waldo Emerson"]
      }),
      domContainer
    )
});
