import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
    return <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="140" cy="140" r="120" />
        <rect x="0" y="280" rx="3" ry="3" width="280" height="20" />
        <rect x="0" y="330" rx="3" ry="3" width="280" height="84" />
        <rect x="173" y="418" rx="20" ry="20" width="100" height="39" />
        <rect x="10" y="417" rx="0" ry="0" width="80" height="43" />
    </ContentLoader>
}

export default LoadingBlock;