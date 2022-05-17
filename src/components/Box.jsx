import Footer from "./Footer";
import Main from "./Main";
import Title from "./Title";

export default function Box(weather) {
    return (
        <div className='box'>
            <Title />
            <Main {...weather} />
            <Footer {...weather} />
        </div>
    );

}