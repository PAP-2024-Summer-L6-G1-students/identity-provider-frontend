import Footer from "../components/Footer.jsx"
import Header from "../components/Header.jsx";
export default function Layout(props) {
    return (
        <>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </>
    );
}