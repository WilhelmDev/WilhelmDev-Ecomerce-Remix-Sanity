import stylesAbout from '~/styles/about.css'
import imgAbout from '../../public/img/header.jpg'

export function meta() {
    return {
        title: 'About Us',
        description: 'web de bebidas con React/Cms/RemixRun/GraphQl/responsive'
    }
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href:stylesAbout
        },
        {
            rel: 'preload',
            href: imgAbout,
            as: 'image'
        }
    ]
}

const About = () => {
    return (
        <main className='contenedor nosotros'>
            <h2 className='heading'>Nosotros </h2>
            <div className="contenido">
                <img src={imgAbout} alt="imagen about us" />

                <div>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quasi repellendus nam, fuga odit aliquam eveniet exercitationem earum
                    error ad rem accusantium laborum. Eius quae mollitia nostrum ducimus in possimus modi.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque expedita, 
                    autem quasi perspiciatis hic numquam possimus id voluptatibus quis veritatis dignissimos 
                    iure aliquam suscipit, pariatur ullam alias placeat. Excepturi Lorem ipsum dolor sit amet 
                    consectetur, adipisicing elit. Eligendi quibusdam cum et amet error asperiores sit 
                    provident veritatis, iste nihil excepturi, totam doloremque? Delectus aut aliquam reiciendis 
                    iusto voluptates ipsam.</p>

                </div>
            </div>
        </main>
    )
}

export default About