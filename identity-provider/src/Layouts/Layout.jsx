import Footer from "../components/Footer.jsx"

export default function Layout(props) {
    return (
        <>
            {props.children}
            <Footer></Footer>
        </>
    );
}