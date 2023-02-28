import loadingIcon from '../images/raccoonIcon.png';

const LoadingIcon = () => {
    return (
        <div className="loadingContainer">
            <img className = "loadingIcon" src = { loadingIcon } alt = "spinning raccoon loading icon" />
        </div>
    )
}

export default LoadingIcon;