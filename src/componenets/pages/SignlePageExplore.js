import SingleExploreBannner from './includes/components/SingleExploreBanner'
import Navbar from './includes/widgets/Navbar'
import Footer from './includes/widgets/Footer'

export default function SignlePageExplore(props) {
    const id = props.match.params.id;
    
    return (
        <div>
            <Navbar />
            <SingleExploreBannner id={id}/>
            <Footer />
        </div>
    )
}
