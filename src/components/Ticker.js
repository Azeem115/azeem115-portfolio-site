import Ticker from 'react-ticker'

const MoveStuffAround = () => (
    <div>
        <Ticker speed={13} mode="chain" offset="20">
            {({ index }) => (
                <>
                <h1 className="is-size-3-mobile hero-heading-h1">
                    <span>UI Designer.</span><span className="heading-italic-text">UX Designer.</span><span>Developer.</span>
            </h1>
                </>
            )}
        </Ticker>
        <Ticker direction ="toRight" speed={13} mode="chain" offset="20">
            {({ index }) => (
                <>
                <h1 className="is-size-3-mobile hero-heading-h1">
                    <span className="heading-stroke-text">Your Digital Craftsman.</span><span className="heading-italic-text">Community Builder.</span>
                </h1>
                </>
            )}
        </Ticker>
    </div>
)

export default MoveStuffAround