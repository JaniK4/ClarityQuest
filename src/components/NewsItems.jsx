import  { Component } from 'react'
import PropTypes from 'prop-types';
export class NewsItems extends Component {
    handleImageError = (event) => {
      event.target.src = 'https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/07/oneplus-12r-review-05-1.jpg'; // Fallback image URL
    };
  render() {
    let {imageUrl,title,description,newsUrl}=this.props;
    const imageSrc = (imageUrl && imageUrl.trim() !== "") ? imageUrl : 'https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/07/oneplus-12r-review-05-1.jpg';
    return (
      <div className="m-2">
        {/* <div className="card p-0 text-center w-100" > */}
        <div className="card p-0  " style={{width:'18rem'}}>
          <img src={imageSrc} alt="Article" className="rounded" style={{ height: '10rem' }} 
            onError={this.handleImageError}
          />
          <div className="card-body">
              <div className="card-title fw-bold">{title}...</div>
              <div className="card-text " >{description}...</div>
              <a href={newsUrl} target="_blank" className="btn btn-success btn-md my-3">
                Read More
              </a>
          </div>
        </div>
      </div>
    )
  }
}


NewsItems.propTypes = {
    imageUrl: PropTypes.string.isRequired, 
    newsUrl: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired,  
  };

export default NewsItems