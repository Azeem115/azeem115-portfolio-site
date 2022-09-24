import Ticker from 'react-ticker'

const MoveStuffAround = () => (
    <Ticker speed={13} mode="chain" offset="20">
        {({ index }) => (
            <>
            <h1 className="is-size-3-mobile hero-heading-h1">
                {/* {title} */}<span>UI Designer.</span><span className="heading-italic-text">UX Designer.</span><span>Developer.</span><span className="heading-stroke-text">Your Digital Craftsman.</span>
          </h1>
            </>
        )}
    </Ticker>
)

export default MoveStuffAround