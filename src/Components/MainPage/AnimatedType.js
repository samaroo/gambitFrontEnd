import Typewriter from 'typewriter-effect';

const AnimatedType = (props) => {
    return (
        <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString(`Let's stop hate speech...`)
                .callFunction(() => {
                    console.log('String typed out!');
                })
                .pauseFor(2500)
                .start();
            }}
        />
    );
};

export default AnimatedType;